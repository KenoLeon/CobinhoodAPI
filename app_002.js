$("#getCurrencies").click(function() {
  getCurrencies();
});


function getCurrencies() {

  // call API:
  // /v1/market/currencies [GET]

  axios.get('https://api.cobinhood.com/v1/market/currencies')
    $(".data").empty(); // clear Data
    // Return Promise
    .then(function(response) {

      $(".data").append("<div class='card bg-dark mb-3'><div class='card-body'>" + JSON.stringify(response) + "</div></div>");

    })
    // or Catch error
    .catch(function(error) {
      console.log(errror);
    });

}
