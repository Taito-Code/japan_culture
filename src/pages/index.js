import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tabi Site</title>
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          What is Tabi?
        </h1>
      </main>

      <div class="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
  <div>
    <div class="flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center">
      <h3 class="font-serif font-bold text-gray-900 text-xl">Fire Up Your Motivation</h3>
      <img class="w-full rounded-md" src="https://coffeeordie.com/wp-content/uploads/2019/03/FraserCOVER2.jpg" alt="motivation" />
      <p class="text-center leading-relaxed">In a thread on Reddit which has garnered nearly 10,000 replies, people who go to the gym every day (or practice some kind of other daily skill) have been sharing the things that help them stay motivated and proactive in keeping up with their good habits.</p>
      <span class="text-center">By Matt Fraser</span>
      <button class="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent">Read article</button>
    </div>
  </div>
</div>

      <footer className={styles.footer}>
        <b>© 2021 Copyright Taito All Rights Reserved.</b>
      </footer>
    </div>
  )
}
