const bobies = ['SPorts', 'Cooking'];
for (let hobb of bobies) {
  console.log(hobb);
}
const newbobies = bobies.map((ell) => ell.toUpperCase());
console.log(newbobies);
console.log(bobies);
bobies.push('coding');
console.log(bobies);
const moreHobbies = [...bobies, 'skying ', 'dancing'];
console.log(moreHobbies);
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4, 5, 6));
console.log(toArray(1, 2, 3));
