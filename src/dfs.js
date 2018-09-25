function dfs(start,end,grid){

let current = grid.find((point)=> (point.x=start[0]) && (point.y=start[1]) );
let path=[];
current.visited=true;


while(path.length>0){
  let next = checkNeighbor(grid);
  if(next){
    next.visited=true;
    path.push(current)
    current.removeWall(checkNeighbor,grid);
    current=next;
  }else{

  }

}
}
