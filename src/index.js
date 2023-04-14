import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { RecoilRoot } from 'recoil';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Home from './component/Assignment2/Home';
import Task from './component/Assignment2/Task';

import Page1 from './component/Assignment1/Page1';
import Page2 from './component/Assignment1/Page2';


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/task-list",
    element: <Task />
  },
  {
    path: "/page1",
    element: <Page1 />
  },
  {
    path: "/page2",
    element: <Page2 />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
