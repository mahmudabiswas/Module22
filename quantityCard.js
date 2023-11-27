const products = [
  { name: "shoe", price: 1200, quantity: 5 },
  { name: "shirt", price: 2200, quantity: 4 },
  { name: "pant", price: 3700, quantity: 6 },
  { name: "belt", price: 600, quantity: 3 },
];

function addProducts(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const totalProducts = products[i].price * products[i].quantity;

    sum = sum + totalProducts;
    console.log("total prize of sum", sum);
  }
  return sum;
}
const result = addProducts(products);
console.log(result);
