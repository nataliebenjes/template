
  export default class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.murcuryAge = 0;
      this.venusAge = 0;
      this.marsAge = 0;
      this.jupiterAge = 0;
    }
    addMurcuryAge() {
      this.murcuryAge = Math.round(10*this.age / .24)/10;
    }
    addVenusAge() {
      this.venusAge = Math.round(10*this.age / .62)/10;
    }
    addMarsAge () {
      this.marsAge = Math.round(10*this.age / 1.88)/10;
    }
    addJupiterAge () {
      this.jupiterAge = Math.round(10*this.age / 11.86)/10;
    }
    ageSinceBirthday () {

    }
  }