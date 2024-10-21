
# Chat-Live

Chat-Live is a real-time chat application currently under development using the **MERN stack** (MongoDB, Express, React, and Node.js). The application allows users to register, log in, and chat with others in real-time.

## Features

- User Authentication (Login/Signup)
- Real-time messaging with Socket.io
- Group chats
- User profile and picture upload
- Responsive UI using Chakra UI
- Dark mode theme

## Tech Stack

- **Frontend**: React.js, Chakra UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.io
- **Authentication**: JWT (JSON Web Tokens)

## Installation

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- MongoDB
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Chat-Live.git
```

### 2. Navigate into the Project Directory

```bash
cd Chat-Live
```

### 3. Install Dependencies

#### Backend (Node.js)

Navigate to the backend directory and install the dependencies:

```bash
cd backend
npm install
```

#### Frontend (React.js)

Navigate to the frontend directory and install the dependencies:

```bash
cd ../frontend
npm install
```

### 4. Set Up Environment Variables

Create a `.env` file in the **backend** directory with the following environment variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 5. Start MongoDB

Ensure MongoDB is running on your machine. If you are using MongoDB locally, run the following command in a separate terminal:

```bash
mongod
```

If you are using MongoDB Atlas, ensure your connection string is added in the `MONGO_URI` variable in the `.env` file.

### 6. Run the Project

#### Backend

Start the backend server:

```bash
cd backend
npm start
```

The backend server will run on `http://localhost:5000`.

#### Frontend

Start the React frontend:

```bash
cd ../frontend
npm start
```

The React application will run on `http://localhost:3000`.

### 7. Access the Application

Open your browser and go to `http://localhost:3000`. You should be able to register, log in, and start using the chat app.

## Troubleshooting

If you encounter any issues during setup, ensure:

- MongoDB is running locally or your connection string is correct.
- The `.env` file is correctly set up with all the necessary environment variables.

Feel free to raise an issue in the repository if you need further assistance.

## License

This project is licensed under the MIT License.
