export class Pandemic {
  constructor(){
    this.cities = [["San Francisco", 0], ["Chicago", 0], ["Atlanta", 0], ["Washington", 0], ["New York", 0], ["London", 0], ["Madrid", 0], ["Paris", 0], ["Essen", 0], ["Milan", 0], ["St Petersburg", 0], ["Montreal", 0], ["Los Angeles", 0], ["Mexico City", 0], ["Miami", 0], ["Bogota", 0], ["Lima", 0], ["Santiago", 0], ["Buenos Aires", 0], ["Sao Paulo", 0], ["Lagos", 0], ["Kinshasa", 0], ["Johannesburg", 0], ["Khartoum", 0], ["Algiers", 0], ["Istanbul", 0], ["Cairo", 0], ["Riyadh", 0], ["Baghdad", 0], ["Moscow", 0], ["Tehran", 0], ["Karachi", 0], ["Delhi", 0], ["Kolkata", 0], ["Chennai", 0], ["Mumbai", 0], ["Beijing", 0], ["Seoul", 0], ["Tokyo", 0], ["Shanghai", 0], ["Hong Kong", 0], ["Osaka", 0], ["Taipei", 0], ["Bangkok", 0], ["Ho Chi Minh", 0], ["Jakarta", 0], ["Manila", 0], ["Sydney", 0]];
    this.infectedCities = 0;
    this.outbreaks = 0;
  }

  start(difficulty){
    for(let i = 0; i < 8; i ++) {
      let index = this.getRandomInt(0, 49);
      if(this.cities[index][1] == 0) {
        this.cities[index][1] += 3;
      }else {
        i --;
      }
    }
    this.difficulty = difficulty;
    this.infectedCities += 8;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  findIndex(city) {
    for(let i = 0; i < this.cities.length; i++) {
      if(this.cities[i][0] === city) {
        return i;
      }
    }
  }

  infectCity() {
    let index = this.getRandomInt(0, 49);
    this.cities[index][1] += 1;
    this.infectedCities += 1;
  }

  cureCity(city) {
    let cureCity = this.findIndex(city);
    this.cities[cureCity][1] = 0;
    this.infectedCities -= 1;
  }

  outbreak(city) {
    let outbreakCity = this.findIndex(city);
    this.cities[outbreakCity][1] = 5;
    this.cities[outbreakCity - 1][1] += 1;
    this.cities[outbreakCity + 1][1] += 1;
    this.outbreaks += 1;
    if (this.outbreaks >= 8) {
      this.loser();
    }
    // else if (this.outbreaks < 8 ) {
    //   this.winner();
    // }

  }

  loser() {
    for(let i = 0; i < this.cities.length; i++) {
      this.cities[i][1] = 5;
    }
    this.result = "loser";
  }
  //
  // winner() {
  //
  // }

}
