import { Chart } from "react-google-charts";
import styles from "./pieChart.module.css";
function PieChart() {
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
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          className={styles.Chartsurgery}
        />
      </div>
    </>
  );
}

export default PieChart;
