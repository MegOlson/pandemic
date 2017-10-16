import { Pandemic } from "./../js/pandemic.js";

$(document).ready(function(){
  $("#start-game").click(function(e){
    e.preventDefault();

    $("#start-game").addClass("hide");
    $(".stats").show();
    
    let pandemic = new Pandemic;
    pandemic.start();

    $("#atlanta").text("Infection rate: " + pandemic.cities[0][1]);
    $("#cairo").text("Infection rate: " + pandemic.cities[1][1]);
    $("#berlin").text("Infection rate: " + pandemic.cities[2][1]);
    $("#beijing").text("Infection rate: " + pandemic.cities[3][1]);
    $("#santiago").text("Infection rate: " + pandemic.cities[4][1]);
    $("#lagos").text("Infection rate: " + pandemic.cities[5][1]);

    pandemic.infectCity();

    $("#1").click(function(){
      pandemic.cureCity("Atlanta");
      $("#atlanta").text("Infection rate: " + pandemic.cities[0][1]);
    });
    $("#2").click(function(){
      pandemic.cureCity("Cairo");
      $("#cairo").text("Infection rate: " + pandemic.cities[1][1]);
    });
    $("#3").click(function(){
      pandemic.cureCity("Berlin");
      $("#berlin").text("Infection rate: " + pandemic.cities[2][1]);
    });
    $("#4").click(function(){
      pandemic.cureCity("Beijing");
      $("#beijing").text("Infection rate: " + pandemic.cities[3][1]);
    });
    $("#5").click(function(){
      pandemic.cureCity("Santiago");
      $("#santiago").text("Infection rate: " + pandemic.cities[4][1]);
    });
    $("#6").click(function(){
      pandemic.cureCity("Lagos");
      $("#lagos").text("Infection rate: " + pandemic.cities[5][1]);
    });
  });
});
