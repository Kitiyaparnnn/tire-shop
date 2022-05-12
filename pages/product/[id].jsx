import { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";

const Product = () => {
  const tire = {
    id: 1,
    img: "/image/featured2.png",
    name: "MICHELIN 195/60R15",
    price: 1500.0,
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image alt="" src={tire.img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{tire.name}</h1>
        <span className={styles.price}>THB {tire.price}</span>
        <p className={styles.desc}>{tire.desc}</p>
        <h3 className={styles.choose}>เลือกจำนวนล้อที่ต้องการ</h3>
        <div className={styles.add}>
          <input
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button}>เพิ่มลงในตะกร้า</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
