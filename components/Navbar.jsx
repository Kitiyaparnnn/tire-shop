import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/image/phone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ติดต่อสอบถาม!!</div>
          <div className={styles.text}>xx-xxxxxxx</div>
        </div>
      </div>
      <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>หน้าหลัก</li>
            <li className={styles.listItem}>ยางรถยนต์</li>
            <Image src="/image/tire-flat.png" alt="" width="50px" height="50px"/>
            <li className={styles.listItem}>โปรโมชั่น</li>
            <li className={styles.listItem}>ติดต่อ</li>
          </ul>
      </div>
      <div className={styles.item}>
          <div className={styles.cart}>
          <Image src="/image/shopping-cart.png" alt="" width="30px" height="30px"/>
              <div className={styles.counter}>2</div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
