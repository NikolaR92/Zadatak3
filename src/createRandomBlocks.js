/**
 * Module for filling random block of the grid
 * @module src/createRandomBlocks
 */

const bfs = require('./breadthFirstSearch.js');


/**  Function shuffles a array of points using Fisher–Yates shuffle algorithm
 * @param {Array.<Point>} grid - Array of object points
 * @returns {Array.<Point>} Array of randomly shuffled Points
 */
function shuffleGrid(grid) {
	const randomGrid = grid.slice();

	/** Fisher-Yates algorithm */
	for (let i = 0; i < randomGrid.length - 2; i += 1) {
		const j = Math.floor(Math.random() * ((randomGrid.length) - i)) + i;
		const tmp = randomGrid[i];
		randomGrid[i] = randomGrid[j];
		randomGrid[j] = tmp;
	}

	return randomGrid;
}

/** Function takes first first element from array, and puts it as last.
 * @param {Array.<Point>} randomGrid - Array of randomly shuffled points
 * @returns {Point} First element of passed array
 */
function getRandomBlock(randomGrid) {
	const randomBlock = randomGrid.shift();
	randomGrid.push(randomBlock);
	return randomBlock;
}

/** Function creates a grid with random wall blocks placed on interval.
 * @param {Array.<number>} start - Array with start coordinate on a grid
 * @param {Array.<number>} end - Array with end coordinate on a grid
 * @param {Array.<Point>} grid - Matrix where are we going to place blocks
 * @param {number} widthOfGrid - Number of colons
 * @param {number} heightOfGrid - Number or rows
 * @param {number} numOfBlocks - Number of random wall blocks we want to crate
 */
function createRandomBlocks(start, end, grid, widthOfGrid, heightOfGrid, numOfBlocks) {
	let blocksCounted = 0;
	let randomGrid = shuffleGrid(grid);
	/** we calculate distance between start and end point
	 * if number of blocks to create is higher then 100 - distance then rut
	 * between start and end can not be created with this number of blocks
	 * because that is a minimal available space we require
	 */
	const distance = Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]) + 1;
	const range = widthOfGrid * heightOfGrid - distance;
	if (numOfBlocks > range) {
		throw new RangeError(`Error createRandomBlocks function, number of blocks must be below ${range}`);
	}

	/** with each places block we check if rut between start and end is available
	 * if true, we increment the counter and set wall to true
	 * if we encounter a wall before we created all the walls,
	 * then there is not a way to create all walls with this random grid
	 * and we must start from beginning
	 */
	while (blocksCounted < numOfBlocks) {
		const block = getRandomBlock(randomGrid);

		if (!(block.wall)) {
			block.wall = true;
			blocksCounted += 1;
			console.log('random');
			const path = bfs(start, end, grid, widthOfGrid, heightOfGrid);
			if (path.length === 0) {
				block.wall = false;
				blocksCounted -= 1;
			}
			grid.forEach((x) => { x.visited = false; });
		} else {
			randomGrid = shuffleGrid(grid);
			blocksCounted = 0;
			grid.forEach((x) => { x.wall = false; });
		}
	}
}


module.exports = createRandomBlocks;
