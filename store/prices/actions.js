import { PRICES_ACTION_TYPES } from "./actionTypes";

export const setPrices = (data) => ({type: PRICES_ACTION_TYPES.SET_PRICES, data }) ;
export const setPricesLoading = () => ({type: PRICES_ACTION_TYPES.SET_PRICES_LOADING });
export const setPricesError = (error) => ({type: PRICES_ACTION_TYPES.SET_PRICES_ERROR, data: error });

