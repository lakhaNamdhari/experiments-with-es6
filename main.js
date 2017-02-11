import {addMark} from './testmodule.js';
(function(){

  let person = {
    name: 'lakha',
    age: 28
  };

  // Html Templates, arrow functions and multiline strings
  let testTAM = () => {
    let obj = {
      user: 'sam',
      greetUser: function(){
        console.log(
          `Welcome ${this.user},
          We are glad to have you here. should you
          need any further assistance`
        );
      },
      init: function(){
        document.addEventListener('click', () => this.greetUser());
      }
    };
    obj.init();
  };
  testTAM();

  // Destructuring assignments
  let testDestructuring = () => {
    let {name, age} = person;
    console.log(`${name} is ${age} years old.`);
  };
  testDestructuring();

  // Inheritance in Object literals
  let testObjectLiterals = () => {
    let developer = {
      __proto__: person,
      skill: 'javascript',
      testDestructuring
    };
    console.log(developer);
    developer.age = 20;
    console.log(person);
    person.age = 50;
    console.log(developer);
  };
  testObjectLiterals();

  // The new Promises
  let testPromises = () => {
    let resolved = new Promise((accept, reject) => {
      setTimeout(() => {
        try{
          accept()
        }catch(e){
          console.error('Promise rejected!');
        }
      }, 1000);
    });
    resolved.then(() => console.log('Promise resolved!'));
  };
  testPromises();

  // Block level scope and const
  let testConst = () => {
    const fruit = 'apple';
    try{
      //fruit = 'banana'; //error prone
    }catch(e){
      console.error(`${fruit} is immutable`);
    }
  };
  testConst();

  // Testing Classes and Inheritance
  class Fruit{
    constructor(name = 'unknown'){
      this.name = name;
      this.eatable = true;
    }

    isEatable(){
      return this.eatable;
    }
  }

  class Jam extends Fruit{
    constructor(name, weight){
      super(name);
      this.weight = weight;
    }

    info(){
      return `This is ${this.name} jam weighing ${this.weight} gms`;
    }
  }

  let ja = new Jam('Apple', 100);
  console.log(ja.info());
  console.log(ja.isEatable());

  // Import / Export usage
  addMark();
})();
