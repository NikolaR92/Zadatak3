const bfs = require('./breadthFirstSearch.js');
const createGrid = require('./grid.js');
const config = require('./config.js');
const createRandomBlocks = require('./createRandomBlocks.js');

function main() {
	try {
		const grid = createGrid(config.heightOfGrid, config.widthOfGrid);
		/** checking if valid data is in config file */
		if (!(Number.isInteger((config.startCoordinate)[0]) && Number.isInteger((config.startCoordinate)[1])
        && Number.isInteger((config.endCoordinate)[0]) && Number.isInteger((config.endCoordinate)[1])
        && Number.isInteger(config.blocks))) {
			throw new TypeError('Initial data inside a config file must be Integer type');
		}
		if ((config.startCoordinate)[0] < 0 && (config.startCoordinate)[1] < 0
        && (config.startCoordinate)[0] > 9 && (config.startCoordinate)[1] > 9) {
			throw new TypeError('Invalid start coordinate');
		}

		if ((config.endCoordinate)[0] < 0 && (config.endCoordinate)[1] < 0
        && (config.endCoordinate)[0] > 9 && (config.endCoordinate)[1] > 9) {
			throw new TypeError('Invalid end coordinate');
		}
		createRandomBlocks(config.startCoordinate, config.endCoordinate, grid, config.widthOfGrid, config.heightOfGrid, config.blocks);
		console.log(bfs(config.startCoordinate, config.endCoordinate, grid, config.widthOfGrid, config.heightOfGrid));
	} catch (error) {
		console.log(`${error}`);
	}
}

main();
