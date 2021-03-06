import PropTypes from "prop-types";
import React from "react";
import {
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  ResponsiveContainer,
} from "recharts";
// Component Performance Chart
const PerformanceChart = ({ itemClass, performance }) => {
  // data test
  const dataTest = [
    {
      kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity",
      },
      data: [
        {
          value: 80,
          kind: 1,
        },
        {
          value: 120,
          kind: 2,
        },
        {
          value: 140,
          kind: 3,
        },
        {
          value: 50,
          kind: 4,
        },
        {
          value: 200,
          kind: 5,
        },
        {
          value: 90,
          kind: 6,
        },
      ],
    },
  ];

  return (
    <div className={itemClass} style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={performance}
          outerRadius={window.innerWidth > 1340 ? "70%" : "45%"}
        >
          <PolarGrid radialLines={false} />

          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            axisLine={false}
            tickLine={false}
          />
          <Radar dataKey="value" stroke="#282D30" fill="rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceChart.propTypes = {
  itemClass: PropTypes.string.isRequired,
  performance: PropTypes.array.isRequired,
};

export default PerformanceChart;
