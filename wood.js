function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChair = 3;
  const perTable = 10;
  const perBed = 50;

  const PreChairQuantity = chairQuantity * perChair;
  const perTableQuantity = tableQuantity * perTable;
  const perBedQuantity = bedQuantity * perBed;
  console.log(PreChairQuantity, perTableQuantity, perBedQuantity);
  const total = PreChairQuantity + perTableQuantity + perBedQuantity;

  return total;
}

const quantity = woodCalculator(2, 3, 5);
console.log(quantity);
