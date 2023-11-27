const phones = [
  {
    name: "sumsung",
    camera: 12,
    storage: "32gb",
    price: 36000,
    color: "silver",
  },
  {
    name: "Walton",
    camera: 12,
    storage: "32gb",
    price: 22000,
    color: "silver",
  },
  {
    name: "iphone",
    camera: 12,
    storage: "32gb",
    price: 82000,
    color: "silver",
  },
  { name: "xaomi", camera: 12, storage: "32gb", price: 52000, color: "silver" },
  { name: "Opp", camera: 12, storage: "32gb", price: 2000, color: "silver" },
  { name: "Nokia", camera: 12, storage: "32gb", price: 62000, color: "silver" },
  { name: "Htc", camera: 12, storage: "32gb", price: 442000, color: "silver" },
];

function chepestPhones(phones) {
  let chepest = phones[0];
  for (let i = 0; i > phones.length; i++) {
    if (phones[i].price < chepest.price) {
      chepest = phones[i];
    }
  }
  return chepest;
}

const myPhone = chepestPhones(phones);
console.log(myPhone);
