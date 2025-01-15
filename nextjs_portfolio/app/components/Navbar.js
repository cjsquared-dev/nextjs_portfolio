import Link from 'next/link';
import styles from 'globals';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/projects">Projects</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/contact">Contact</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/resume">Resume</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
