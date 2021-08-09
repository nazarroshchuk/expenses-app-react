import React from "react";

import './Chart.css';
import { ChartBar } from "./ChartBar";

export const Chart = ({ dataPoints }) => {
    const dataPointsValues = dataPoints.map(d => d.value)
    const totalMaximum = Math.max(...dataPointsValues);
    return (
        <div className="chart">
            {
                dataPoints.map(d =>
                <ChartBar
                    key={d.label}
                    value={d.value}
                    maxValue={totalMaximum}
                    label={d.label}
                />)
            }
        </div>
    )
}
