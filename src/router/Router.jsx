import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Resume from '../components/Resume';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'resume',
    element: <Resume />,
  },
]);
