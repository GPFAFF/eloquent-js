//Bean Counting 

var countBs = function(string) {
	var upperCount = 0;

	return countChar(string, 'B');

	/*for (var i = 0, len = string.length; i < len; i++) {
		strings = string.charAt(i);
		console.log('strings ', strings)

		if(strings === "B"){
			console.log('stings Upper ', strings.toUpperCase());
			upperCount += 1;
		}
	}
	return upperCount;*/
}

var countChar = function(string, charCounted) {
	var count = 0;

	for(var i = 0, len = string.length; i < len; i++) {
		strings = string.charAt(i);

		console.log('strings ', strings)

		if(strings === charCounted) {
			count += 1;
		}
	}
	return count;
}


console.log(countBs('ccd'));
console.log(countChar('kakkerlak', 'k'));
