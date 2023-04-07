import React from 'react'
import UsersContextProvider from './context/usersContext';
import AlertContextProvider from './context/alertContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import UserDetails from './components/UserDetails';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <MainLayout />, 
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'users/:username', element: <UserDetails /> },
    ] 
  }
]);

const App = () => {
  return (
    <UsersContextProvider>
      <AlertContextProvider>
        <RouterProvider router={router}>
        </RouterProvider>
      </AlertContextProvider>
    </UsersContextProvider>
  )
}

export default App