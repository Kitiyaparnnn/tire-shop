import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}><Image src="/image/tire-flat.png" alt="" width="300px" height="50px"/></div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>ยินดีบริการทุกระดับประทับใจ</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ที่อยู่</h1>
          <p className={styles.text}>
            325 ม.6 ต.ไชยสถาน
            <br />
             อ.สารภี จ.เชียงใหม่ 50140
            <br/>
            (แยกพรอมเมนาดา)
          </p>
        </div>
        <div className={styles.card}>
        <h1 className={styles.title}>เวลาเปิด-ปิด</h1>
          <p className={styles.text}>
            จันทร์ - เสาร์
            <br/>
            8:00 - 17:30 น.
          </p>
          <p className={styles.text2}>
            หยุดทุกวันอาทิตย์ และ วันแรงงาน
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
