$(document).ready(function() {

  var cardsToSell;

  $.ajax("api/cards",
    {
      dataType: 'json',
            success: function(data) {

              cardsToSell = data;
              console.log("success");

              $(".test").text(cardsToSell[1]["card-name"]);

            }

    });

});
