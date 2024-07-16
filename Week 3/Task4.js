function calculateCoffeeSupply(age, cupsPerDay) {
  const maxAge = 90;
  let yearsRemaining = maxAge - age;
  let totalCups = Math.round(yearsRemaining * 365 * cupsPerDay);
  console.log(`You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`);
}

calculateCoffeeSupply(30, 2.5);
calculateCoffeeSupply(25, 3.0);
calculateCoffeeSupply(40, 1.8);