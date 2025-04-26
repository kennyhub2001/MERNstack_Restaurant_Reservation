# MERN Stack Restaurant Reservation – Installation Guide

This guide will help you set up and run the **MERNstack_Restaurant_Reservation** project on your local machine.

---

## 🖥️ Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v14 or higher) ➔ [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Atlas account** *(or local MongoDB server)* ➔ [Get MongoDB Atlas](https://www.mongodb.com/atlas)
- **Git** ➔ [Download Git](https://git-scm.com/)

---

## 📦 Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/kennyhub2001/MERNstack_Restaurant_Reservation.git
cd MERNstack_Restaurant_Reservation

###2. Set Up the Backend
```bash
cd backend
npm install

###3. Create a config.env file inside the /backend folder and add the following:
```config.env
PORT = 4000
FRONTEND_URL = http://localhost:5173/
MONGO_URI = mongodb+srv://kennosoro44:vJ1Yn2OYoGCtfJe8@cluster0.qgmvdj9.mongodb.net/?retryWrites=true

###4. Set Up the Frontend
```bash
cd frontend
npm install

###5. Start the Backend Server
```bash
cd backend
npm run server
Backend runs on http://localhost:4000

###4. Start the Frontend App
```bash
cd frontend
npm start
Frontend runs on http://localhost:5173/
