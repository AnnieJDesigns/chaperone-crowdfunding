import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import LoginPage from './pages/LoginPage';
import ProjectForm from './pages/CreateProject';
import CreateProject from './pages/CreateProject';
import CreatePledge from './pages/CreatePledge';
import AllProjectPage from './pages/AllProjectPage';
import Footer from './components/Footer/footer';
import SignUpPage from './pages/SignUpPage';

const HeaderLayout = () => {
  return (
    <div className='home'>
      <div className='page-container'>
        <Nav/>
        <div className='content-wrapper'>
            <Outlet/>
        </div>
      </div>
        {/* <footer className='footer_pin'>
          <Footer />
        </footer> */}
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
        path: '/projects/',
        element: <AllProjectPage />
      },
      {
        path: '/projects/:id',
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
      },
      {
        path: '/signup',
        element: <SignUpPage />
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
