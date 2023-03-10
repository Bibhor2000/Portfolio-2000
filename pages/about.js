import styles from '../styles/Home.module.css';
import animateStyles from '../styles/animation.module.css';
import Image from 'next/image';


export default function Home() {

    return (
        <div className={styles.appAboutContainer}>
            <div className={styles.appAbout}>
                Hi, My name is Bibhor Gurung and I am on my own<br></br>
                <br></br>journey to learn about web & game development.<br></br>
                <br></br>What sparked my interest in web/game development<br></br>
                <br></br>is my desire to make my own game in my own website.<br></br>
            </div>
            <div className={styles.appAboutImage}>
                <img src='/portrait.jpg'/>
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