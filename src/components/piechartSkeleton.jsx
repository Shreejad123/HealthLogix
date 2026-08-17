import styles from "./PieChartSkeleton.module.css";

function PieChartSkeleton() {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.pie}></div>

      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span></span>
          <div></div>
        </div>

        <div className={styles.legendItem}>
          <span></span>
          <div></div>
        </div>

        <div className={styles.legendItem}>
          <span></span>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default PieChartSkeleton;
