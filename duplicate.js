const names = [
  "abul",
  "kabul",
  "babul",
  "ibul",
  "bulbul",
  "ibul",
  "babul",
  "kabul",
  "abul",
  "bulbul",
  "ibul",
];

function dublicateNames(names) {
  let unique = [];
  for (let i = 0; i <= names.length; i++) {
    // const name = names[i];
    if (unique.includes(names[i]) === false) {
      unique.push(names[i]);
    }
  }
  return unique;
}
const uniqueNmaes = dublicateNames(names);
console.log(uniqueNmaes);
