function calculatePetAge(petAge, conversionRate = 7) {
  let petYears = petAge * conversionRate;
  console.log(`Your pet is ${petYears} years old in pet years!`);
}

// Calling the function with different arguments
calculatePetAge(3);  // Assuming default conversion rate (for cats)
calculatePetAge(5, 5);  // Custom conversion rate (for another type of pet)
calculatePetAge(2, 10);  // Another custom conversion rate (for a different type of pet)