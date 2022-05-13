import React from "react";
import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status == 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>หมายเลขคำสั่งซื้อ</th>
              <th>รายการสินค้า</th>
              <th>ราคารวม</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>123456789</span>
              </td>
              <td>
                <span className={styles.name}>MICHELIN 195/60R15</span>
              </td>
              <td>
                <span className={styles.total}>4500 THB</span>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>123456789</span>
              </td>
              <td>
                <span className={styles.name}>MICHELIN 195/60R15</span>
              </td>
              <td>
                <span className={styles.total}>4500 THB</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/image/paid.png" alt="" width={30} height={30} />
            <span>สั่งจอง</span>
            <div className={styles.checkIcon}>
              <Image src="/image/verify.png" alt="" width={20} height={20} />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/image/order.png" alt="" width={30} height={30} />
            <span>รับสินค้า</span>
            <div className={styles.checkIcon}>
              <Image
                src="/image/verify.png"
                alt=""
                width={25}
                height={25}
                style={{ color: "yellow" }}
              />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            จ่ายเงินแล้ว
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
