import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx';
import About from './Components/About us/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Photos from './Components/Photos/Photos.jsx';
import PhotoDetail from './Components/PhotoDetail/PhotoDetail.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: "/user/:userid",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: "/photos",
        loader: () => fetch('https://jsonplaceholder.typicode.com/photos'),
        element: <Photos></Photos>
      },
      {
        path: "/photo/:userid",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/photos/${params.userid}`),
        element: <PhotoDetail></PhotoDetail>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
