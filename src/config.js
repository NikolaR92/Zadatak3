/**
 * Config Module
 * @module src/config
 */

/** Start coordinate for path search
 * @const
 * @type {number[]}
 */
const startCoordinate = [0, 0];
/** End coordinate for path search
 * @const
 * @type {number[]}
 */
const endCoordinate = [7, 5];
/** How many point are going to be blocked
 * @const
 * @type {number}
 */
const blocks = 20;
/** Width of area grid
 * @const
 * @type {number}
 */
const widthOfGrid = 10;
/** Height of area grid
 * @const
 * @type {number}
 */
const heightOfGrid = 10;

module.exports.startCoordinate = startCoordinate;
module.exports.endCoordinate = endCoordinate;
module.exports.blocks = blocks;
module.exports.widthOfGrid = widthOfGrid;
module.exports.heightOfGrid = heightOfGrid;
