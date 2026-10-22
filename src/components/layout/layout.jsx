import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import styles from './layout.module.css';

export default function Layout({ active, children }) {
  return (
    <div className={styles.wrapper}>
      <Header active={active} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
