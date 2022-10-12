



export const getBTCData = async() => {
  // fetch(
  //   "https://api.coindesk.com/v1/bpi/currentprice.json"
  // );
   
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then(function() {
      console.log();
  }).catch(function() {
      console.log("error");
  });


  // try {
  //   const res = await fetch(
  //     "https://api.coindesk.com/v1/bpi/currentprice.json"
  //   );
  //   const data = await res.json();
  //   return data;
	// }
	// catch (error) {
	// 	console.log("error",error);
	// }
}


 // const chartItemsRes = await fetch(
  //   "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=1m"
  // );

  export const getPricesForChart = async() => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1&interval=1m"
      );
      const data = await res.json();
      console.log("data", data)
      return data;
}
