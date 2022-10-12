import { combineReducers } from 'redux';
import { btcReducer } from './btc/reducer';

export const rootReducer = combineReducers({
    btc: btcReducer,
  })