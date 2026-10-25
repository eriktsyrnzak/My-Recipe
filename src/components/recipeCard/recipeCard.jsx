import { Link } from 'react-router';
import Rating from '../rating/rating.jsx';
import styles from './recipeCard.module.css';

export default function RecipeCard({ id, title, rating, color }) {
  return (
    <article className={styles.card}>
      <Link
        to={`/recipe/${id}`}
        className={styles.imageBox}
        style={{ background: color }}
        aria-label={title}
      />
      <div className={styles.caption}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <Rating value={rating} />
        </div>
        <button type="button" className={styles.bookmark} aria-label="Зберегти рецепт">
          <svg viewBox="0 0 16 22" width="16" height="22" fill="currentColor">
            <path d="M0 0h16v22l-8-6-8 6z" />
          </svg>
        </button>
      </div>
    </article>
  );
}
