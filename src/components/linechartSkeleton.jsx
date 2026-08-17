import styles from "./LineChartSkeleton.module.css";

function LineChartSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.yAxis}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={styles.chartArea}>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>
        <div className={styles.gridLine}></div>

        <div className={styles.fakeLine}></div>

        <div className={styles.xAxis}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default LineChartSkeleton;
