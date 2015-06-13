var numbers = [];

for (var n=1; n<=10; n++) {
	numbers = numbers.concat(n);
}

var filtered = numbers.filter(function evenNumbers (number) {
  return number % 2 === 0;
});

console.log(filtered);


/*

function evenNumbers(number) {
  return number % 2 === 0;);
}

var filtered = numbers.filter(evenNumbers);

*/

/*

var evenNumbers = function (number) {
  return number % 2 === 0;);
}

var filtered = numbers.filter(evenNumbers);

*/

/*

var filtered = numbers.filter(function (number) {
  return number % 2 === 0;);
});

*/