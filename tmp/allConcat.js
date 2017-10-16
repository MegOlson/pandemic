import { Pandemic } from "./../js/pandemic.js";

$(document).ready(function(){
  $("#start-game").click(function(e){
    e.preventDefault();

    $("#start-game").addClass("hide");
    $(".stats").show();

    let pandemic = new Pandemic;
    pandemic.start();

    for(let i = 0; i < 49; i++) {
      let city = pandemic.cities[i][0].replace(/[^A-Z0-9]/ig, "-");
      $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[i][1]);
    }

    let refreshInfectionRate = setInterval(function(){
      pandemic.infectCity();
      for(let i = 0; i < 49; i++) {
        let city = pandemic.cities[i][0].replace(/[^A-Z0-9]/ig, "-");
        $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[i][1]);
      }
    }, 3000);

    for(let i = 0; i < 49; i++) {
      $("#" + (i+1).toString()).click(function(){
        pandemic.cureCity(pandemic.cities[i][0]);
        let city = pandemic.cities[i][0].replace(/[^A-Z0-9]/ig, "-");
        $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[i][1]);
      });
    }
  });
});
