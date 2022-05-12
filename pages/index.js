import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import TireList from "../components/TireList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ร้าน ส.การยาง</title>
        <meta name="description" content="Easiest way to buy your tires." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <TireList />
    </div>
  );
}
