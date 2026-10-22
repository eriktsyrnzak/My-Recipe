import styles from './login.module.css';

export default function Login() {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <div className={styles.page}>
      <form className={styles.panel} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Login</h1>

        <input className={styles.input} type="email" placeholder="Email..." aria-label="Email" />

        <div className={styles.field}>
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            aria-label="Password"
          />
          <span className={styles.small}>Forget password?</span>
        </div>

        <div className={styles.actions}>
          <button type="submit" className={styles.button}>
            Sign In
          </button>
          <span className={styles.small}>register</span>
        </div>
      </form>
    </div>
  );
}
