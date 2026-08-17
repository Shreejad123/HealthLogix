import { Chart } from "react-google-charts";
import styles from "./pieChart.module.css";
import { useState } from "react";
import PieChartSkeleton from "./PieChartSkeleton";
function PieChart() {
  const [loaded, setLoaded] = useState(false);
  const surgeries = JSON.parse(localStorage.getItem("surgeryList")) || [];
  console.log("surgeries", surgeries);
  const counts = {};

  surgeries.forEach((p) => {
    if (!p.surgery) return;

    const type = p.surgery;
    counts[type] = (counts[type] || 0) + 1;
  });

  console.log("counts:", counts);

  const data = [["Surgery Type", "Count"], ...Object.entries(counts)];

  console.log("chart data:", data);
  const options = {
    title: "Surgery Types",
  };
  return (
    <>
      <div className={styles.charts}>
        <h4 className={styles.header}>Surgeries Types</h4>
        {!loaded && <PieChartSkeleton />}
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          className={styles.Chartsurgery}
          chartEvents={[
            {
              eventName: "ready",
              callback: () => setLoaded(true),
            },
          ]}
        />
      </div>
    </>
  );
}

export default PieChart;
