let name = 'davis';
let age = 26;
let hasHobbies = true;

function summarizeUser(username, age, hasHobby) {
  return {
    name: username,
    age: age,
    fun: hasHobby,
  };
}

const sumUser = (username, age, isFun) => {
  return {
    username,
    age,
    hasHobbies: isFun,
  };
};

const add = (a, b) => a + b;
const addOne = (a) => a + 1;

console.log(summarizeUser(name, age, hasHobbies));
console.log(sumUser(name, age, hasHobbies));
