const Point = require('./Point.js');

// Function generates grid, where each cell in matrix is a point
// arguments: row - int number of row in a matrix
//            coloms -int number of coloms in a matrix
// return: array of Points - array with each point of matrix cell saved
function createGrid(row, coloms) {
	if (!(Number.isInteger(row)) && !(Number.isInteger(coloms))) {
		throw new TypeError('Function createGrid: arguments must be of Integer type');
	}
	const grid = [];
	for (let i = 0; i < row; i += 1) {
		for (let j = 0; j < coloms; j += 1) {
			const point = new Point(j, i);
			grid.push(point);
		}
	}

	return grid;
}

module.exports = createGrid;
