import { Pandemic } from "./../js/pandemic.js";

describe("Pandemic", function () {
  let pandemic;

  beforeEach(function(){
    pandemic = new Pandemic();
    jasmine.clock().install();
  });

  afterEach(function(){
    jasmine.clock().uninstall();

  });

  it("creates an instance of Pandemic class", function() {
    expect(pandemic.cities[1].includes("Cairo")).toEqual(true);
  });

  it("adds 3 to infection level of 3 cities on first turn", function() {
    pandemic.start();
    console.log(pandemic.cities);
    expect(pandemic.infectedCities).toEqual(3);
  });

  it("will return index of city when given city name", function() {
    let index = pandemic.findIndex("Cairo");
    expect(index).toEqual(1);
  });

  it("will cure a city completely and reset its infected rate to 0", function() {
    pandemic.infectCity("Cairo");
    pandemic.cureCity("Cairo");
    expect(pandemic.cities[1][1]).toEqual(0);
  });

  it("will increase a random city's infection rate by 1 every 30 seconds", function() {
    pandemic.infectCity();
    jasmine.clock().tick(30001);
    console.log(pandemic.cities);
    expect(pandemic.infectedCities).toEqual(1);
  });

});
