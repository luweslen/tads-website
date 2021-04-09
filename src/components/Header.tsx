import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from "../styles/components/Header.module.css";
import { useState } from 'react';

export function Header() {
  const router = useRouter()
  const [menuIsOpen, setMenuIsOpen] = useState("");

  function isActive(route){
    if(route == router.pathname){
        return styles.active
    }
    else ""
  }

  function openMenu(){
    if(menuIsOpen != "active"){
      setMenuIsOpen("active")
    }else{
      setMenuIsOpen("")
    }
  }

  return (
    <header className={`
        ${styles.header}
        ${menuIsOpen === "active" ? styles.open : ""}
      `}
    >
      <div className={`
          ${styles.headerContainer}
          ${menuIsOpen === "active" ? styles.open : ""}
        `}
      >
        <div className={`
          ${styles.headerContent}
          ${menuIsOpen === "active" ? styles.open : ""}
        `}>
          <Link href="/">
            <img src="logo.svg" />
          </Link>

          <div 
            onClick={openMenu} 
            className={`
              ${styles.toggleMenu} 
              ${menuIsOpen === "active" ? styles.active : ""}
            `}>
            <div className={styles.toggleMenuItem}></div>
          </div>

        </div>
        <ul className={`
            ${styles.headerMenu}
            ${menuIsOpen === "active" ? styles.open : ""}
            animate-up
          `}
        >
          <li 
            className={isActive('/')}
          >
            <Link href="/">Home</Link>
          </li>

          <li 
            className={isActive('/schedules')}
          >
            <Link href="/schedules">Horários</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}