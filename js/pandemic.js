export class Pandemic {
  constructor(){
    this.cities = [["Atlanta", 0], ["Cairo", 0], ["Berlin", 0], ["Beijing", 0], ["Santiago", 0], ["Lagos", 0], ["Algiers", 0], ["Baghdad", 0], ["Bangkok", 0], ["Bogota", 0], ["Buenos Aries", 0], ["Chennai", 0], ["Chicago", 0], ["Delhi", 0], ["Essen", 0], ["Ho Chi Minh City", 0], ["Hong Kong", 0], ["Instanbul", 0], ["Jakarta", 0], ["Johannesburg", 0], ["Karachi", 0], ["Khatoum", 0], ["Kinshasa", 0], ["Kolkata", 0], ["Lima", 0], ["London", 0], ["Los Angeles", 0], ["Madrid", 0], ["Manila", 0], ["Mexico City", 0], ["Miami", 0], ["Milan", 0], ["Montreal", 0], ["Moscow", 0], ["Mumbai", 0], ["New York", 0], ["Osaka", 0], ["Paris", 0], ["Riyadh", 0], ["San Francisco", 0], ["Sao Paulo", 0], ["Seoul", 0], ["Shanghai", 0], ["St. Petersburg", 0], ["Sydney", 0], ["Taipei", 0], ["Tehran", 0], ["Tokyo", 0], ["Washington", 0]];
    this.infectedCities = 0;
  }

  start(){
    for(let i = 0; i < 3; i ++) {
      let index = this.getRandomInt(0, 6);
      if(this.cities[index][1] == 0) {
        this.cities[index][1] += 3;
      }else {
        i --;
      }
    }
    this.infectedCities += 3;
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
    let index = this.getRandomInt(0, 6);
    this.cities[index][1] += 1;
    this.infectedCities += 1;
  }

  cureCity(city) {
    let cureCity = this.findIndex(city);
    this.cities[cureCity][1] = 0;
    this.infectedCities -= 1;
  }

}
