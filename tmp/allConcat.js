import { Pandemic } from "./../js/pandemic.js";

$(document).ready(function(){
  $("#start-game").click(function(e){
    e.preventDefault();

    $("#start-game").addClass("hide");
    $(".stats").show();

    let pandemic = new Pandemic;
    pandemic.start();

    for(let i = 0; i < 48; i++) {
      let city = pandemic.cities[i][0].replace(/[^A-Z0-9]/ig, "-");
      $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[i][1]);
    }

    let refreshInfectionRate = setInterval(function(){
      pandemic.infectCity();
      for(let i = 0; i < 48; i++) {
        let city = pandemic.cities[i][0].replace(/[^A-Z0-9]/ig, "-");
        if(pandemic.cities[i][1] > 5) {
          pandemic.outbreak(pandemic.cities[i][0]);
          $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[i][1]);
        } else {

          $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[i][1]);
        }
      }
    }, 10);

    for(let i = 0; i < 48; i++) {
      $("#" + (i+1).toString()).click(function(){
        pandemic.cureCity(pandemic.cities[i][0]);
        let city = pandemic.cities[i][0].replace(/[^A-Z0-9]/ig, "-");
        $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[i][1]);
      });
    }
  });
});
