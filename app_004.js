$("#getTicker").click(function() {
  getTicker();
});

// Gey Single Ticker

function getTicker() {
  $(".data").empty();
  axios.get('https://api.cobinhood.com/v1/market/tickers/ETH-BTC')
    .then(function(response) {
      $(".data").append(JSON.stringify(response.data.result.ticker));
    })
    .catch(function(error) {
      console.log(errror);
    });
}
