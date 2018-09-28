class Point {
	constructor(x, y) {
		this._x = x;
		this._y = y;
		this._visited = false;
		this._wall = false;
	}

	// Method for making a array from x and y
	// return: array made of x and y
	toArray() {
		return [this.x, this.y];
	}

	// Method checks if passed coordinates are valid and returns a index for that point
	// arguments: x - x coordinate
	//						y - y coordinate
	// return: index of a array based on coordinates
	index(x, y) {
		if (x < 0 || y < 0 || x > 9 || y > 9) {
			return -1;
		}
		return x + y * 10;
	}

	// Methd for geting neighbors that are not visited of this Points
	// arguments: grid - array of Point objects
	// return: array of Point object that are neighbors and not visited
	getNeighbors(grid) {
		const neighbors = [];

		const top = grid[this.index(this.x, this.y - 1)];
		const right = grid[this.index(this.x + 1, this.y)];
		const bottom = grid[this.index(this.x, this.y + 1)];
		const left = grid[this.index(this.x - 1, this.y)];

		if (top && !(top.visited)) {
			neighbors.push(top);
		}
		if (right && !(right.visited)) {
			neighbors.push(right);
		}
		if (bottom && !(bottom.visited)) {
			neighbors.push(bottom);
		}
		if (left && !(left.visited)) {
			neighbors.push(left);
		}

		if (neighbors.length > 0) {
			return neighbors;
		}
		return undefined;
	}


	get x() { return this._x; }

	set x(value) { this._x = value; }

	get y() { return this._y; }

	set y(value) { this._y = value; }

	get visited() { return this._visited; }

	set visited(value) { this._visited = value; }

	get wall() { return this._wall; }

	set wall(value) { this._wall = value; }
}


module.exports = Point;
