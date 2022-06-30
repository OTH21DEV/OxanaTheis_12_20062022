import React, { PureComponent } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const ChartTooltip = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  background-color: #e60000;
  font-size: 0.6em;
  text-align: center;
  width: 45px;
  height: 63px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    list-style: none;
    padding: 0;
    margin: 0;
    padding-right:20px;
  }
  h3 {
    padding-left: 40px;

    font-size: 0.8em;

    font-weight: 400;
  }
`;
const Weight = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #74798c;
  font-size: 0.8em;
  &:before {
    content: ".";
    color: black;
    display: inline-block;
    font-size: 4em;
    margin-right: 5px;
    margin-bottom: 35px;
  }
`;

const Calories = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #74798c;
  font-size: 0.8em;
  &:before {
    content: ".";
    color: #e60000;
    display: inline-block;
    font-size: 4em;
    margin-right: 5px;
    margin-bottom: 35px;
  }
`;

const Activity = styled.section`
  width: 70%;
  height: 320px;
  margin-right: 80px;
  background:#FBFBFB;
  border-radius:5px;

  margin-top:40px;

  .recharts-responsive-container{
    margin-left:-20px;
  }
`;

function UserActivityChart(props) {
  const getDay = (day) => new Date(day).getDate();

  const CustomeTooltip = ({ active, payload }) =>
    active ? (
      <ChartTooltip>
        <p>{payload[0].value}kg</p>
        <p>{payload[1].value}kCal</p>
      </ChartTooltip>
    ) : null;

  return (
    <Activity>
      <Wrapper>
        <h3>Activité quotidienne</h3>
        <ul>
          <Weight>Poids (kg)</Weight>
          <Calories>Calories brûlées (kCal)</Calories>
        </ul>
      </Wrapper>

      <ResponsiveContainer width="100%" height="70%">
        <BarChart
          width={800}
          height={250}
          data={props.value.sessions}
          margin={{
            top: 40,
            right: 0,
            left: 0,
            bottom: 30,
          }}
          barSize={8}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" stroke="#9B9EAC" tickFormatter={getDay} />

          <YAxis yAxisId="left" orientation="left" stroke="#282D30" axisLine={false} tickLine={false} tick={false} />
          <YAxis domain={["dataMin-5", "dataMax+0"]} yAxisId="right" orientation="right" stroke="#9B9EAC" axisLine={false} tickLine={false} tickCount="3" tickMargin={30} />
          <Tooltip content={<CustomeTooltip />} />

          <Bar radius={[50, 50, 0, 0]} yAxisId="right" dataKey="kilogram" fill="#282D30" />

          <Bar radius={[50, 50, 0, 0]} yAxisId="left" dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </Activity>
  );
}
export default UserActivityChart;
