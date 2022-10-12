import { BTC_ACTION_TYPES } from './actionTypes';

const btcInit = {
  data: {},
  loading: false,
  error: ''
}

export const btcReducer = (store = btcInit, action) => {
  switch (action.type) {
    case BTC_ACTION_TYPES.SET_BTC:
      return {
        ...store,
        ...btcInit,
        data: action.data
      };
    case BTC_ACTION_TYPES.SET_BTC_LOADING:
      return {
        ...store,
        ...btcInit,
        loading: true,
      }
    case BTC_ACTION_TYPES.SET_BTC_ERROR:
      return {
        ...store,
        ...btcInit,
        error: action.data
      }

    default: return store;
  }
}


// const { combineReducers } = require("redux");
  
// const INITAL_STATE  = {
//     todo : null
// }
  
// const dataReducer = (state=INITAL_STATE, action)=>{
//     switch(action.type) {
//         case 'ADD_DATA' : return {...state, todo : action.payload};
//         case 'DELETE_DATE' : return INITAL_STATE;
//         default : return state;
//     }
// }
  
// const reducers = combineReducers({
//     data : dataReducer
// })
  
// export default reducers