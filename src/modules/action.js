import * as actions from './actionType'
import axios from "axios";
import { popularPlayerApi, options } from "./utils/Services";

export const onGetplayerData = () => {
    return (dispatch) => {
        axios.request(popularPlayerApi).then((res) => {
            dispatch(
                ((data) => {
                  return {
                    type: actions.GET_PLAYER_DATA,
                    payload: {
                      httpResponse: data,
                    },
                  };
                })(res.data)
              );
        }).catch((error) => {
            console.log(error);
        })
    }
}

export const onPostPlayerScore = (name, sport, score, remark) => {
  return (dispatch) => {

   const copyData =  JSON.parse(localStorage.getItem("Player"));

    const newData2 = [...copyData, {name, sport, score, remark }];

   // console.log(copyData);
    
    localStorage.setItem("Player",JSON.stringify(newData2));
  }
}
