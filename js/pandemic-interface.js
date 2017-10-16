import { Pandemic } from "./../js/pandemic.js";

$(document).ready(function(){
  $("#start-game").click(function(e){
    e.preventDefault();
    $("#start-game").addClass("hide");
    $(".stats").show();
    let pandemic = new Pandemic;
    pandemic.start();
    $("#atlanta").append(pandemic.cities[0][1]);
    $("#cairo").append(pandemic.cities[1][1]);
    $("#berlin").append(pandemic.cities[2][1]);
    $("#beijing").append(pandemic.cities[3][1]);
    $("#santiago").append(pandemic.cities[4][1]);
    $("#lagos").append(pandemic.cities[5][1]);
  });
});
