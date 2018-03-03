$("#getTickers").click(function() {
  getTickers();
});

// GET ALL tickers, response format:

// {
//     "success": true,
//     "result": {
//         "ticker": {
//             "trading_pair_id": "COB-BTC",
//             "timestamp": 1504459805123,
//             "24h_high": "23.456",
//             "24h_low": "10.123",
//             "24h_open": "15.764",
//             "24h_volume": "7842.11542563",
//             "last_trade_price":"244.82",
//             "highest_bid":"244.75",
//             "lowest_ask":"244.76"
//         }
//     }
// }


function getTickers() {

  // Table Headers
  var table = "<div class='table-responsive'><table class='table table-sm'><thead><tr><th scope= 'col'>Ticker</th><th scope= 'col'> High</th><th scope= 'col'>Low</th><th scope= 'col'>Last</th><tr></thead><tbody>";

  $(".data").empty();
  axios.get('https://api.cobinhood.com/v1/market/tickers/')
    .then(function(response) {
      // Table Content
      // $(".data").append(JSON.stringify(response));
      $.each(response.data.result.tickers, function(index, ticker) {
          table += "<tr><td>"+ticker.trading_pair_id+"</td>";
          // Notice different Object notation []
          table += "<td>"+ticker['24h_high']+"</td>";
          table += "<td>"+ticker['24h_low']+"</td>";
          table += "<td>"+ticker.last_trade_price+"</td></tr>";
      });
      // Table Footer
      table += "</tbody></table></div>"

      $(".data").append(table);

    })

    .catch(function(error) {
      console.log(errror);
    });
}
