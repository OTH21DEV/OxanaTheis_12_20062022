import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import GetDataApi from "../../services/mockApi.js";
//import { useParams } from "react-router-dom";


function DashBoard() {
  

  const userData = new GetDataApi().getUserData(18);
  const userActivity = new GetDataApi().getUserActivity(18);
  const userSessions = new GetDataApi().getUserAverageSessions(18);
  const userPerformance = new GetDataApi().getUserPerformance(18);

  console.log(userData);
  console.log(userActivity);
  console.log(userSessions);
  console.log(userPerformance);

  return (
    <div>
      <Header></Header>
      <SideBar></SideBar>
    </div>
  );
}

export default DashBoard;
