// My code
var a = ' # # # #'
var b = '# # # #'
for(var i = 0; i < 8; i++){
  	if(i%2)
    	console.log(b)
  	else
    	console.log(a)
}

// Book code
var size = 8;
var board = "";
for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
console.log(board);