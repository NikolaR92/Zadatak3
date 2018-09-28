const bfs = require('./bfs.js');


//  Function shuffels a array of points using Fisher–Yates shuffle algorithm
// arguments: grid - array of object points
// returns: array of randomly shuffled Points
function shuffelGrid(grid) {
	const randomGrid = grid.slice();

	// Fisher-Yates algorithm
	for (let i = 0; i < randomGrid.length - 2; i += 1) {
		const j = Math.floor(Math.random() * ((randomGrid.length) - i)) + i;
		const tmp = randomGrid[i];
		randomGrid[i] = randomGrid[j];
		randomGrid[j] = tmp;
	}

	return randomGrid;
}

// Function takes first first element from array, and puts it as last
// arguments: randomGrid - array of randomly shuffled points
// returns: first element of passed array
function getRandomBlock(randomGrid) {
	const randomBlock = randomGrid.shift();
	randomGrid.push(randomBlock);
	return randomBlock;
}

// Function creates a grid with random wall blocks placed on interval
// arguments: start - array with start coordinate on a grid
//           end - array with end coordinate on a grid
//           grid - matrix where are we going to place blocks
//           numOfBlocks - number of random wall blocks we want to crate
function createRandomBlocks(start, end, grid, numOfBlocks) {
	let blocksCounted = 0;
	let randomGrid = shuffelGrid(grid);
	// we calculate distance between start and end point
	// if number of blocks to create is higher then 100 - distance then rut
	// between start and end can not be created with this number of blocks
	// beacuase that is a minimal available space we require
	const distance = Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]) + 1;
	const range = 100 - distance;
	if (numOfBlocks > range) {
		throw new RangeError(`Error createRandomBlocks function, number of blocks must be below ${range}`);
	}

	// with each places block we check if rut between start and end is available
	// if true, we increment the counter and set wall to true
	// if we encounter a wall before we created all the walls,
	// then there is not a way to create all walls with this random grid
	// and we must start from begining
	while (blocksCounted < numOfBlocks) {
		const block = getRandomBlock(randomGrid);
		if (!(block.wall)) {
			block.wall = true;
			blocksCounted += 1;
			const path = bfs(start, end, grid);
			if (path.length === 0) {
				block.wall = false;
				blocksCounted -= 1;
			}
			grid.forEach((x) => { x.visited = false; });
		} else {
			randomGrid = shuffelGrid(grid);
			blocksCounted = 0;
			grid.forEach((x) => { x.wall = false; });
		}
	}
}


module.exports = createRandomBlocks;
