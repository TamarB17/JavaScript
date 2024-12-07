function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
}
console.log(formatDate('2024-12-06'));

let displayPI = function () {
  console.log('PI = 3.14');
};
displayPI();

function myFunc(theObject) {
  theObject.make = 'Toyota';
}

const myCar = {
  make: 'Honda',
  model: 'Accord',
  year: 1998,
};
console.log(myCar.make);
myFunc(myCar);
console.log(myCar.make);

function printPersonInfo({ firstName, lastName, age }) {
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
  console.log(`Age: ${age}`);
}

const person = {
  firstName: 'Cas',
  lastName: 'Nuel',
  age: 30,
};

printPersonInfo(person);
