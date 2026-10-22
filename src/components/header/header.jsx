import { categories } from '../../data/recipes.js';
import styles from './header.module.css';

export default function Header({ active }) {
  const cls = (key) =>
    active === key || (key === 'catalog' && active === 'recipe')
      ? `${styles.link} ${styles.active}`
      : styles.link;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoMy}>My</span>Recipe
      </div>

      <nav className={styles.nav}>
        <span className={cls('home')}>Головна</span>
        <span className={cls('catalog')}>Рецепти</span>

        <div className={styles.dropdown}>
          <span className={styles.link} tabIndex={0}>
            Категорія
          </span>
          <ul className={styles.menu}>
            {categories.map((name) => (
              <li key={name} className={styles.menuItem}>
                {name}
              </li>
            ))}
          </ul>
        </div>

        <span className={cls('about')}>Про нас</span>
      </nav>

      <span className={styles.auth}>Вхід/Реєстрація</span>
    </header>
  );
}
