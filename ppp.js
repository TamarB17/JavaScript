//1

function numbers(n, m) {
  if (n > m) {
    return n;
  } else if (m > n) {
    return m;
  } else {
    return 0;
  }
}
let result = numbers(17, 13);
console.log(result);

//2

function shekreba(n1, n2) {
  let sum = n1 + n2;
  return sum;
}
let shedegi = shekreba(10, 12);
console.log(shedegi);

//3

function name() {
  console.log('tamar bendeliani');
}
name();

//4
function fullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
let srulisaxeli = fullName('tamar', 'bendeliani');
console.log(srulisaxeli);

//5

function number(n) {
  let a = 1;
  for (let i = 1; i <= n; i++) {
    a *= i;
  }
  return a;
}

let namravli = number(7);
console.log(namravli);

//6, 7, 8

let student = {
  firstName: 'tamo',
  lastName: 'bendeliani',
  age: 35,
  scores: [4, 7, 5, 3, 2],
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
console.log('full name:', student.fullName());

function qulebisjami(scores) {
  let jami = 0;
  for (i = 0; i < scores.length; i++) {
    jami += scores[i];
  }
  return jami;
}
let sum = qulebisjami(student.scores);
console.log(sum);
console.log(student.firstName + ' ' + student.age);
