import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DescribesBest, InterestsMost, Math, Recommendation, RightPlace, Way } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DescribesBest />,
      },
      {
        path: "/interests",
        element: <InterestsMost />,
      },
      {
        path: '/rightplace',
        element: <RightPlace />
      },
      {
        path: '/math',
        element: <Math />
      },
      {
        path: '/way',
        element: <Way />
      },
      {
        path: '/recommendation',
        element: <Recommendation />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
