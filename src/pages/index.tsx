import Head from 'next/head';
import Link from 'next/link';

import { Header } from '../components/Header';

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | TADS</title>
      </Head>
      <Header />
      <div className={styles.content}>          
      </div>
    </div>
  )
}
