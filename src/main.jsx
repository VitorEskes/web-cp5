import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Importando routers

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './router/Home.jsx'
import Produtos from './router/Produtos.jsx'
import Error from './router/Error.jsx'
import Sobre from './router/Sobre.jsx'
import Register from './router/RegisterProduct.jsx';
import Login from './router/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/produtos',
        element: <Produtos/>,
      },
      {
        path: '/sobre',
        element: <Sobre/>,
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/Login',
        element: <Login/>
      }
    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
