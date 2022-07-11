import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/data";

import axios from "axios";
//import React, { useState, useEffect } from "react";

console.log(process.env.NODE_ENV);
/*require('dotenv').config()*/

export default class GetDataApi {
  constructor(id) {
    this.userData = null;
    this.userActivity = null;
    this.userSessions = null;
    this.userPerformance = null;
    //this.id = parseInt(id);
    this.id = id;
    //   this.getData();
  }

  //V4
  /*
  getData = async () => {
    if (process.env.NODE_ENV === "development") {
      return await axios
        .get(`http://localhost:3000/user/${this.id}`)
        .then((response) => {
          this.userData = response.data.data;
          // console.log(response.data);

        .catch((err) => {
          console.log(err);
        });
    }
  };
  */

  //test condition

  /*
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

  //test with axios all

  getData = async () => {
    const userEndpoint = axios.get(`http://localhost:3000/user/${this.id}`);
    const activityEndpoint = axios.get(`http://localhost:3000/user/${this.id}/activity`);
    const sessionsEndpoint = axios.get(`http://localhost:3000/user/${this.id}/average-sessions`);
    const performanceEndpoint = axios.get(`http://localhost:3000/user/${this.id}/performance`);

    return await axios
      .all([userEndpoint, activityEndpoint, sessionsEndpoint,performanceEndpoint])

      .then(
        axios.spread((...response) => {
          if (process.env.NODE_ENV === "development") {
            const userResponse = response[0];
            const activityResponse = response[1];
            const sessionsResponse = response[2];
            const performanceResponse = response[3];

            console.log(userResponse.data.data);

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

//Old functions
/*
  getUsersData() {
    return USER_MAIN_DATA;
  }

  getUserData(id) {
    return USER_MAIN_DATA.find((element) => element.id == id);
  }
  getUserActivity(id) {
    return USER_ACTIVITY.find((element) => element.userId == id);
  }
  getUserAverageSessions(id) {
    return USER_AVERAGE_SESSIONS.find((element) => element.userId == id);
  }
  getUserPerformance(id) {
    return USER_PERFORMANCE.find((element) => element.userId == id);
  }
  */
