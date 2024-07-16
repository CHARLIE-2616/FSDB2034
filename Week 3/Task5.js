function metersToFeet(meters) {
  let feet = meters * 3.281;
  console.log(`${meters} meters is equal to ${feet} feet.`);
}

function feetToMeters(feet) {
  let meters = feet * 0.3048;
  console.log(`${feet} feet is equal to ${meters} meters.`);
}

metersToFeet(10);
feetToMeters(50);
metersToFeet(25);
feetToMeters(100);
