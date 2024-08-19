# Serverless Web Application on AWS

## Overview
This project showcases the implementation of a serverless web application using a range of AWS services. The application features a blog section that dynamically displays the number of viewers. The viewer count updates in real-time as users access the website, demonstrating the seamless integration of serverless technologies.

## Architecture![model](https://github.com/user-attachments/assets/8c6a460b-aaac-4e8a-a4f1-9756093c5f69)

The application utilizes the following AWS services:
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

## Features
- **Blog Viewer Counter:** Displays the current number of viewers accessing the blog. The count is updated dynamically via an AWS Lambda function, demonstrating real-time interaction.
- 

## Steps Followed->
1. Set up the lambda function to interact with DynamoDB for retrieving and updating the viewer count.

2. Configure S3  by uploading `index.html`, `style.css`, and `script.js` to an S3 bucket.

3.  Create a CloudFront distribution linked to the S3 bucket to serve content with low latency.

4.   Do setup for personal domain to the CloudFront distribution for custom domain access.

5.  Access the blog via the custom domain and verify that the viewer count updates dynamically.


This project offers hands-on experience with serverless architecture, demonstrating how to build and deploy a scalable, cost-effective web application using AWS services.
