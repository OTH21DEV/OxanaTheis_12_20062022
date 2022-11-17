import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/data";
import axios from "axios";

/**
 * Gets data from API or mockedData
 */

export default class GetData {
  constructor(id, mocked) {
    this.userData = null;
    this.userActivity = null;
    this.userSessions = null;
    this.userPerformance = null;
    this.id = id;
    this.mocked = mocked;
  }

  getData = async () => {
    /**
     * axios.all(Promise) accepts array of promises and returns a new Promise which is resolved whenever all
     * of the given promises are resolved with an array with the result of each promise.
     * Axios.spread used to assign each result to a variable
     *
     */


    // Add mocked data 

    if (this.mocked) {
      console.log(this)
      this.userData = USER_MAIN_DATA.find((element) => element.id === this.id);
      this.userActivity = USER_ACTIVITY.find((element) => element.userId === this.id);
      this.userSessions = USER_AVERAGE_SESSIONS.find((element) => element.userId === this.id);
      this.userPerformance = USER_PERFORMANCE.find((element) => element.userId === this.id);
      return;
    }
//https://sportsee-p12.herokuapp.com/ 


    const userEndpoint = axios.get(`http://localhost:3000/user/${this.id}`);
    const activityEndpoint = axios.get(`http://localhost:3000/user/${this.id}/activity`);
    const sessionsEndpoint = axios.get(`http://localhost:3000/user/${this.id}/average-sessions`);
    const performanceEndpoint = axios.get(`http://localhost:3000/user/${this.id}/performance`);

/*
const userEndpoint = axios.get(`https://sportsee-p12.herokuapp.com/user/${this.id}`);
const activityEndpoint = axios.get(`https://sportsee-p12.herokuapp.com/user/${this.id}/activity`);
const sessionsEndpoint = axios.get(`https://sportsee-p12.herokuapp.com/user/${this.id}/average-sessions`);
const performanceEndpoint = axios.get(`https://sportsee-p12.herokuapp.com/user/${this.id}/performance`);
*/

    return await axios
      .all([userEndpoint, activityEndpoint, sessionsEndpoint, performanceEndpoint])

      .then(
        axios.spread((...response) => {
          // if (process.env.NODE_ENV === "development") {
          const userResponse = response[0];
          const activityResponse = response[1];
          const sessionsResponse = response[2];
          const performanceResponse = response[3];

          this.userData = userResponse.data.data;
          this.userActivity = activityResponse.data.data;
          this.userSessions = sessionsResponse.data.data;
          this.userPerformance = performanceResponse.data.data;
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };
}

