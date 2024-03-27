import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MycontextProvider } from './context/contextapi.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <MycontextProvider>
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
  </MycontextProvider>
)
