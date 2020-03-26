$(document).ready(function() {

  var cardsToSell;

  $.ajax("api/cards",
  {
    dataType: 'json',
      success: function(data) {

        cardsToSell = data;
        console.log("success");

        $(".magiclist").text(cardsToSell[1]["card-name"]);

        $.ajax(`https://api.ebay.com/buy/browse/v1/item_summary/search?q=${cardsToSell[1]["card-name"]}&limit=10`,
        {
          dataType: 'json',
          success: function(ebayData) {
            console.log(ebayData);
          }

        });

      }

  });

});
