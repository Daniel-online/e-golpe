# e-Golpe Project Documentation


## Overview

e-Golpe is a collaborative platform designed to help people share, identify, and discuss possible online scams. The main goal of this software is to empower users to:
- Report suspicious websites, messages, or online activities they encounter
- Search and browse a community-driven feed of potential scams
- Discuss and validate reports with other users to help prevent fraud
- Build a collective knowledge base to increase awareness and reduce the impact of online scams

The project is structured into three main parts:
- **client**: Frontend application built with React, Vite, and Tailwind CSS.
- **server**: Backend API built with Node.js and Express, with MongoDB for data persistence.
- **e-Golpe**: Project configuration and IDE settings (not part of the application code).

---

## Project Structure

```
client/
  e-golpe/
    ... (frontend source code and configs)
server/
  ... (backend source code and configs)
e-Golpe/
  ... (IDE/project settings)
```

### Client (Frontend)
- **Frameworks/Libraries**: React, Vite, Tailwind CSS
- **Key Directories:**
  - `src/`: Main source code
    - `components/`: UI components, organized into `imported` (shared) and `local` (feature-specific)
    - `pages/`: Page-level components (e.g., `Home.jsx`, `Auth.jsx`)
    - `Data/`: Static or mock data
    - `assets/`: Images and other static assets
  - `public/`: Static files served by Vite
  - Config files: `vite.config.js`, `tailwind.config.js`, `eslint.config.js`, etc.

### Server (Backend)
- **Frameworks/Libraries**: Node.js, Express, MongoDB
- **Key Directories:**
  - `Controllers/`: Request handlers for authentication and user management
  - `Models/`: Mongoose models (e.g., `user.model.js`)
  - `Routes/`: API route definitions
  - `Services/`: Business logic and service layer
  - `DataBase/`: Database connection logic (`dbConnect.js`)
  - `server.js`: Main entry point for the backend server

### e-Golpe (IDE/Project Settings)
- Contains IDE configuration files (e.g., `.idea/` for JetBrains IDEs)
- Not required for running the application

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or cloud instance)

### Setup

#### 1. Install Dependencies
- **Frontend:**
  ```sh
  cd client/e-golpe
  npm install
  ```
- **Backend:**
  ```sh
  cd server
  npm install
  ```

#### 2. Configure Environment
- Set up environment variables as needed (e.g., MongoDB URI, JWT secrets)
- Example `.env` for backend:
  ```env
  MONGODB_URI=mongodb://localhost:27017/e-golpe
  JWT_SECRET=your_jwt_secret
  ```

#### 3. Run the Application
- **Backend:**
  ```sh
  npm start
  # or
  node server.js
  ```
- **Frontend:**
  ```sh
  npm run dev
  ```

---

## Key Features
- User authentication (login/signup)
- Post feed and creation
- User profile management
- Responsive UI with Tailwind CSS
- Modular component structure

---

## Development
- **Frontend:**
  - Main entry: `src/main.jsx`, `src/App.jsx`
  - Components: `src/components/`
  - Pages: `src/pages/`
- **Backend:**
  - Entry: `server.js`
  - API routes: `Routes/`
  - Controllers/Services: `Controllers/`, `Services/`

---

## Scripts
- **Frontend:**
  - `npm run dev`: Start development server
  - `npm run build`: Build for production
- **Backend:**
  - `npm start`: Start backend server

---

## License
Specify your license here (e.g., MIT, GPL, etc.)

---

## Contributing
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## Contact
Add your contact information or links here.
