import PropTypes from "prop-types";
import React from "react";
import Styles from "./ScoreChart.module.scss";

import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";

const ScoreChart = ({ itemClass, score }) => {
  // https://recharts.org/en-US/api/RadialBarChart
  const data = [
    { value: score, name: "todayScore" },
    { value: 1 - score, name: "difference" },
  ];

  return (
    <div className={itemClass} style={{ width: "100%", height: 263 }}>
      <h2 className={Styles.scoreChartTitle}>Score</h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={88}
            outerRadius={100}
            startAngle={580}
            endAngle={-360}
            dataKey="value"
          >
            {/* remplir le pie de cell  [cell celule du tableau]  */}
            {data.map((entry, index) => {
              if (index === 1) {
                return <Cell key={`cell-${index}`} fill="#FFFFFF" />;
              }
              return (
                <Cell key={`cell-${index}`} fill="#E60000" cornerRadius="50%" />
              );
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <CustomLabel score={score} />
    </div>
  );
};

// return jsx [p,span]
const CustomLabel = ({ score }) => {
  return (
    <p
      style={{
        color: "#74798c",
        position: "absolute",
        // background: "red",
        textAlign: "center",
        top: "40%",
        left: "0",
        right: "0",
        fontSize: "1.6rem",
      }}
    >
      <span style={{ color: "#000", fontWeight: "700" }}>{`${
        100 * score
      }%`}</span>
      <br />
      de votre
      <br />
      objectif
    </p>
  );
};

ScoreChart.propTypes = {
  itemClass: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

CustomLabel.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreChart;
