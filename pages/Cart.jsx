import React from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>สินค้า</th>
            <th>รายการ</th>
            <th>ราคา</th>
            <th>จำนวน</th>
            <th>ราคารวม</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/image/featured1.png"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>MICHELIN 195/60R15</span>
            </td>
            <td>
              <span className={styles.price}>1500 THB</span>
            </td>
            <td>
              <span className={styles.quantity}>3</span>
            </td>
            <td>
              <span className={styles.total}>4500 THB</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>ราคาสุทธิ</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>รวมทั้งหมด :</b> 4500 THB
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>ส่วนลด :</b> 0 THB
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>ราคาสุทธิ :</b> 4500 THB
          </div>
          <button className={styles.button}>จ่ายเงิน</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
