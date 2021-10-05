import Head from 'next/head';
import Image from 'next/image';
import styles from "../styles/Home.module.scss";
import About from './about';
import Menu from './Menu';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

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
