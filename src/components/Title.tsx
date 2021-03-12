import Link from 'next/link';

import styles from "../styles/components/Title.module.css";

export function Title({text, icon}) {
  return (
    <div className={styles.container}>
      <img src={`icons/${icon}.svg`} alt="Horários"/>
      <h2>{text}</h2>
    </div>
  )
}