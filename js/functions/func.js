//functions go here

//closure example.

function addTo(passed) {
	var add = function(inner) {
		return passed + inner;
	}
	return add;
}

var addThree = new addTo(3);
var addFour = new addTo(4);

console.log(addThree(3));
console.log(addFour(1));