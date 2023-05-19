import styles from '../styles/Home.module.css';
import animateStyles from '../styles/animation.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {React, useState, useEffect} from 'react';

export default function Projects() {

    return (
        <div className={styles.appcontainer}>
            <div className={styles.card}>
                <h3>3D Model Viewer</h3>
                <p>An app that allows you to upload 3D models and<br></br>
                    view them once uploaded.
                </p>
                <Link href='https://github.com/Bibhor2000/3DView'>
                    <button className={styles.cardbuttons}>Visit Repo</button>
                </Link>
                <Link href='https://3d-view.vercel.app/'>
                    <button className={styles.cardbuttons}>Visit Live Site</button>
                </Link>
            </div>
            <div className={styles.card}>
                <h3>Pixel Avatar Icon Creator</h3>
                <p>An app that allows you to create a pixel avatar<br></br>
                    with many choices for customization.
                </p>
                <Link href='https://github.com/Bibhor2000/Project-2'>
                    <button className={styles.cardbuttons}>Visit Repo</button>
                </Link>
                <Link href='http://character-creator-indol.vercel.app/'>
                    <button className={styles.cardbuttons}>Visit Live Site</button>
                </Link>
            </div>
            <div className={styles.card}>
                <h3>Hangman Variation</h3>
                <p>An variation of the Hangman Game</p>
                <Link href='https://github.com/Bibhor2000/Project-1'>
                    <button className={styles.cardbuttons}>Visit Repo</button>
                </Link>
                <Link href='https://bibhor2000.github.io/Project-1/'>
                    <button className={styles.cardbuttons}>Visit Live Site</button>
                </Link>
            </div>
            <div className={styles.video}>
                <h3>Project N-EX [In Development]</h3>
                <video controls height='500' width='250'>
                    <source src='/screen-20230502-1426263.mp4'></source>
                </video>
                <p>A Unity app with the goal of displaying realtime vehicle telemetry with the
                    additional goal of a humanoid model that can read out the data in a ai-generated voice.
                </p>
                <h4>Currently fake data is being used to test the UI</h4>
                <Link href='https://github.com/Bibhor2000/Project-N-EX'>
                    <button className={styles.cardbuttons}>Visit Repo</button>
                </Link>
            </div>
            <div class={animateStyles.circles}>
                <ul >
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}