import { Pandemic } from "./../js/pandemic.js";
var apiKey = require("./../.env").apiKey;

$(document).ready(function(){
  $("#go").submit(function(e){
    e.preventDefault();
    let difficulty = $("input:radio[name=difficulty]:checked").val();

    $("#go").addClass("hide");
    $(".stats").show();

    let pandemic = new Pandemic;
    pandemic.start(difficulty);

    for(let i = 0; i < 48; i++) {
      let city = pandemic.cities[i][0].replace(/[^A-Z0-9]/ig, "-");
      $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[i][1]);
    }

    let anything = setInterval(function(){
      pandemic.infectCity();
      for(let i = 0; i < 48; i++) {
        let city = pandemic.cities[i][0].replace(/[^A-Z0-9]/ig, "-");
        if(pandemic.cities[i][1] >= 5) {
          pandemic.outbreak(pandemic.cities[i][0]);
          $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[i][1]);
        } else {
          $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[i][1]);
        }
      }
      if (pandemic.result === "winner") {
        $(".stats").addClass("hide");
        $(".winner").show();
        $.ajax({
          url: `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=winner`,
          type: 'GET',
          data: {
            format: 'json'
          },
          success: function(response) {
            $('.winner2').html(`<img src="${response.data.image_original_url}">`);
          },
          error: function() {
            $('#errors').text("There was an error processing your request. Please try again.")
          }
        });
        clearInterval(anything);
      } else if (pandemic.result === "loser") {
        $(".stats").addClass("hide");
        $(".loser").show();
        $.ajax({
          url: `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=fail`,
          type: 'GET',
          data: {
            format: 'json'
          },
          success: function(response) {
            $('.loser2').html(`<img src="${response.data.image_original_url}">`);
          },
          error: function() {
            $('#errors').text("There was an error processing your request. Please try again.")
          }
        });
        clearInterval(anything);
      }
    }, difficulty);

    for(let i = 0; i < 48; i++) {
      $("#" + (i+1).toString()).click(function(){
        pandemic.cureCity(pandemic.cities[i][0]);
        let city = pandemic.cities[i][0].replace(/[^A-Z0-9]/ig, "-");
        $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[i][1]);
      });
    }
    $(".replay").click(function(){
      location.reload();
    });
  });
});
