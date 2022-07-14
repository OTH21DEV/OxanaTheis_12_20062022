import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/data";
import axios from "axios";

/**
 * Gets data from API or mockedData
 */

export default class GetData {
  constructor(id) {
    this.userData = null;
    this.userActivity = null;
    this.userSessions = null;
    this.userPerformance = null;
    this.id = id;
  }

  getData = async () => {
    const userEndpoint = axios.get(`http://localhost:3000/user/${this.id}`);
    const activityEndpoint = axios.get(`http://localhost:3000/user/${this.id}/activity`);
    const sessionsEndpoint = axios.get(`http://localhost:3000/user/${this.id}/average-sessions`);
    const performanceEndpoint = axios.get(`http://localhost:3000/user/${this.id}/performance`);

    /**
     * axios.all(Promise) accepts array of promises and returns a new Promise which is resolved whenever all
     * of the given promises are resolved with an array with the result of each promise.
     * Axios.spread used to assign each result to a variable
     *
     */

    return await axios
      .all([userEndpoint, activityEndpoint, sessionsEndpoint, performanceEndpoint])

      .then(
        axios.spread((...response) => {
          if (process.env.NODE_ENV === "development") {
            const userResponse = response[0];
            const activityResponse = response[1];
            const sessionsResponse = response[2];
            const performanceResponse = response[3];

            this.userData = userResponse.data.data;
            this.userActivity = activityResponse.data.data;
            this.userSessions = sessionsResponse.data.data;
            this.userPerformance = performanceResponse.data.data;
          } else {
            //Mode developpement (inversé pour tester API mode)
            this.userData = USER_MAIN_DATA.find((element) => element.id === this.id);
            this.userActivity = USER_ACTIVITY.find((element) => element.userId === this.id);
            this.userSessions = USER_AVERAGE_SESSIONS.find((element) => element.userId === this.id);
            this.userPerformance = USER_PERFORMANCE.find((element) => element.userId === this.id);
          }
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };
}

/*
//une requette

  getData = async () => {
    return await axios
      .get(`http://localhost:3000/user/${this.id}`)
      .then((response) => {
        if (process.env.NODE_ENV === "development") {
          this.userData = response.data.data;
          // console.log(response.data);
        } else {
          //Mode developpement (inversé pour tester API mode)
          this.userData = USER_MAIN_DATA.find((element) => element.id === this.id);
          this.userActivity = USER_ACTIVITY.find((element) => element.userId === this.id);
          this.userSessions = USER_AVERAGE_SESSIONS.find((element) => element.userId === this.id);
          this.userPerformance = USER_PERFORMANCE.find((element) => element.userId === this.id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



*/
