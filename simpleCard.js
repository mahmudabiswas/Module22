const products = [
  { name: "shoe", price: 1200 },
  { name: "shirt", price: 2200 },
  { name: "pant", price: 3700 },
  { name: "belt", price: 600 },
];

function addProducts(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum = sum + products[i].price;
  }
  return sum;
}
const result = addProducts(products);
console.log(result);
