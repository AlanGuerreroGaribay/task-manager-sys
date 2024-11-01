# Task Manager App

This project is a task management application with a backend in **Node.js** + **Express** and a frontend in **React** + **Vite**. The application allows creating, viewing, and updating the status of tasks stored locally.

## Table of Contents

- [Requirements](#requirements)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [Running the Complete Application](#running-the-complete-application)

## Requirements

To run this application, make sure you have the following requirements installed on your system:

- **Node.js** v14 or higher
- **npm** v6 or higher
- **Git** (optional, for cloning the repository)

## Backend Setup

1. Clone the repository and navigate to the backend folder:

    ```bash
    git clone <repository_URL>
    cd backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the backend root directory with the following variables:

    ```env
    PORT=5000
    ```

   Here, `PORT` is the port on which the backend server will listen for requests. Ensure this port is not already in use.

4. Start the server:

    ```bash
    npm run dev
    ```

   The server will be available at `http://localhost:3000` (or on the port you set in the `.env` file).

### Backend Endpoints

- **GET /tasks** - Retrieves all tasks.
- **POST /tasks** - Creates a new task.

## Frontend Setup

1. From the project root, navigate to the frontend folder:

    ```bash
    cd frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the frontend root directory with the following variable:

    ```env
    VITE_API_URL=http://localhost:3000
    ```

   Here, `VITE_API_URL` is the backend URL, which should match the port you set in the backend’s `.env` file. Ensure the backend is running before starting the frontend.

4. Start the React application:

    ```bash
    npm run dev
    ```

   The frontend application will be available at `http://localhost:5173` (or on the default port Vite assigns).

## Environment Variables

Each of the projects (backend and frontend) uses environment variables for configuration. Below are the main variables you need to set in each `.env` file:

### Backend (`backend/.env`)

```env
PORT=5000
