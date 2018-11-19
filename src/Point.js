/** Class representing a point on a grid */
class Point {
	/**
	 * Create a point
	 * @param  {number} x - The x value
	 * @param {number} y - The y value
	 */
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.visited = false;
		this.wall = false;
	}

	/** Method for making a array from x and y
	 * @return {Array.<number>} Array made of x and y
	 */
	toArray() {
		return [this.x, this.y];
	}

	/** Method checks if passed coordinates are valid and returns a index for that point
	 * @param x - x coordinate
	 * @param	y - y coordinate
	 * @param rows - number of rows that grid have
	 * @param colons - Number of colons that grid have
	 * @return {number} Index of a array based on coordinates
	 */
	static index(x, y, rows, colons) {
		if (x < 0 || y < 0 || x > (colons - 1) || y > (rows - 1)) {
			return -1;
		}
		return x + y * colons;
	}

	/** Method for getting neighbors that are not visited of this Points
	 * @param {Array.<Point>} grid - Array of Point objects
	 * @param {number} widthOfGrid - Number of colons that grid have
	 * @param {number} heightOfGrid -Number of rows that grid have
	 * @return {Array.<Point>} Array of Point object that are neighbors and not visited
	 */
	getNeighbors(grid, widthOfGrid, heightOfGrid) {
		const neighbors = [];

		const top = grid[Point.index(this.x, this.y - 1, heightOfGrid, widthOfGrid)];
		const right = grid[Point.index(this.x + 1, this.y, heightOfGrid, widthOfGrid)];
		const bottom = grid[Point.index(this.x, this.y + 1, heightOfGrid, widthOfGrid)];
		const left = grid[Point.index(this.x - 1, this.y, heightOfGrid, widthOfGrid)];

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

		return neighbors;
	}
}


module.exports = Point;
