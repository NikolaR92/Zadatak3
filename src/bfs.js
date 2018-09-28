// Function implements BFS search algorithm
// arguments: start - array with start coordinate [x,y]
//					 end  - array with end coordinate [x,y]
//					 grid - matrix with all the points
// return: array of Points - shortest path between start and end
function bfs(start, end, grid) {
	const begining = grid.find(point => ((point.x === start[0]) && (point.y === start[1])));
	let current = begining;
	const finishe = grid.find(point => ((point.x === end[0]) && (point.y === end[1])));

	const queue = [];
	// array of all visited paths
	const prev = [];

	// standard bfs algorithm
	queue.push(current);
	current.visited = true;

	while (queue.length !== 0) {
		current = queue.shift();

		if (current === finishe) {
			break;
		} else {
			const neighbours = current.getNeighbors(grid);

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

	// check if we reached the end location
	if (current !== finishe) {
		return [];
	}

	// here we recreate the shortest path from end to start
	const newAr = [];
	let i = finishe;
	while (i !== null) {
		newAr.push(i.toArray());
		for (let j = 0; j < prev.length; j += 1) {
			if (prev[j][0] === i) {
				[i] = prev;
				i = prev[j][1];
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
