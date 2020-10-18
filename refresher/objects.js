const person = {
  name: 'Davis',
  age: 29,
  greet() {
    console.log(
      'Hi my name is ' + this.name + ' I am ' + this.age + ' Years old'
    );
  },
};
console.log(person);
person.greet();
