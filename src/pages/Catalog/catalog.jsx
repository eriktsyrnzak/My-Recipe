import RecipeCard from '../../components/recipeCard/recipeCard.jsx';
import { recipes } from '../../data/recipes.js';
import styles from './catalog.module.css';

export default function Catalog() {
  return (
    <section className={styles.grid}>
      {recipes.map((r) => (
        <RecipeCard key={r.id} {...r} />
      ))}
    </section>
  );
}