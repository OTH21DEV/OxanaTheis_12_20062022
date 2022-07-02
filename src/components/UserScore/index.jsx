import styled from "styled-components";
import React, { PureComponent } from "react";

import { PieChart, Pie, Sector, Legend, Cell, ResponsiveContainer } from "recharts";

/*
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const Wrapper =styled.section`
width: 258px;
height: 260px;
position :relative;
border-radius: 5px;
background-color: #FBFBFB;
display:flex;
justify-content:center;
align-items:center;

`

const Result =styled.p`
position :absolute;
display:flex;
align-items:center;
width:110px;
height:110px;
border-radius:50%;
font-size:0.7em;
background-color:white;
`
function UserScore (props){
    const scoreValue = [
        { value: 1, fill: "transparent" },
        { value: props.value.todayScore, fill: "#FF0000" },
      ];
console.log(props.value)
    return (
        <Wrapper>
            <h3>Score</h3>
            <Result>{props.value.todayScore*100}% de votre objectif</Result>
        <ResponsiveContainer width="100%" height="100%" >
          <RadialBarChart   width={300}
          height={250}
          startAngle={95}
          endAngle={450}
          innerRadius={50}
          outerRadius={105}
          barSize={10} data={scoreValue}>
            <RadialBar
             
            cornerRadius={50}
              dataKey="value"
            />
           
          </RadialBarChart>
        </ResponsiveContainer>
        </Wrapper>
      );

}
*/
const Wrapper = styled.section`
  width: 258px;
  height: 260px;
  position: relative;
  border-radius: 5px;
  background-color: #fbfbfb;

  h3 {
    font-size: 0.8em;
  }
  .recharts-legend-wrapper {
    left: 105px;
    bottom: 136px;
    width: 30px;
  }
`;
const Result = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 156px;
  width: px;
  font-size: 0.7em;
  left: 105px;
  z-index: 1;

  p {
    margin: 0;
    color: #74798c;
  }
`;
function UserScore(props) {
  const scoreValue = [
    { value: 1, fill: "transparent" },
    { value: props.value.todayScore, fill: "#FF0000" },
  ];

  /*
          <Legend content={CustomeLegend}  	verticalAlign="middle" layout="vertical"
                align="center" margin={{bottom:'80px'}}/>
        */
  /*
  const CustomeLegend = ({ payload }) =>

  (
    <div>
      <p>{payload[1].payload.value*100}%</p>
      <p>de votre objectif</p>
    </div>
  );
*/

  return (
    <Wrapper>
      <h3>Score</h3>
      <Result>
        <p>{props.value.todayScore * 100}%</p>
        <p>
          de votre <br />
          objectif
        </p>
      </Result>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={scoreValue} cx={"50%"} cy={"50%"} startAngle={90} endAngle={-450} cornerRadius={"50%"} innerRadius={"55%"} outerRadius={"65%"} fill="#8884d8" paddingAngle={5} dataKey="value">
            <Cell fill="transparent" stroke="transparent" />
            <Cell fill="#E60000" stroke="#E60000" />
          </Pie>
          <Pie cx={"50%"} cy={"50%"} outerRadius={"55%"} fill="#FFFFFF" data={[{ name: "ring", value: 100 }]} dataKey="value" />
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}
export default UserScore;
