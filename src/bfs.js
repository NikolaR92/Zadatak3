/**
 * Module that implements BFS search algorithm
 * @module src/bfs
 */

/** Function implements BFS search algorithm
 * @param {Array.<Integer>} start - Array with start coordinate [x,y]
 * @param {Array.<Integer>} end  - Array with end coordinate [x,y]
 * @param {Array.<Point>}	grid - Matrix with all the points
 * @param {Integer} widthOfGrid - Number of coloms that grid have
 * @param {Integer} heightOfGrid - Number of rows that grid have
 * @return {Array.<Array.<Integers>>} Array of cordinates that are shortest path between start and end
 */
function bfs(start, end, grid, widthOfGrid, heightOfGrid) {
	const begining = grid.find(point => ((point.x === start[0]) && (point.y === start[1])));
	let current = begining;
	const finishe = grid.find(point => ((point.x === end[0]) && (point.y === end[1])));

	const queue = [];
	/** array of all visited paths */
	const prev = [];

	/** standard bfs algorithm */
	queue.push(current);
	current.visited = true;

	while (queue.length !== 0) {
		current = queue.shift();

		if (current === finishe) {
			break;
		} else {
			const neighbours = current.getNeighbors(grid, widthOfGrid, heightOfGrid);
			if (neighbours) {
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
	if (current !== finishe) {
		return [];
	}

	/** Here we recreate the shortest path from end to start */
	const newAr = [];
	let i = finishe;
	while (i !== null) {
		newAr.push(i.toArray());
		for (let j = 0; j < prev.length; j += 1) {
			if (prev[j][0] === i) {
				const [, tmp1] = prev[j];
				i = tmp1;
				break;
			}
		}
		if (i === begining) {
			newAr.push(i.toArray());
			break;
		}
	}
	return newAr.reverse();
}

module.exports = bfs;
