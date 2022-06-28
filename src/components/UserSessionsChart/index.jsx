import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const ChartTooltip = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background-color: #ffffff;
  font-size: 0.6em;
  text-align: center;
  width: 45px;
  height: 35px;
`;

const Title = styled.h3`
  color: white;
  font-weight:500;
  position:absolute;

padding-top:20px;
 width:100px;
  font-size:0.8em;
  text-align:start;
  line-height: 24px;
  z-index:1;
`;
const Wrapper = styled.section`
  width:300px;
  height:300px;
  position:relative;
  display:flex;
  justify-content:center;

  
`;
function UserSessionsChart(props) {
  console.log(props.value);

  const Days = ["L", "M", "M", "J", "V", "S", "D"];

  const getDay = (day) => Days[day - 1];

  const CustomeTooltip = ({ active, payload }) =>
    active ? (
      <ChartTooltip>
        <p>{payload[0].value} min</p>
      </ChartTooltip>
    ) : null;

  return (
    <Wrapper>
       
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={250}
          height={250}
          data={props.value.sessions}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
         
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} fill="#FF0000" />
          <XAxis padding={{ left: 15, right: 15 }} tick={{ stroke: "white" }} tickMargin={10} mirror={true} dataKey="day" tickFormatter={getDay} tickLine={false} />
          <YAxis domain={["dataMin -10", "dataMax+20"]}axisLine={false} tickLine={false} tick={false} />
          <Tooltip content={<CustomeTooltip />} />

          <Line strokeWidth={2} activeDot={{ r: 5, strokeWidth: 9, strokeOpacity: 0.3 }} padding={0} type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}
export default UserSessionsChart;
