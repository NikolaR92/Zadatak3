/**
 * Module that implements BFS search algorithm
 * @author Nikola Ristić
 * @module src/breadthFirstSearch
 */

/** Function implements BFS search algorithm
 * @param {Array.<number>} start - Array with start coordinate [x,y]
 * @param {Array.<number>} end  - Array with end coordinate [x,y]
 * @param {Array.<Point>}	grid - Matrix with all the points
 * @param {number} widthOfGrid - Number of colons that grid have
 * @param {number} heightOfGrid - Number of rows that grid have
 * @return {Array.<Array.<number>>} Array of coordinates that are shortest path between start and end
 */
function breadthFirstSearch(start, end, grid, widthOfGrid, heightOfGrid) {
	const beginning = grid.find(point => ((point.x === start[0]) && (point.y === start[1])));
	let current = beginning;
	const finish = grid.find(point => ((point.x === end[0]) && (point.y === end[1])));

	const queue = [];
	/** array of all visited paths */
	const prev = [];

	/** standard breadthFirstSearch algorithm */
	queue.push(current);
	current.visited = true;

	while (queue.length !== 0) {
		current = queue.shift();

		if (current === finish) {
			break;
		} else {
			const neighbours = current.getNeighbors(grid, widthOfGrid, heightOfGrid);
			if (neighbours.length !== 0) {
				for (let i = 0; i < neighbours.length; i += 1) {
					if (!(neighbours[i].wall)) {
						queue.push(neighbours[i]);
						neighbours[i].visited = true;
						prev.push([neighbours[i], current]);
					}
				}
			}
		}
	}
	/** Check if we reached the end location */
	if (current !== finish) {
		return [];
	}

	/** Here we recreate the shortest path from end to start */
	const newAr = [];
	let i = finish;
	while (i !== null) {
		newAr.push(i.toArray());
		for (let j = 0; j < prev.length; j += 1) {
			if (prev[j][0] === i) {
				const [, tmp1] = prev[j];
				i = tmp1;
				break;
			}
		}
		if (i === beginning) {
			newAr.push(i.toArray());
			break;
		}
	}
	return newAr.reverse();
}

module.exports = breadthFirstSearch;
