# Scam Detector Backend
### Scam Detector Backend is a RESTful API designed to support the Scam Detection application. This API handles the fetching, sorting, and filtering of scam data related to phone and email scams. It supports the frontend application by providing necessary data and actions for reporting and managing scam incidents.

This backend is built using Node.js, Express, and connects to a MongoDB database for data storage and retrieval.

# Features
CRUD Operations for Scam Reports: Create, read, update, and delete scam reports.
Sorting: Sort scam data by the number of reports.
Filtering: Filter scam data by type (Phone, Email).
Pagination: Fetch scam data with pagination support (default 10 records per page).
Authentication: Basic authentication for accessing API endpoints.
API Documentation: API documentation for available endpoints.

# Tech Stack
Backend: Node.js, Express
Database: MongoDB (using Mongoose for ODM)
Authentication: JWT (JSON Web Tokens)
API Documentation: Swagger (optional, for better documentation of your API)
Environment Configuration: dotenv (for managing environment variables)

# Setup Instructions
### Prerequisites
Node.js and npm installed (preferably the latest stable version)
Download Node.js
MongoDB instance or MongoDB Atlas account.
A code editor like VSCode.
Installation
Clone the repository:

### bash
Copy code
git clone https://github.com/Alkasavarn02/scam-detector-backend.git
cd scam-detector-backend
Install dependencies:

### bash
Copy code
npm install
Set up environment variables:

# Create a .env file in the root directory of the project and add the following environment variables:

plaintext
Copy code
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Replace your_mongo_connection_string with your MongoDB URI.
Replace your_jwt_secret with a secret key for JWT authentication.
Start the server:

# bash
Copy code
npm start
The server will start on http://localhost:5000.

# API Endpoints
1. GET /api/scams
Description: Fetch all scam reports with optional filtering and pagination.

Query Parameters:

type: Optional, filter scams by type (Phone, Email).
page: Optional, specify the page number for pagination (default is 1).
limit: Optional, specify the number of records per page (default is 10).
Response:

json
Copy code
{
  "total": 50,
  "page": 1,
  "scams": [
    {
      "id": "1",
      "type": "Phone",
      "value": 1000,
      "reports": 5
    },
    ...
  ]
}
2. POST /api/scams
Description: Create a new scam report.

Request Body:

json
Copy code
{
  "type": "Phone",
  "value": 500,
  "reports": 10
}
Response:

json
Copy code
{
  "message": "Scam report created successfully",
  "scam": {
    "id": "2",
    "type": "Phone",
    "value": 500,
    "reports": 10
  }
}
3. PUT /api/scams/:id
Description: Update an existing scam report.

Request Body:

json
Copy code
{
  "type": "Email",
  "value": 1200,
  "reports": 7
}
Response:

json
Copy code
{
  "message": "Scam report updated successfully",
  "scam": {
    "id": "1",
    "type": "Email",
    "value": 1200,
    "reports": 7
  }
}
4. DELETE /api/scams/:id
Description: Delete a scam report by its ID.

Response:

json
Copy code
{
  "message": "Scam report deleted successfully"
}
5. POST /api/login
Description: Authenticate a user and return a JWT token.

Request Body:

json
Copy code
{
  "email": "user@example.com",
  "password": "yourpassword"
}
Response:

json
Copy code
{
  "token": "your_jwt_token"
}
6. GET /api/user
Description: Get the current user's information (protected route).

Authorization: Bearer token (JWT required).

Response:

json
Copy code
{
  "id": "1",
  "email": "user@example.com"
}
# File Structure
bash
Copy code
/scam-detector-backend
│
├── /controllers           # Controllers for handling API requests
├── /models                # Mongoose models (Scam, User, etc.)
├── /routes                # API routes for handling scam data, authentication
├── /middleware            # Middleware for authorization, validation, etc.
├── /config                # Database and app configuration
├── /utils                 # Utility functions (e.g., JWT authentication)
├── /docs                  # Optional Swagger docs
├── app.js                 # Entry point for the application
└── .env                   # Environment variables (Mongo URI, JWT secret)

# Authentication
The application uses JWT (JSON Web Tokens) for authentication. To access protected routes like /api/user, the user must first log in through the POST /api/login endpoint, which returns a JWT. This token should be included in the Authorization header for subsequent requests.

Example header for protected routes:

plaintext
Copy code
Authorization: Bearer your_jwt_token
Development Tips
Postman: Use Postman to test the API endpoints.
Error Handling: Ensure consistent error messages with status codes for better error handling.
Security: Use environment variables for sensitive information (e.g., JWT secret, database URI).
Testing: Use testing libraries like Jest or Mocha for API tests or Postman.

# Contributing
We welcome contributions! If you have any improvements, feel free to fork the repository and submit a pull request.

# Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

# Acknowledgements
Node.js Documentation
Express.js Documentation
Mongoose Documentation
JWT Documentation
