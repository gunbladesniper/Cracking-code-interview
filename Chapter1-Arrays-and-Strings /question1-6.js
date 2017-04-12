var image =[[0,1,0],[0,1,0],[1,1,1]];
var resultImage = [[1,0,0],[1,1,1],[1,0,0]];

function rotateClockwise(matrix){
  matrix = matrix.reverse()
  for(var i = 0; i< matrix.length; i++){
    for(var j = 0 ;j<i; j++){
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp
    }
  }
}

