import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
    const values = dataPoints.map((dataPoint) => dataPoint.value);
    const maxValue = Math.max(...values);

    return (
        <div className="chart">
            {dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    {...dataPoint}
                    maxValue={maxValue}
                />
            )}
        </div>
    )
}

export default Chart;