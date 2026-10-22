import RecipeCard from '../../components/recipeCard/recipeCard.jsx';
import { recipes } from '../../data/recipes.js';
import styles from './home.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.title}>Знайди свій ідеальний рецепт</h1>
        <div className={styles.search}>
          <input
            type="search"
            className={styles.input}
            placeholder="Назва страви або інгредієнти"
            aria-label="Пошук рецептів"
          />
          <button type="button" className={styles.button}>Пошук</button>
        </div>
      </section>

      <section className={styles.grid}>
        {recipes.slice(0, 4).map((r) => (
          <RecipeCard key={r.id} {...r} />
        ))}
      </section>
    </>
  );
}