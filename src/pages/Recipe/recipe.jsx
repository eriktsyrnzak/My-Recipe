import Rating from '../../components/rating/rating.jsx';
import { recipes } from '../../data/recipes.js';
import styles from './recipe.module.css';

const ingredients = [
  'Борошно — 200 г',
  'Молоко — 400 мл',
  'Яйця — 2 шт.',
  'Цукор — 2 ст. л.',
  'Олія — 2 ст. л.',
];
const steps = [
  'Змішайте яйця з цукром і молоком.',
  'Поступово додайте борошно та олію, розмішайте до гладкості.',
  'Дайте тісту постояти 15 хвилин.',
  'Смажте на розігрітій сковороді з двох боків.',
];

export default function Recipe() {
  const recipe = recipes[0];

  return (
    <section className={styles.page}>
      <div className={styles.top}>
        <div className={styles.image} style={{ background: recipe.color }} />
        <div>
          <h1 className={styles.title}>{recipe.title}</h1>
          <Rating value={recipe.rating} />
          <h2 className={styles.h2}>Інгредієнти</h2>
          <ul className={styles.list}>
            {ingredients.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className={styles.h2}>Приготування</h2>
      <ol className={styles.steps}>
        {steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
    </section>
  );
}
