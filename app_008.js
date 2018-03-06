const APIKey = 'Your API Key';

// Button Click handlers:
$("#placeOrder").click(function() {
  placeOrder();
});

// Notice we need to use on click for dynamically created buttons...
$("#sendCancelOrder").on("click", "#cancelOrder", function() {
  // Get our order ID
  var orderId = $(this).attr('data-orderid');
  cancelOrder(orderId);
});


function sendOrder() {
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
    price: '0.0002010',
    size: '200'
  };

  return axios.post('https://api.cobinhood.com/v1/trading/orders', postData, options);
}

function cancelOrder(OrderId) {
  // ADD authorization headers & nonce ( UNIX Timestamp )
  var options = {
    headers: {
      'nonce': (new Date).getTime(),
      'authorization': APIKey
    }
  }
  // send a DELETE request with the Order ID
  axios.delete('https://api.cobinhood.com/v1/trading/orders/' + OrderId, options)
    .then(function(response) {
      $(".data").append('Order succesfully canceled <br>');
    })
    .catch(function(error) {
      console.log(errror);
    });
}

function placeOrder() {
  $(".data").empty();
  // using fat arrows syntax for comparison...
  // and skipping catching errors, but you shouldn't...
  sendOrder().then(response => {
    $(".data").append('Order succesfully placed <br>');
    $("#sendCancelOrder").append("&nbsp;<button id='cancelOrder' type='button' class='btn btn-dark' data-orderid = " + response.data.result.order.id + ">Cancel Order</button>");
  });
}
