import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import About from './Component/Friend/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Home from './Component/Home/Home.jsx';
import First from './Component/First/First.jsx';
import Friends from './Component/Friends/Friends.jsx';
import FriendDetail from './Component/FriendDetail/FriendDetail.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//  {
//    path: '/contact',
//   element:<Contact></Contact>
// },

// {
//   path: '*',
//  element:<ErrorPage></ErrorPage>
// }
// ]),

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'friends',
        element:<Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendId',
        element:<FriendDetail></FriendDetail>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'about',
        element:<About></About>
        
      },
      {
        path: 'contact',
        element:<Contact></Contact>
      },
      {
        path: '*',
       element:<ErrorPage></ErrorPage>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
