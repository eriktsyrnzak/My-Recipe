import Layout from './components/layout/layout.jsx';
import Home from './pages/Home/home.jsx';
import Catalog from './pages/Catalog/catalog.jsx';
import About from './pages/About/about.jsx';
import Recipe from './pages/Recipe/recipe.jsx';
import Login from './pages/Login/login.jsx';

const currentPage = 'login';

const pages = {
  home: <Home />,
  catalog: <Catalog />,
  about: <About />,
  recipe: <Recipe />,
};

export default function App() {
  if (currentPage === 'login') return <Login />;

  return <Layout active={currentPage}>{pages[currentPage]}</Layout>;
}
