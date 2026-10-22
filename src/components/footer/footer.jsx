import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.links}>
        <li>Карта сайту</li>
        <li>Умови використання</li>
        <li>Політика конфіденційності</li>
      </ul>

      <div className={styles.social}>
        <p>Слідкуй за нами</p>
        <div className={styles.icons}>
          <svg
            viewBox="0 0 48 32"
            width="48"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <rect x="2" y="2" width="44" height="28" rx="9" />
            <path d="M19 9l12 7-12 7z" />
          </svg>
          <svg
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <rect x="2" y="2" width="28" height="28" rx="8" />
            <circle cx="16" cy="16" r="6.5" />
            <circle cx="24" cy="8" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </div>
      </div>

      <p className={styles.mail}>наша пошта: erikzirnzak9292@gmail.com</p>
    </footer>
  );
}
