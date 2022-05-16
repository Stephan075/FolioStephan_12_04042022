import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { dayFormatters } from "../../utils/dataFormatting";
import Styles from "./DailyActivityChart.module.scss";

// Component Daily Activity Chart
const DailyActivityChart = ({ itemClass, activity }) => {
  return (
    <div className={itemClass} style={{ width: "100%", height: 350 }}>
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

      <ResponsiveContainer>
        <BarChart
          width={500}
          height={400}
          data={activity}
          margin={{ top: 80, right: 48, bottom: 15, left: 48 }}
          barGap={10}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis
            dataKey="day"
            dy={16}
            tickFormatter={dayFormatters}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
            scale="point"
          />

          <YAxis
            orientation="right"
            axisLine={false}
            tickLine={false}
            dx={30}
          />

          <Tooltip content={<CustomTooltip />} />
          <Bar
            radius={[50, 50, 0, 0]}
            legendType="circle"
            name="Poids (kg)"
            barSize={8}
            dataKey="kilogram"
            fill="#282D30"
          />
          <Bar
            radius={[50, 50, 0, 0]}
            legendType="circle"
            name="Calories brulées (kCal)"
            barSize={8}
            dataKey="calories"
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

/**
 *
 * @param { String } background CSS color
 * @returns {HTMLElement}
 */
const Radius = ({ background }) => {
  return (
    <span
      style={{ background: `${background}` }}
      className={Styles.radius}
    ></span>
  );
};

/**
 *
 * @param {Boolean} 	active   the active tooltip
 * @param {Array} payload Data to display in the tooltip
 * @returns {HTMLElement}
 */
// payload[0] - bar kilograme
// payload[1] - bar Calories
const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className={Styles.customTooltip}>
        <p className={Styles.label}>{payload[0].value + " kg"}</p>
        <p className={Styles.label}>{payload[1].value + " kCal"}</p>
      </div>
    );
  }
  return null;
};

DailyActivityChart.propTypes = {
  activity: PropTypes.array.isRequired,
  itemClass: PropTypes.string.isRequired,
};
export default DailyActivityChart;
