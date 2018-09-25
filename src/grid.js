const Point= require('./Point.js');

function createGrid(row,coloms){
  let grid = [];
  for (let i=0;i<row;i+=1){
    for (let j=0;j<coloms;j+=1){
        let point = new Point(i,j);
        grid.push(point);
    }
  }

  return grid;
}
