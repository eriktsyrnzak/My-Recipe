import styles from './rating.module.css';

export default function Rating({ value = 0, max = 5 }) {
  return (
    <span className={styles.rating} aria-label={`Оцінка ${value} з ${max}`}>
      {Array.from({ length: max }, (_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className={styles.star}>
            ☆
            <span className={styles.fill} style={{ width: `${fill * 100}%` }}>
              ★
            </span>
          </span>
        );
      })}
    </span>
  );
}
