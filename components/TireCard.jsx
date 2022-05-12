import React from "react";
import styles from "../styles/TireCard.module.css";
import Image from "next/image";

const TireCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/image/featured1.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Tire 300/1</h1>
      <span className={styles.price}>1,250.00 บาท/เส้น</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

export default TireCard;
