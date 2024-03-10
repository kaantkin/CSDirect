import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <div className='layout-wrapper'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);