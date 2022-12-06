import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NotFound from './pages/NotFound'
import Videos from './pages/Videos'
import VideoDetail from './pages/VideoDetail'
import Feed from './pages/Feed'
import History from './pages/History'
import Liked from './pages/Liked'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {index: true, element: <Videos/>},
      {path: 'youtube', element: <Videos/>},
      {path: 'youtube/:keyword', element: <Videos/>},
      {path: 'youtube/watch/:videoId', element: <VideoDetail/>},
      {path: 'youtube/feed', element: <Feed/>},
      {path: 'youtube/feed/history', element: <History/>},
      {path: 'youtube/feed/liked', element: <Liked/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
