
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
      this.murcuryAge = this.age * .24;
    }
    addVenusAge() {
      this.venusAge = this.age * .62;
    }
    addMarsAge () {
      this.marsAge = this.age * 1.88;
    }
    addJupiterAge () {
      this.jupiterAge = Math.round(10*this.age * 11.86)/10;
    }
  }