import Person from './../src/galaxy.js';

describe("Person",  () => {

  let person;

  beforeEach(() => {
      person = new Person("Shauna", 35);
  });

  test("Make a person object", () => {
      expect(person.name).toEqual("Shauna");
      expect(person.age).toEqual(35);
      expect(person.murcuryAge).toEqual(0);
      expect(person.venusAge).toEqual(0);
      expect(person.marsAge).toEqual(0);
      expect(person.jupiterAge).toEqual(0);
  });
  test("calculate murcury age", () => {
    person.addMurcuryAge();
    expect(person.murcuryAge).toEqual(8.4);
  })
  test("caculate venusAge", () => {
    person.addVenusAge();
    expect(person.venusAge).toEqual(21.7);
  })
})