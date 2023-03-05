import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import LoginPage from './pages/LoginPage';
import ProjectForm from './pages/CreateProject';
import CreateProject from './pages/CreateProject';
import CreatePledge from './pages/CreatePledge';

const HeaderLayout = () => {
  return (
    <div>
    <Nav/>
    <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/project',
        element: <HomePage />
      },
      {
        path: '/project/:id',
        element: <ProjectPage />
      }, 
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/createproject',
        element: <CreateProject />
      },
      {
        path: '/createpledge',
        element: <CreatePledge />
      }

    ]
  }
]

)

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  
  )
}

export default App
