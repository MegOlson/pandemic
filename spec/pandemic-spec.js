import { Pandemic } from "./../js/pandemic.js";

describe("Pandemic", function () {
  let pandemic = new Pandemic;

  beforeEach(function(){
    jasmine.clock().install();
  });

  it("creates an instance of Pandemic class", function() {
    expect(pandemic.start).toEqual(true);
  });
});
