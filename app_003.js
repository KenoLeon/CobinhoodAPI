$("#getCurrencies").click(function() {
  getCurrencies();
});

function getCurrencies() {
  $(".data").empty();
  axios.get('https://api.cobinhood.com/v1/market/currencies')
    .then(function(response) {
      // go over each item in currencies array...
      $.each(response.data.result.currencies, function(index, value) {
        console.log(value.currency);
        $(".data").append("<p><b>" + value.currency + "</b>&nbsp;" + value.name + "</p>")
      });
    })
    .catch(function(error) {
      console.log(errror);
    });
}
