import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nischal Basyal</title>
        <meta name="author" content="Nischal Basyal"></meta>
        <meta name="description" content="A portfolio website for Nischal Basyal, a self-employed software developer. A list of his programming and web development projects is included. Additionally, contact information such as github, linkedin, etc." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       
        <div className={styles.center}>
          <h1 >Nischal Basyal</h1>
        </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/NischalBasyal"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Github <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              View my latest projects and&nbsp;contributions.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/nischal-basyal-1a2215229/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Linkedin <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              If you are instrested to &nbsp;hire me!
            </p>
          </a>

          <a
            href="mailto:nischalbasyal73@gmail.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Email me <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Contact me through my&nbsp;email.
            </p>
          </a>

          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Nothing to add<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Click to do nothing&nbsp;, really nothing.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
