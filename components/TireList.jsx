import React from 'react'
import styles from "../styles/TireList.module.css"
import TireCard from './TireCard';

const TireList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}> ร้านบริการซ่อม/เปลี่ยนยางรถแบบเป็นกันเอง </h1>
        <h1 className={styles.title}>🛵🚗🚜🚐</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
            in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.wrapper}>
            <TireCard/>
            <TireCard/>
            <TireCard/>
            <TireCard/>
            <TireCard/>
            <TireCard/>
        </div>
    </div>
  );
};

export default TireList