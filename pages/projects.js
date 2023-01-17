import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {

    return (
        <div className={styles.appcontainer}>
            <div className={styles.card}>
                <h3>3D Model Viewer</h3>
                <p>An app that allows you to upload 3D models and<br></br>
                    view them once uploaded.
                </p>
                <Link href='https://github.com/Bibhor2000/3DView'>
                    <button>Visit Repo</button>
                </Link>
                <Link href='https://3d-view.vercel.app/'>
                    <button>Visit Live Site</button>
                </Link>
            </div>
            <div className={styles.card}>
                <h3>Pixel Avatar Icon Creator</h3>
                <p>An app that allows you to create a pixel avatar<br></br>
                    with many choices for customization.
                </p>
                <Link href='https://github.com/Bibhor2000/Project-2'>
                    <button>Visit Repo</button>
                </Link>
                <Link href='http://character-creator-indol.vercel.app/'>
                    <button>Visit Live Site</button>
                </Link>
            </div>
            <div className={styles.card}>
                <h3>Hangman Variation</h3>
                <p>An variation of the Hangman Game</p>
                <Link href='https://github.com/Bibhor2000/Project-1'>
                    <button>Visit Repo</button>
                </Link>
                <Link href='https://bibhor2000.github.io/Project-1/'>
                    <button>Visit Live Site</button>
                </Link>
            </div>
        </div>
    )
}