/** Class representing a point on a grid */
class Point {
	/**
	 * Create a point
	 * @param  {Integer} x - The x value
	 * @param {Integer} y - The y value
	 */
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.visited = false;
		this.wall = false;
	}

	/** Method for making a array from x and y
	 * @return {Array.<Integer>} Array made of x and y
	 */
	toArray() {
		return [this.x, this.y];
	}

	/** Method checks if passed coordinates are valid and returns a index for that point
	 * @param x - x coordinate
	 * @param	y - y coordinate
	 * @param rows - number of rows that grid have
	 * @param coloms - Number of coloms that grid have
	 * @return {Integer} Index of a array based on coordinates
	 */
	index(x, y, rows, coloms) {
		if (x < 0 || y < 0 || x > (coloms - 1) || y > (rows - 1)) {
			return -1;
		}
		return x + y * coloms;
	}

	/** Methd for geting neighbors that are not visited of this Points
	 * @param {Array.<Point>} grid - Array of Point objects
	 * @param {Integer} widthOfGrid - Number of colom that grid have
	 * @param {Integer} heightOfGrid -Number of rows that grid have
	 * @return {Array.<Poin>} Array of Point object that are neighbors and not visited
	 */
	getNeighbors(grid, widthOfGrid, heightOfGrid) {
		const neighbors = [];

		const top = grid[this.index(this.x, this.y - 1, heightOfGrid, widthOfGrid)];
		const right = grid[this.index(this.x + 1, this.y, heightOfGrid, widthOfGrid)];
		const bottom = grid[this.index(this.x, this.y + 1, heightOfGrid, widthOfGrid)];
		const left = grid[this.index(this.x - 1, this.y, heightOfGrid, widthOfGrid)];

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
}


module.exports = Point;
