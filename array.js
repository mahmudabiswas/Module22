const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = { id: 1, class: 12, name: "aun" };
const friends = [12, 34, 56, 765, 89, 33];
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);
console.log(friends.includes(34));
console.log(friends.indexOf(34));

const newFriends = [10, 11, 13, 15, 17];
const allFriends = newFriends.concat(friends);
console.log(allFriends);
