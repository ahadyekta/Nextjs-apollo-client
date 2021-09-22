import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const Footer = () => {
    return (<footer className={styles.footer}>
        <ul className={styles.nav}>
          <li>
            <Link href='/' >Continents</Link>
          </li>
          <li>
            <Link href='/langs' >Languages</Link>
          </li>
        </ul>
      </footer>
)}