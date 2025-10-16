# Mini Analytics Dashboard - Frontend Assessment

This project is a standalone, responsive analytics dashboard component built for the Journalyst frontend engineering assessment. It features a React frontend that fetches and visualizes mock trading performance data from a lightweight Express.js backend.

---

## 📸 Preview

<img width="1196" height="877" alt="Image" src="https://github.com/user-attachments/assets/24b3d45e-9e23-4855-a564-a9838f8647cb" />

<img width="665" height="550" alt="Image" src="https://github.com/user-attachments/assets/e928867f-4a31-443d-b5f0-dcb7b8466083" />

<img width="651" height="547" alt="Image" src="https://github.com/user-attachments/assets/127c8e6a-313d-4091-86cf-7cd5fcf84564" />



---

## ✨ Features

-   **Responsive Design:** The layout is fully responsive and works on various screen sizes, from mobile to desktop.
-   **Component-Based Architecture:** The UI is built with modular and reusable React components (`MetricCard`, `RecentTradesTable`, `PerformanceChart`).
-   **Data Visualization:** Uses the Recharts library to display a clear pie chart of the win/loss ratio.
-   **Dynamic Color-Coding:** The trade results table uses color to clearly distinguish between winning (green) and losing (red) trades.
-   **Clean Separation of Concerns:** The project is structured with separate directories for the frontend (`/client`) and backend (`/server`).

---

## 🛠️ Technology Stack

-   **Frontend:** React, Vite, Axios, Recharts
-   **Backend:** Node.js, Express.js, CORS
-   **Styling:** CSS with Flexbox and Grid for responsive layouts.

---

## 🚀 Setup and Installation

To run this project locally, you will need two separate terminals.

**1. Backend Server:**

# Navigate to the server directory
cd server

# Install dependencies
npm install

# Run the server
node server.js
# The server will be running on http://localhost:5001

**2. Frontend Client:**

# Navigate to the client directory
cd client

# Install dependencies
npm install

# Run the client
npm run dev
# The application will open in your browser at http://localhost:5173