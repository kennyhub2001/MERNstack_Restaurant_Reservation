# MERN Stack Restaurant Reservation – Installation Guide
This guide will help you set up and run the MERNstack_Restaurant_Reservation project on your local machine.

## 🖥️ Prerequisites
Before you begin, make sure you have the following installed:
-Node.js (v14 or higher) ➔ Download Node.js
-npm (comes with Node.js)
-MongoDB Atlas account (or local MongoDB server) ➔ Get MongoDB Atlas
-Git ➔ Download Git

## 📦 Installation Steps
###1. Clone the Repository
git clone https://github.com/kennyhub2001/MERNstack_Restaurant_Reservation.git
cd MERNstack_Restaurant_Reservation

###2. Set Up the Backend
cd backend
npm install

Create a config.env file inside the /backend folder and add the following:
PORT = 4000
FRONTEND_URL = http://localhost:5173/
MONGO_URI = mongodb+srv://kennosoro44:vJ1Yn2OYoGCtfJe8@cluster0.qgmvdj9.mongodb.net/?retryWrites=true

###3. Set Up the Frontend
Open a new terminal window/tab:
cd frontend
npm install

###4. Run the Project
-Start the Backend Server
cd backend
npm run server

Backend runs on http://localhost:4000

-Start the Frontend App
cd frontend
npm start

Frontend runs on http://localhost:5173/

##⚙️ Project Structure
MERNstack_Restaurant_Reservation/
├── backend/ # Express API and MongoDB connection
├── frontend/ # React client app
└── README.md

##🐛 Common Issues
-CORS Errors: Ensure backend uses CORS middleware.
-MongoDB Connection Error: Verify MongoDB URI in .env.
-Port Already in Use: Change the PORT value if needed.
