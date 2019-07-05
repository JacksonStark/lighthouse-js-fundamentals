const ageCalculator = (name, yearOfBirth, currentYear) => {
  let age = currentYear - yearOfBirth;
  console.log(`${name} is ${age} years old.`);
}

ageCalculator('Suzie', 1987, 2019);

ageCalculator('Jack', 2007, 2019);

ageCalculator('Ali', 2019, 2019);