//Minimum with math.min and self created function

var minReturner = function(x, y) {
	if(x < y) {
		return x;
	} else {
		return y;
	}
};
console.log(minReturner(3, 6));

/*var minReturner = function(x, y) {
	return (Math.min(x, y))
};

console.log(minReturner(3, 6));*/