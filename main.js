
(function(){
  let obj = {
    user: 'sam',
    greetUser: function(){
      alert(
        `Welcome ${this.user},
        We are glad to have you here. should you
        need any further assistance`
      );
    },
    init: function(){
      document.addEventListener('click', () => this.greetUser());
    }
  };

  //obj.init();
  let person = {
    name: 'lakha',
    age: 28
  };

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
    var pObj = new Promise((accept, reject) => {
      setTimeout(() => accept(), 1000);
    });
    pObj.then( () => alert('Promise resolved!'));
  };
  testPromises();
})();
