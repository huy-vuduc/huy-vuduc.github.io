import Head from 'next/head';
import React from 'react';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Huy Vu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Huy Vu Page laaaa!</h1>
      </main>

      <footer className={styles.footer}>
        <p>Powered by HuyIgiiiii</p>
      </footer>
    </div>
  );
}
