const Point = require('./Point.js');

function bfs(start,end){
  let current = start;
  let queue = [];
  let prev = [];
  queue.push(current);
  current.visited=true;

  while(queue.length!=0){
    current = queue.shift();

    if(current === end ){
      break;
    }else{
      neighbours=current.neighbours;
      neighbours.forEach(x=>{
          if(!x.visited){
            queue.push(x);
            x.visited=true;
            prev.push([x,current]);
          }

      })
    }
  }
  if( current !== end){
    return [];
  }

  let newAr=[];
  let i = end;
  while(i!==null){
    newAr.push(i.toArray());
    for (let j=0;j<prev.length;j+=1){

      if(prev[j][0]===i){

        i=prev[j][1];
        break;
      }
    }
    if(i===start){
      newAr.push(i.toArray());
      break;
    }
  }
  return newAr.reverse();
}

module.exports = bfs;
