//reverse array 

var reverseArray = function(array) {
	//return array.reverse();
	var results = new Array;
	var len = array.length;

	for(var i = len - 1; i >= 0; i--) {
		console.log('array index ', array[i]);
		results.push(array[i]);
	}
	console.log('results ', results);
	return results;
};


var reverseArrayInPlace = function(array) {
	var results = new Array;
	var len = array.length;
	arrayValue = results;

	for(var i = len - 1; i >= 0; i--) {
		console.log('array index ', array[i]);
		results.push(array[i]);
	}
	//console.log('results ', results);
	return results;

	/* ELOQUENT JS SOLUTION

	arLen = array.length;

	for(var i = 0; i < Math.floor(arLen / 2);i++) {
		var old = array[i];
		array[i] = array[arLen - 1 - i];
		array[arLen - 1 - i] = old;
	}
	//console.log('results ', results);
	return array;*/
};





console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5, 4545, 5454, 5454,5, 6, 3, 6, 35353];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]