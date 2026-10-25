import { Link, NavLink } from 'react-router';
import { categories } from '../../data/recipes.js';
import styles from './header.module.css';

const navClass = ({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link);

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoMy}>My</span>Recipe
      </Link>

      <nav className={styles.nav}>
        <NavLink to="/" end className={navClass}>
          Головна
        </NavLink>
        <NavLink to="/catalog" className={navClass}>
          Рецепти
        </NavLink>

        <div className={styles.dropdown}>
          <span className={styles.link} tabIndex={0}>
            Категорія
          </span>
          <ul className={styles.menu}>
            {categories.map((name) => (
              <li key={name}>
                <Link to="/catalog" className={styles.menuItem}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <NavLink to="/about" className={navClass}>
          Про нас
        </NavLink>
      </nav>

      <Link to="/login" className={styles.auth}>
        Вхід/Реєстрація
      </Link>
    </header>
  );
}
