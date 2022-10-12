import { BTC_ACTION_TYPES } from "./actionTypes";

export const setBTC = (data) => ({type: BTC_ACTION_TYPES.SET_BTC, data }) ;
export const setBTCLoading = (loading) => ({type: BTC_ACTION_TYPES.SET_BTC_LOADING, data: loading});
export const setBTCError = (error) => ({type: BTC_ACTION_TYPES.SET_BTC_ERROR, data: error });

