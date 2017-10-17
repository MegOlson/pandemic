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
    expect(pandemic.cities[0].includes("San Francisco")).toEqual(true);
  });

  it("adds 3 to infection level of 3 cities on first turn", function() {
    pandemic.start();
    expect(pandemic.infectedCities).toEqual(8);
  });

  it("will return index of city when given city name", function() {
    let index = pandemic.findIndex("San Francisco");
    expect(index).toEqual(0);
  });

  it("will cure a city completely and reset its infected rate to 0", function() {
    pandemic.infectCity("Cairo");
    pandemic.cureCity("Cairo");
    expect(pandemic.cities[1][1]).toEqual(0);
  });

  it("will increase a random city's infection rate by 1 every 30 seconds", function() {
    pandemic.infectCity();
    jasmine.clock().tick(3001);
    expect(pandemic.infectedCities).toEqual(1);
  });

});
