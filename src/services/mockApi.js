
import{USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from '../sportsee_back-end/app/data'

export default class GetDataApi {
 
 getUserData(id) {
    return USER_MAIN_DATA.find((element) => element.id === id);
  
  }
  getUserActivity(id) {
    return USER_ACTIVITY.find((element) => element.userId === id);
  }
  getUserAverageSessions(id) {
    return USER_AVERAGE_SESSIONS.find((element) => element.userId === id);
  }
  getUserPerformance(id) {
    return USER_PERFORMANCE.find((element) => element.userId === id);
  }
}
