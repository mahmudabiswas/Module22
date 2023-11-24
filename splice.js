const friends = [12, 3, 4, 5, 65, 78, 97, 90];
// Removes elements from an array
// and, if necessary, inserts new elements
// returning the deleted elements.
// will change the original array
console.log(friends);
const parsiel = friends.splice(2, 5, 99, 23, 1111, 666, 444, 9999);
console.log(parsiel);
