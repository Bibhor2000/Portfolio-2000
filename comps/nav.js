import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Navbar() {

  return (
    <nav>
      <div className={styles.appnavbar}>
        <div>
          <Link href="/">
            <button className={styles.appnavbuttons}>Home</button>
          </Link>
        </div>

        <div>
          <Link href="/projects">
            <button className={styles.appnavbuttons}>Projects</button>
          </Link>
        </div>

        <div>
          <Link href="/about">
            <button className={styles.appnavbuttons}>About</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}