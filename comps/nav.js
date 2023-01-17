import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Navbar() {

  return (
    <nav>
      <div className={styles.appnavbar}>
        <div>
          <Link href="/">
            <button className="btn-logo">Home</button>
          </Link>
        </div>

        <div>
          <Link href="/projects">
            <button className="btn-logo">Projects</button>
          </Link>
        </div>

        <div>
          <Link href="/about">
            <button className="btn-logo">About</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}