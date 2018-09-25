const Point = require('./Point.js');
const bfs = require('./bfs.js');

let p1 = new Point(1,2);
let p2 = new Point(3,4);
let p3 = new Point(1,3);
let p4 = new Point(1,1);
let p5 = new Point(2,2);

p1.addNeighbour(p2);
p1.addNeighbour(p4);
p2.addNeighbour(p1);
p2.addNeighbour(p3);
p2.addNeighbour(p5);
p3.addNeighbour(p2);
p3.addNeighbour(p4);
p3.addNeighbour(p5);
p4.addNeighbour(p5);
p5.addNeighbour(p2);

console.log(bfs(p1,p5));
