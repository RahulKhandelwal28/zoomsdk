import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Meeting from './meeting';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

let payload = {
  meetingNumber: 77521570762,
  role: 0,
  sdkKey: 'NQugdMCPSvGM6M8jvOrWSA',
  sdkSecret: 'hvQ5KvyhvE9fxG4AyEz98A1za6rTkQOu',
  password: 'Y0eW9T',  
  userName: 'rahul',
  userEmail: '',
  leaveUrl: 'https://localhost:3000',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/meeting',
    element: <Meeting payload={payload} />,
  },
]);

root.render(
  <RouterProvider router={router}>
    {/* Include your main application component or layout here if needed */}
  </RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
