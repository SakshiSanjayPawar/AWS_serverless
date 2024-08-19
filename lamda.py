import json
import boto3
from decimal import Decimal  # Import Decimal from decimal module

# Initialize DynamoDB resource and table
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('sakshi_aws_serverless_project')

def decimal_to_int(data):
    """Convert Decimal types to int for JSON serialization."""
    if isinstance(data, Decimal):
        return int(data)
    elif isinstance(data, dict):
        return {k: decimal_to_int(v) for k, v in data.items()}
    elif isinstance(data, list):
        return [decimal_to_int(i) for i in data]
    else:
        return data

def lambda_handler(event, context):
    # Extract query parameters
    search_query = event.get('queryStringParameters', {}).get('search', '').lower()
    
    # Fetch the current views count
    try:
        response = table.get_item(Key={'id': '0'})
        views = response['Item']['views'] if 'Item' in response else 0
    except Exception as e:
        print(f"Error fetching item from DynamoDB: {e}")
        views = 0
    
    # Update views count
    try:
        table.update_item(
            Key={'id': '0'},
            UpdateExpression="SET #v = #v + :increment",
            ExpressionAttributeNames={"#v": "views"},
            ExpressionAttributeValues={':increment': 1}
        )
    except Exception as e:
        print(f"Error updating item in DynamoDB: {e}")
    
    # Content of the blog post (example)
    blog_content = """
    Understanding Serverless AWS Applications
    Searched by 2218+ readers

    Introduction
    ...
    Subscribe
    © 2024 Sakshi Pawar. All rights reserved.
    """
    
    # Normalize blog content and search query to lowercase
    blog_content_lower = blog_content.lower()
    
    # Count occurrences of the search query in the blog content
    count = blog_content_lower.count(search_query)
    
    # Return the results
    return {
        'statusCode': 200,
        'body': json.dumps({
            'message': f'The keyword "{search_query}" was found {count} times in the blog post.' if count > 0 else 'No occurrences found.',
            'views': decimal_to_int(views)  # Convert Decimal to int for JSON serialization
        })
    }
