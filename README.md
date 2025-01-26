# React App with RESTful API

This is the assignment.
This is a React application with a RESTful API that provides a user interface for managing finances, including a dashboard, a funds page for deposits and withdrawals, and stock data integration.

Features:

Dashboard: Visualize your financial overview.
Funds Page: Deposit and withdraw funds to manage your account balance.
Stock Data (using Twelve Data API): Access real-time or historical stock data (subject to Twelve Data API limitations).
Getting Started

Prerequisites:

Node.js and npm (or yarn) installed on your system.
Clone the Repository:

Bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
 Install Dependencies:

Bash
npm install  # or yarn install
 Environment Variables:

Create a .env file in your project root (ignore this file in Git) and add the following environment variable (replace YOUR_TWELVE_DATA_API_KEY with your actual Twelve Data API key):

REACT_APP_TWELVE_DATA_API_KEY=YOUR_TWELVE_DATA_API_KEY
 Start the Development Server:

Bash
npm start  # or yarn start
 This will start the development server, typically accessible at http://localhost:3000/ in your web browser.

Assumptions and Limitations:

This project assumes a basic understanding of React, RESTful APIs, and financial management concepts.
The stock data integration relies on the Twelve Data API, which may have limitations on data availability, usage quotas, or pricing. Refer to their documentation for details: https://twelvedata.com/docs
The functionality of the stock data may be impacted if the backend for stocks is not working properly.
