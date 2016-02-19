var number = document.getElementById('number');

function clickSetup() {
	var tracks = document.getElementsByClassName('track');

	function closureClickHandler(trackNumber) {
    	return function clickHandler() {
      		number.innerHTML = trackNumber + 1;
    	}
	}

	for (var i = 0, len = tracks.length; i < len; i++) {
	  tracks[i].addEventListener('click', closureClickHandler(i));
	}
}

clickSetup();