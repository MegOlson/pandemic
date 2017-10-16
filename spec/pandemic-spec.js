import { Pandemic } from "./../js/pandemic.js";

describe("Pandemic", function () {
  let pandemic = new Pandemic;

  beforeEach(function(){
    jasmine.clock().install();
  });

  it("creates an instance of Pandemic class", function() {
    expect(pandemic.cities.includes("Atlanta")).toEqual(true);
  });

  // it("adds 3 to infection level of 3 cities on first turn", function() {
  //   expect(pandemic.start).toEqual(true);
  // });
});
