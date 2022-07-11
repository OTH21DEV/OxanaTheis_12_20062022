import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import NutritionData from "../../components/NutritionData";
import UserActivityChart from "../../components/UserActivityChart";
import UserSessionsChart from "../../components/UserSessionsChart";
import UserPerformanceChart from "../../components/UserPerformanceChart";
import UserScore from "../../components/UserScore";
import Error from "../../components/Error";
import GetDataApi from "../../services/mockApi";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import applaud from "../../assets/applaud-icon.png";
import React, { useState } from "react";

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
  position: relative;
`;

const MainContent = styled.div`
  margin-left: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;

  @media all and (min-width: 375px) and (max-width: 1300px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const SquaresWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;

  @media all and (min-width: 375px) and (max-width: 1300px) {
    flex-wrap: wrap;
    margin-top: 30px;
    width: 100%;
    justify-content: start;
  }
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 642px;
  justify-content: space-between;

  @media all and (min-width: 375px) and (max-width: 1300px) {
    width: 100%;
    height: inherit;
  }
`;

/**
 * Display dashboard page
 * @returns {JSX}
 */

function DashBoard() {
  let { id } = useParams();
  id = parseInt(id);

  const [userData, setUserData] = useState();
  const [userActivity, setUserActivity] = useState();
  const [userSessions, setUserSessions] = useState();
  const [userPerformance, setUserPerformance] = useState();

  

  /**
   * Creates a promise that works with the fact that we need to await the axios response first
   */

  let data = new GetDataApi(id);
  console.log(data);
  
  data.getData().then(() => {
    setUserData(data.userData);
    setUserActivity(data.userActivity);
    setUserSessions(data.userSessions);
    setUserPerformance(data.userPerformance);
    console.log(data.userData);
  });

  // const userData = new GetDataApi(id).userData;
  //  const userActivity = new GetDataApi(id).userActivity;
  // const userSessions = new GetDataApi(id).userSessions;
  //const userPerformance = new GetDataApi(id).userPerformance;

  //

  console.log(userData);
  console.log(userActivity);

  if (!userData) {
    return <Error />;
  }

  return (
    <div>
      <Header></Header>
      <Wrapper>
        <SideBar></SideBar>
        <MainContent>
          <Tittles>
            <h1>
              Bonjour {""}
              {<span style={{ color: "#FF0101" }}>{userData.userInfos.firstName}</span>}
            </h1>
            <div>
              <h2>Félicitation ! Vous avez explosé vos objectifs hier</h2>
              <img src={applaud} alt=""></img>
            </div>
          </Tittles>
          <Test>
            <UserActivityChart value={userActivity}></UserActivityChart>
            <SquaresWrapper>
              <UserSessionsChart value={userSessions}></UserSessionsChart>
              <UserPerformanceChart value={userPerformance}></UserPerformanceChart>
              <UserScore value={userData} userId={id}></UserScore>
            </SquaresWrapper>
            <NutritionData value={userData.keyData}></NutritionData>
          </Test>
        </MainContent>
      </Wrapper>
    </div>
  );
}

export default DashBoard;
