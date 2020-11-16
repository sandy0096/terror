import styles from './../../styles/Promo.module.css';
import SideNav from './sidenav';
import { useState } from 'react'

export default function Promo() {
    const [isOpen, setToggler] = useState(false);

    const toggleSidenav = () => {
        setToggler(!isOpen)
    }

    return <>
        <SideNav isOpen={isOpen} />
        <div className={styles.background} onClick={isOpen && toggleSidenav}>
            <div className={styles.header}>
                <img src="/hamburger-menu.png" alt="hamburger-image" onClick={toggleSidenav} />
                <div className={styles.btnGroup}>
                    <button className={styles.btn}>Login</button>
                    <button className={styles.btn}>SignUp</button>
                </div>
            </div>
            <div className={styles.main}>
                <h1 className={styles.content}>Everyday kill, <br /> Made easy.</h1>
            </div>
        </div>
    </>
};