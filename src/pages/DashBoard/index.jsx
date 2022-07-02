//import { useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import NutritionData from "../../components/NutritionData";
import UserActivityChart from "../../components/UserActivityChart";
import UserSessionsChart from "../../components/UserSessionsChart";
import UserPerformanceChart from "../../components/UserPerformanceChart";
import UserScore from "../../components/UserScore";
import GetDataApi from "../../services/mockApi";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import applaud from "../../assets/applaud-icon.png";

const Tittles = styled.section`
  width: 100%;

  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 0.8em;
    margin: 0;
    padding-right: 5px;
    font-weight: 400;
  }
  img {
    width: 1em;
    transform: rotate(270deg);
  }
  div {
    display: flex;
    align-items: center;
  }
`;
const Wrapper = styled.section`
  display: flex;
  position:relative;
`;
const MainContent = styled.div`
  margin-left: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 1024px) {
    margin-right: 50px;
  }
`;
const SquaresWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;
/*
const Test = styled.div`
 
 
  display:flex;
 justify-content:space-between;

 
`;
*/
function DashBoard() {
  const { id } = useParams();
  const userData = new GetDataApi().getUserData(id);
  console.log(userData);

  const userActivity = new GetDataApi().getUserActivity(id);
  const userSessions = new GetDataApi().getUserAverageSessions(id);
  const userPerformance = new GetDataApi().getUserPerformance(id);

  return (
    <div>
      <Header></Header>
      <Wrapper>
        <SideBar></SideBar>
        <MainContent>
          <Tittles>
            <h1>Bonjour {userData.userInfos.firstName}</h1>
            <div>
              <h2>Félicitation ! Vous avez explosé vos objectifs hier</h2>
              <img src={applaud} alt=""></img>
            </div>
          </Tittles>

          <UserActivityChart value={userActivity}></UserActivityChart>
          <SquaresWrapper>
            <UserSessionsChart value={userSessions}></UserSessionsChart>
            <UserPerformanceChart value={userPerformance}></UserPerformanceChart>
            <UserScore value={userData} userId={id}></UserScore>
          </SquaresWrapper>
        </MainContent>
        <NutritionData value={userData.keyData}></NutritionData>
      </Wrapper>
    </div>
  );
}

export default DashBoard;
