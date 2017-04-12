function zeroCross(matrix){
	var columns = [];
	var rows = [];

	for(let i = 0; i < matrix.length; i++){
		for(let j = 0; j < matrix[0].length; j++){
			if(matrix[i][j] === 0){
				rows.push(i);
				columns.push(j);
			}
		}
	}

	columns.forEach((col)=>{
		zeroColumn(matrix, col);
	});
	rows.forEach((row)=>{
		zeroRow(matrix, row);
	});
	return matrix;
}

function zeroRow(matrix, row){
	for(let i = 0 ; i< matrix.length; i++){
		for(let j = 0 ;j< matrix[0].length; j++){
			if(i === row){
				matrix[i][j] = 0;
			}
		}
	}
}

function zeroColumn(matrix, col){
		for(let i = 0 ; i< matrix.length; i++){
		for(let j = 0 ;j< matrix[0].length; j++){
			if(j === col){
				matrix[i][j] = 0;
			}
		}
	}
}

var mat = [
[1,1,1,],
[1, 0, 1],
[1,1,1]
];

var crossMatrix = [
[1,0,1],
[0,0,0],
[1,0,1]
];

var mat2= [
[1,1,1,0],
[1,0,1,1],
[1,1,1,1]
]

var crossMat2= [
[0,0,0,0],
[0,0,0,0],
[1,0,1,0]
]

function equalMatrix(mat, mat2){
  return JSON.stringify(mat) === JSON.stringify(mat2);
}

equalMatrix(zeroCross(mat), crossMatrix);
equalMatrix(zeroCross(mat2), crossMat2);