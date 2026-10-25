import styles from './about.module.css';

const stats = [
  { value: '500+', label: 'Рецептів' },
  { value: '12', label: 'категорій' },
  { value: '4.8', label: 'середня оцінка' },
];

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Про нас</h1>
      </section>

      <section className={styles.story}>
        <h2>Наша історія</h2>
        <p>
          Ми створили MyRecipe, щоб готувати було просто і приємно. Тут зібрані перевірені рецепти —
          від ніжних млинців до шоколадних десертів. Кожен рецепт має чіткі інгредієнти, прості
          кроки та оцінки користувачів, тож ви одразу бачите, що варто приготувати.
        </p>
        <ul className={styles.stats}>
          {stats.map((s) => (
            <li key={s.label} className={styles.stat}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
