/*
var myPlaces = ['Bali', 'Maldives', 'Havana'];
var friendPlaces = ['Brasil', 'Mexico', 'Havana'];

for (var i = 0; i < myPlaces.length; i++) {
//  console.log(myPlaces[i]);
    for (var j = 0; j < friendPlaces.length; j++) {
    //  console.log(friendPlaces[j]);

      if (myPlaces[i] === friendPlaces[j]) {
        console.log(myPlaces[i]);
      }
  }
}



var myPlaces = ['Paris', 'New York', 'Barcelona'];
var friendPlaces = ['Rome', 'Chicago', 'Paris'];

for (var i = 0; i < myPlaces.length; i++) {
    console.log(myPlaces[i]);

  for (var j = 0; j < friendPlaces.length; j++) {
        console.log(friendPlaces[j]);

    //if (myPlaces[i] === friendPlaces[j]) {
    			//console.log('Match: ' + myPlaces[i]);
			//	}
    }
}

var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart';
while (currentCard !== 'Spade') {
  console.log(currentCard);

  var randomNumber = Math.floor(Math.random() * 4);

  currentCard = cards[randomNumber];
}

console.log('You found the Spade!')


for (var i = 5; i <= 50; i+=5) {
	console.log(i);
}



var myArr = [ 2, 3, 4, 5, 6];

var total = 0;
for (var i = 0; i < myArr.length; i ++) {
  total = total + myArr[i];
}

console.log(total);




var arr = [[1,2], [3,4], [5,6]];
for (var i=0; i<arr.length;i++) {
  var arr2 = arr[i];
  for (var j=0; j<arr2.length; j++){
     console.log(arr2[j]);
   }
}



var arr = [
[1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
for (var j=0; j < arr[i].length; j++) {
console.log(arr[i][j]);
}
}
*********

function displayOneLevelArray(arr) {
for (var i=0; i < arr.length; i++) {
console.log(arr[i]);
}
console.log("End of array");
}

console.log("Display one lvl array");
var arr = [1, 2, 3, 4];
displayOneLevelArray(arr);


console.log("Display multi-dimensional array:");
var arr2 = [[1,2], [3,4], [5,6,7,8,9]];

for (var i=0; i<arr2.length; i++) {
displayOneLevelArray(arr2[i]);
}
console.log("End of programm");


function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
    }
    product = product * arr[j];

  }



  return product;
}

// Modify values below to test your code
console.log(multiplyAll([[1,2], [3,4], [5,6]]));

Write a for loop that will iterate from 0 to 20. For each iteration,
it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").


for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}


Multiplication Tables

Write a for loop that will iterate from 0 to 10. For each iteration of the for loop,
it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


// Multiplication tables
var multiplier = 9;
for (var i = 0; i <= 10; i++) {
    var result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}


for (var multiplier = 0; multiplier <= 10; multiplier++) {
 for (var i = 0; i <= 10; i++) {
   var result = multiplier * i;
   console.log(multiplier + ' * ' + i + ' = ' + result);
 }
}
*/

The Grade Assigner

Check the results of your assignGrade function from the conditionals exercise by logging every value from 60 to 100:
your log should show "For 88, you got a B. For 89, you got a B. For 90, you got an A.
For 91, you got an A.", etc., logging each grade point in the range.

function assignGrade
