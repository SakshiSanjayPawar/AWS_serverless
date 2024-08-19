# Serverless Web Application on AWS

## Overview
This project showcases the implementation of a serverless web application using a range of AWS services. The application features a blog section that dynamically displays the number of viewers. The viewer count updates in real-time as users access the website, demonstrating the seamless integration of serverless technologies.

## Architecture
The application utilizes the following AWS services:


![Screenshot 2024-08-17 155135](https://github.com/user-attachments/assets/680c5496-fde0-42fa-91aa-03700ec14925)


- **DynamoDB:** Serves as the NoSQL database to store application data, such as viewer counts.
- **AWS Lambda:** Executes backend logic to fetch and update the viewer count on the blog page.
- **Amazon S3:** Hosts and stores static files, including HTML, CSS, and JavaScript, for the blog.
- **Amazon CloudFront:** Provides low-latency content delivery by caching S3-hosted files at edge locations for faster access.
- **Personal Domain:** The application is accessible via a custom domain name, providing a more personalized experience.

## Project Structure
- `index.html`: The main HTML file containing the structure and content of the blog page.
- `style.css`: The CSS file responsible for the visual styling of the blog page.
- `script.js`: The JavaScript file for:
  - Dynamically updating the viewer count using an AWS Lambda function.
  - Managing the subscribe button functionality.
- `lambda_function.py`: Python script for the AWS Lambda function that retrieves and returns the current viewer count.
- `README.md`: Documentation file providing an overview of the project, its architecture, and setup instructions.

## Features
- **Blog Viewer Counter:** Displays the current number of viewers accessing the blog. The count is updated dynamically via an AWS Lambda function, demonstrating real-time interaction.
- **Subscribe Button:** Allows users to subscribe to the blog. Upon clicking the button:
  - The text changes to "Subscribed."
  - The button becomes disabled to prevent multiple subscriptions.
  - The button color changes to indicate the subscription status.

## Setup Instructions
1. **Deploy the Lambda Function:**
   - Upload `lambda_function.py` to AWS Lambda.
   - Set up the function to interact with DynamoDB for retrieving and updating the viewer count.

2. **Configure S3 for Static Hosting:**
   - Upload `index.html`, `style.css`, and `script.js` to an S3 bucket.
   - Enable static website hosting on the S3 bucket.

3. **Set Up CloudFront Distribution:**
   - Create a CloudFront distribution linked to the S3 bucket to serve content with low latency.

4. **Personal Domain Setup:**
   - Point your personal domain to the CloudFront distribution for custom domain access.

5. **Test the Application:**
   - Access the blog via the custom domain and verify that the viewer count updates dynamically.
   - Test the subscribe button functionality.

This project offers hands-on experience with serverless architecture, demonstrating how to build and deploy a scalable, cost-effective web application using AWS services.
