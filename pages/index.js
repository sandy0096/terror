import Head from 'next/head'
import Promo from './components/promo';
import Feature from './components/feature';
import styles from '../styles/Home.module.css'

const Title = _ => {
  return <Head>
    <title>With Rein - Your life settles today.</title>
    <link rel="icon" href="/noun_Target.svg" />
  </Head>
};

export default function Home() {
  return (
    <>
      <Title className={styles.main} />
      <Promo />
      <Feature />
    </>
  )
}
