import React, { PureComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Score(props) {
  console.log(props.value);
  return (
    <ResponsiveContainer width="50%" height="40%">
      <BarChart
        width={800}
        height={250}
        data={props.value.sessions}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 30,
        }}
        barSize={8}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" stroke="#9B9EAC" />
        <YAxis yAxisId="left" orientation="left" stroke="#282D30" axisLine={false} tickLine={false} tick={false}/>
        <YAxis yAxisId="right" orientation="right" stroke="#E60000" axisLine={false} tickLine={false} tickCount="3" />
        <Tooltip />
        <Legend />
        <Bar radius={[50, 50, 0, 0]} yAxisId="right" dataKey="kilogram" fill="#282D30" />

        <Bar radius={[50, 50, 0, 0]} yAxisId="left" dataKey="calories" fill="#E60000" />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default Score;
