Chat-Live
Chat-Live is a real-time chat application currently under development using the MERN stack (MongoDB, Express, React, Node.js). It allows users to authenticate, create group chats, and exchange real-time messages with others.

Features
User Authentication (Login/Sign Up)
Real-time messaging
Group chat support
Media sharing
Dark mode interface
Responsive design
Tech Stack
Frontend: React, Chakra UI, Socket.io-client
Backend: Node.js, Express.js, Socket.io
Database: MongoDB
Authentication: JWT (JSON Web Tokens)
Getting Started
Prerequisites
Ensure that you have the following installed on your machine:

Node.js (v14 or later)
MongoDB (running locally or on a cloud service like MongoDB Atlas)
Git (optional, but recommended for cloning the repository)
Installation
Follow these steps to set up Chat-Live on your local machine:

1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/chat-live.git
cd chat-live
2. Install dependencies
Frontend
bash
Copy code
cd frontend
npm install
Backend
bash
Copy code
cd ../backend
npm install
3. Set up environment variables
Create a .env file in the backend directory with the following environment variables:

bash
Copy code
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
For the frontend, you may need to add the backend API URL to an environment variable or proxy in the package.json.

4. Run MongoDB locally (optional)
If you're using MongoDB locally, make sure it's running:

bash
Copy code
mongod
5. Run the application
Start the backend server
bash
Copy code
cd backend
npm run dev
This will start the backend on http://localhost:5000.

Start the frontend server
bash
Copy code
cd ../frontend
npm start
The frontend will run on http://localhost:3000.

Usage
Open the application in the browser at http://localhost:3000.
Sign up for a new account or log in with an existing account.
Start chatting by creating a new group or joining existing chats.
Deployment
To deploy Chat-Live, ensure that you:

Push the code to a hosting service like Heroku for the backend.
Deploy the frontend to services like Netlify or Vercel.
Make sure to configure environment variables on the hosting platforms.

Contributing
Feel free to contribute to the project by opening issues or submitting pull requests. All contributions are welcome!
