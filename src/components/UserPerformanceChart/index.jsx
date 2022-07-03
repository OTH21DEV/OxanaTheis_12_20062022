import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 258px;
  height: 260px;

  border-radius: 5px;
  background-color: #282d30;

  @media all and (min-width: 375px) and (max-width:1300px) {

    margin-bottom:10px;
    margin-right:10px;
      }
 
`;

function UserPerfomanceChart(props) {

  const angleStart = 210;

  function changeNameKind(key) {
    /*
    let titleKind = [];
    titleKind = Object.values(props.value.kind);
    return titleKind[key - 1];
*/

    let titleKind = [];
    titleKind = {
      cardio: "Cardio",
      energy: "Energie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité",
    };
  
    console.log(props.value.kind);
    console.log(props.value.kind[key]);
    return titleKind[props.value.kind[key]];
  }

  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={props.value.data} startAngle={angleStart}
                endAngle={angleStart + 360}>
          <PolarGrid />
          <PolarAngleAxis tickFormatter={changeNameKind} tick={{ fill: "#FFFFFF", fontSize: "0.7em" }} dataKey="kind" />

          <Radar
            name="Mike"
            dataKey="value"
            fill="#FF0101
"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}
export default UserPerfomanceChart;
