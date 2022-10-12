import { PRICES_ACTION_TYPES } from './actionTypes';

const pricesInit = {
  data: {},
  loading: false,
  error: ''
}

export const btcReducer = (store = pricesInit, action) => {
  switch (action.type) {
    case PRICES_ACTION_TYPES.SET_BTC:
      return {
        ...store,
        data: action.data
      };
    case PRICES_ACTION_TYPES.SET_BTC_LOADING:
      return {
        ...store,
        ...pricesInit,
        loading: true,
      }
    case PRICES_ACTION_TYPES.SET_BTC_ERROR:
      return {
        ...store,
        ...pricesInit,
        error: action.data
      }

    default: return store;
  }
}
