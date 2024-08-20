# Serverless Web Application on AWS

## Overview
This project is a serverless web application built using AWS services, featuring a real-time blog viewer counter and a word search functionality. The viewer count updates dynamically as users visit the site, and users can search for a specific word in the blog to see how many times it occurs, showcasing the integration of serverless technologies.


## Architecture![model](https://github.com/user-attachments/assets/8c6a460b-aaac-4e8a-a4f1-9756093c5f69)

- **DynamoDB:** Stores viewer count and word search data.
- **AWS Lambda:** Fetches and updates viewer counts; processes word search queries.
- **Amazon S3:** Hosts static website files (HTML, CSS, JS).
- **Amazon CloudFront:** Ensures low-latency content delivery.
- **Custom Domain:** Access the application via a personalized domain.

## Project Structure

- `index.html`: Main blog page structure.
- `style.css`: Visual styling.
- `script.js`: Manages viewer count, subscribe button, and word search functionality.
- `lambda_function.py`: AWS Lambda script for interacting with DynamoDB and processing word searches.

## Features

- **Real-Time Viewer Counter:** Automatically updates the number of blog viewers.
- **Word Search Functionality:** Allows users to search for a specific word in the blog and returns the number of occurrences.
- **Custom Domain:** Accessible through a personalized URL.

## Setup Steps

1. **AWS Lambda:** Configure Lambda to interact with DynamoDB for viewer counts and word search queries.
2. **Amazon S3:** Upload and host static files.
3. **CloudFront:** Create a distribution for low-latency access.
4. **Custom Domain:** Link the domain to CloudFront.
5. **Verify:** Test the blog for real-time updates and word search functionality.

This project demonstrates how to build a scalable, cost-effective web application using AWS serverless technologies.
