$("#getCurrencies").click(function() {
  getCurrencies();
});


function getCurrencies() {
  $(".data").empty(); // clear Data
  // call API:
  // /v1/market/currencies [GET]
  axios.get('https://api.cobinhood.com/v1/market/currencies')
    .then(function(response) {
      // dump into data container...
      $(".data").append("<div class='card bg-dark mb-3'><div class='card-body'>" + JSON.stringify(response) + "</div></div>");
    })
    .catch(function(error) {
      console.log(errror);
    });
}
