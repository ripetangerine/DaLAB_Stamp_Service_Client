import {useState, useContext} from "react";
// import { useReducer } from "react";
import AuthContext from "../contexts/AuthContext";
import { TravelAgencyContext } from "../contexts/TravelAgencyContext";

export default function WorldMap(...countries){
  const {user} = createContext(AuthContext); // 유저의 타입을 검사 리시버, 기버
  const {UserTravelAgency} = createContext(UserTravelAgency);
  const {TravelAgency} = createContext(TravelAgencyContext);
  const [userType, setUserType] = useState(user.is_user ? "receiver" : "giver");

  

  return(
    <div clasName="flex grid">
      
    </div>

  );
}