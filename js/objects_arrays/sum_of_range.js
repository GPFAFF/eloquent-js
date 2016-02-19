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

var rangeStep = function(start, end, step) {

	if(arguments.length === 1) {
		return start;
	}

	var results = [];

	if(end > start) {
		for(var i = start; i <= end; i += step) {
		  //console.log('start index ', i);
		  results.push(i);
		} 
	} else {
	  	for (var j = start; j >= end; j += step) {
	  	 results.push(j);
	  	}
	}
	return results;
}

console.log(range(9, 4));
//console.log(range(1, 10));
console.log(rangeStep(1, 10, 2));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55