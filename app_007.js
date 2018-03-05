const APIKey = 'Your API Key';

$("#placeOrder").click(function() {
  placeOrder();
});


// ADD authorization headers & nonce ( UNIX Timestamp )
  var options = {
    headers: {
      'nonce': (new Date).getTime(),
      'authorization': APIKey
    }
  }

// Add Order postData
var postData = {
  trading_pair_id: 'COB-ETH',
  side: 'ask',
  type: 'limit',
  price: '0.0002070',
  size: '200'
};

function placeOrder() {
  $(".data").empty();
  axios.post('https://api.cobinhood.com/v1/trading/orders',postData, options)
    .then(function(response) {
      $(".data").append(JSON.stringify(response));
    })
    .catch(function(error) {
      console.log(errror);
    });
}
