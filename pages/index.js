import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <div>
        <h2>I'm Bibhor.</h2>
        <h1>I'm a web developer with experience in Front-End & Back-End frameworks</h1>
        <h3>Most of my current experience is in React, Express, & Node</h3>
      </div>

      <div>
        <h2>Visit me elsewhere</h2>
      </div>

      <div>
        <Link href='https://github.com/Bibhor2000?tab=repositories'>
          <button>Github</button>
        </Link>
        <Link href='https://www.linkedin.com/in/bibhor2000/'>
          <button>LinkedIn</button>
        </Link>
      </div>
    </div>
  )
}
