import Head from 'next/head';
import styles from "../styles/Home.module.scss";
import Menu from './Menu';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>GetSWFT</title>
      </Head>

      <main className={styles.main}>
        <Menu />
      </main>
    </div>
  )
}
