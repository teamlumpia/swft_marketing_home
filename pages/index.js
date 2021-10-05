import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './about'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>GetSWFT</title>
      </Head>

      <main className={styles.main}>
        HALLOOZ
        <button type="button" onClick={() => router.push('/about')}>
        Click me
      </button>
      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
