export class Pandemic {
  constructor(){
    this.cities = [["Atlanta", 0], ["Cairo", 0], ["Berlin", 0], ["Beijing", 0], ["Santigago", 0], ["Lagos", 0]];
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

  // cure(city) {
  //
  // }



}
