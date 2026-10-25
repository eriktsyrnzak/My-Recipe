import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import Layout from './components/layout/layout.jsx';
import Home from './pages/Home/home.jsx';
import Catalog from './pages/Catalog/catalog.jsx';
import About from './pages/About/about.jsx';
import Recipe from './pages/Recipe/recipe.jsx';
import Login from './pages/Login/login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'catalog', element: <Catalog /> },
      { path: 'recipe/:id', element: <Recipe /> },
      { path: 'about', element: <About /> },
    ],
  },
  { path: '/login', element: <Login /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
