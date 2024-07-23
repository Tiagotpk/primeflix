import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import Router from "./router.jsx"
import { ToastContainer } from "react-toastify" 
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer autoClose={3000} />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
