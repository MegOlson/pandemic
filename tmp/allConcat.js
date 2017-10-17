import { Pandemic } from "./../js/pandemic.js";

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

    setInterval(function(){
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
    }, difficulty);

    for(let i = 0; i < 48; i++) {
      $("#" + (i+1).toString()).click(function(){
        pandemic.cureCity(pandemic.cities[i][0]);
        let city = pandemic.cities[i][0].replace(/[^A-Z0-9]/ig, "-");
        $("#" + city.toLowerCase()).text("Infection rate: " + pandemic.cities[i][1]);
      });
    }

    if (pandemic.result === "winner") {
      $("#stats").addClass("hide");
      $(".winner").removeClass("hide");
    } else if (pandemic.result === "loser") {
      $("#stats").addClass("hide");
      $(".loser").removeClass("hide");
    }
  });
});
