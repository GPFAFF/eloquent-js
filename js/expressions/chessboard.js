function chessBoard(num) {

	var size = 8;
 	
 	for(var i = 1; i <= size; i++){
 		var hash =" ";

 		for(var x = 1; x <= size; x++) {
 			var combined = i + x;
 			if(combined % 2 === 0){
 				hash += "#"
 			} else {
 				hash += " ";
 			}
 		} 
	console.log(hash);
	}
}

chessBoard();