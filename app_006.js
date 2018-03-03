const APIKey ='Your API Key';


$("#getBalances").click(function() {
  getBalances();
});


// ADD authorization headers
var options = {
  headers: {
    'authorization': APIKey
  }
}

function getBalances() {
  $(".data").empty();
  axios.get('https://api.cobinhood.com/v1/wallet/balances', options)
    .then(function(response) {
      // ADD balances
      $(".data").append("<p>");
        $.each(response.data.result.balances, function(index, value){
          $(".data").append("<button type='button' class='btn btn-outline-primary btn-sm'>"+value.total+":&nbsp;"+value.currency+"&nbsp;</button>");
        });
        $(".data").append("</p>");
    })
    .catch(function(error) {
      console.log(errror);
    });
}
