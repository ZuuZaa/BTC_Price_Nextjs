import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { setBTC, setBTCError, setBTCLoading } from './btc/actions';
import { btcReducer } from './btc/reducer'
import { getBTCLoading } from './btc/selectors';
import rootReducer from './rootReducer';
import axios from 'axios';


const store = configureStore({
  reducer: {
    btc: btcReducer
  },
})


const fetchBTC = async (dispatch, getstate) => {

  dispatch(setBTCLoading(true))
  try {
    const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
    const btc = response.data
    const data = {
      rates: btc.bpi,
      updated_time: btc.time.updated
    }
    dispatch(setBTC(data));
  }
  catch (error) {
    console.log("error", error);
    dispatch(setBTCError(error.message))
  }
  const store = getstate();
  console.log("store",store)
}
store.dispatch(fetchBTC)

export { store };



