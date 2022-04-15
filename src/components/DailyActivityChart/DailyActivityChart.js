import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Styles from "./DailyActivityChart.module.scss";

const DailyActivityChart = ({ itemClass, activity }) => {
  const Radius = ({ background }) => {
    return (
      <span
        style={{ background: `${background}` }}
        className={Styles.radius}
      ></span>
    );
  };

  return (
    <div className={itemClass}>
      <h2 className={Styles.DailyActivityTitle}>Activité quotidienne</h2>

      <div className={Styles.DailyActivityLegend}>
        <p className={Styles.DailyActivityLegendItem}>
          <Radius background="rgba(40, 45, 48, 1)" />
          Poids (kg)
        </p>
        <p className={Styles.DailyActivityLegendItem}>
          <Radius background="rgba(230, 0, 0, 1)" />
          Calories brûlées (kCal)
        </p>
      </div>

      <ResponsiveContainer width="100%" aspect={3} height="100%">
        <BarChart
          data={activity}
          margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
          barSize={7}
        >
          <CartesianGrid strokeDasharray="2 2 " />
          <XAxis dataKey="index" tickLine={false} axisLine={false} />
          <YAxis orientation="right" />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              fill: "rgba(0, 0, 0, 0.1)",
            }}
          />
          {/* <Legend
            width={300}
            wrapperStyle={{
              top: -20,
              right: 25,
              color: "#74798C",
            }}
          /> */}
          <Bar
            radius={[50, 50, 0, 0]}
            legendType="circle"
            name="Poids (kg)"
            barSize={7}
            dataKey="kilogram"
            fill="#282D30"
          />
          <Bar
            radius={[50, 50, 0, 0]}
            legendType="circle"
            name="Calories brulées (kCal)"
            barSize={7}
            dataKey="calories"
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

function CustomTooltip({ active, payload }) {
  if (active) {
    return (
      <div className={Styles.customTooltip}>
        <p className={Styles.label}>{payload[0].value + " kg"}</p>
        <p className={Styles.label}>{payload[1].value + " kCal"}</p>
      </div>
    );
  }
  return null;
}

export default DailyActivityChart;
