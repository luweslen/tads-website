import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from "../styles/components/Header.module.css";

export function Header() {
  const router = useRouter()

  function isActive(route){
    if(route == router.pathname){
        return styles.active
    }
    else ""
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/">
          <img src="logo.svg" />
        </Link>

        <ul >
          <li className={isActive('/')}><Link href="/">Home</Link></li>
          <li className={isActive('/schedules')}><Link href="/schedules">Horários</Link></li>
        </ul>
      </div>
    </header>
  )
}