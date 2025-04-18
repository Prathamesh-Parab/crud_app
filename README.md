# MERN Task Manager App

A simple CRUD application built using the **MERN** stack:

- **MongoDB** - Database
- **Express.js** - Backend framework
- **React.js** - Frontend library
- **Node.js** - Backend runtime

---

## 📁 Project Structure

```
mern-crud-app/
├── client/   # React frontend
├── server/   # Node/Express backend
├── .gitignore
├── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-crud-app.git
cd mern-crud-app
```

### 2. Install dependencies

You will need to install both the frontend and backend dependencies.

```bash
# For the root dev scripts
npm install

# For the frontend
cd client && npm install

# For the backend
cd ../server && npm install
```

### 3. Setup MongoDB

Create a `.env` file in `/server`:

```
MONGO_URI=mongodb://127.0.0.1:27017/mern-crud
```

Alternatively, you can use **MongoDB Atlas** if you prefer a cloud-based database.

### 4. Run the app

After installing the dependencies and setting up MongoDB, you can run both the frontend and backend together.

From the root folder:

```bash
npm run dev
```

- **Frontend** will run on `http://localhost:3000`
- **Backend** will run on `http://localhost:5000`

### 5. Open the app in your browser

Once everything is running, open the app in your browser and you can begin using the **Task Manager** app to create, view, update, and delete tasks!

---

## 📸 Features

- Create, read, update, and delete tasks (CRUD operations)
- Responsive UI built with **React** and **Tailwind CSS**
- Simple REST API using **Express** and **MongoDB**

---

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **API**: RESTful API

---

## 🔧 Tools and Libraries

- **MongoDB** - NoSQL database
- **Express** - Web server framework
- **React** - Frontend library
- **Tailwind CSS** - CSS framework for responsive UI
- **Axios** - For making HTTP requests from React to Express
- **Nodemon** - Automatically restart the server during development
- **Concurrently** - Run both frontend and backend simultaneously in development

---

## ⚡️ Additional Features to Add

- User authentication (login/signup)
- Task prioritization and filtering
- Task deadlines and reminders

---

## 📄 License

This project is open-source under the MIT License.
