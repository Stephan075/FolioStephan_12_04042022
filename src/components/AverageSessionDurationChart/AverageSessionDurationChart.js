import PropTypes from "prop-types";
import React from "react";
import Styles from "./AverageSessionDurationChart.module.scss";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { dayFormatters_dayOfTheweek } from "../../utils/dataFormatting";

const AverageSessionDurationChart = ({ itemClass, data }) => {
  // data test
  const dataTest = [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 23,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 0,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ];
  return (
    <div className={itemClass} style={{ width: "100%", height: 263 }}>
      <ResponsiveContainer>
        <LineChart
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          data={data}
        >
          <Legend
            content={<CustomizedLegend />}
            wrapperStyle={{
              top: 2,
              left: 10,
              fontSize: 15,
              color: "white",
              opacity: 0.5,
              width: "100%",
            }}
          />
          <XAxis
            dataKey="day"
            tickFormatter={dayFormatters_dayOfTheweek}
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
            stroke="white"
            tickMargin="7"
          />
          <YAxis domain={[0, "dataMax + 50"]} hide={true} />
          <Line
            connectNulls
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            activeDot={{
              stroke: "rgba(255,255,255, 0.2)",
              strokeWidth: 10,
              r: 5,
            }}
            strokeWidth={2}
            dot={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "rgba(0, 0, 0, .1)",
              strokeWidth: 35,
              height: 1,
            }}
            wrapperStyle={{
              width: 40,
              height: 25,
              color: "red",
              backgroundColor: "#fff",
              fontSize: 8,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomizedLegend = () => {
  return (
    <p className={Styles.customLegend}>
      Durée moyenne des <br />
      sessions
    </p>
  );
};

const CustomTooltip = ({ active, payload }) => {
  // https://recharts.org/en-US/guide/customize
  if (active && payload) {
    return (
      <div className={Styles.customTooltip}>
        <p className={Styles.label}>{payload[0].value + " min"}</p>
      </div>
    );
  }
  return null;
};

AverageSessionDurationChart.propTypes = {
  data: PropTypes.array.isRequired,
  itemClass: PropTypes.string.isRequired,
};

export default AverageSessionDurationChart;
