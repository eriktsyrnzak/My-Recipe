import { Outlet } from 'react-router-dom';
import Header from '../header/header.jsx';
import Footer from '../footter/footer.jsx';
import styles from './layout.module.css';

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}