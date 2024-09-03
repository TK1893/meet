import React from 'react';
import { useState, useEffect } from 'react';

import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';
// import PropTypes from 'prop-types';

function EventGenresChart({ events }) {
  const [data, setData] = useState([]);
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
  const colors = ['#ffb3ba', '#bae1ff', '#b5f8c3', '#ffc583', '#B687FF'];

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) => event.summary.includes(genre)).length;
      return {
        name: genre,
        value: filteredEvents,
      };
    });
    // console.log('data:', data);
    return data;
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  //   const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
  //     const RADIAN = Math.PI / 180;
  //     const radius = outerRadius;
  //     const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
  //     const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
  //     return percent ? (
  //       <text x={x} y={y} fill={colors[index]} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
  //         {`${(percent * 100).toFixed(0)}%`}
  //       </text>
  //     ) : null;
  //   };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie data={data} dataKey="value" fill="#000" labelLine={false} label={renderCustomizedLabel} outerRadius={130}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  );
}

// EventGenresChart.propTypes = {};

export default EventGenresChart;
