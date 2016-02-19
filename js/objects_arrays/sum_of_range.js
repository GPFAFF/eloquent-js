//Sum of range

var range = function(start, end) {

	if(arguments.length === 1) {
		return start;
	}

	var results = [];

	if(end > start) {
		for(var i = start; i <= end; i++) {
		  //console.log('start index ', i);
		  results.push(i);
		} 
	} else {
	  	for (var j = start; j >= end; j--) {
	  	 results.push(j);
	  	}
	}
	return results;
}

var sum = function(array) {
	var sumArray = 0;

	for (var i = 0; i < array.length; i++) {
		sumArray = sumArray + array[i];
		//console.log('sumArray ', sumArray);
		//return sumArray;
	}
	return sumArray;
}
console.log(range(9, 4));
//console.log(range(1, 10));
//console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55