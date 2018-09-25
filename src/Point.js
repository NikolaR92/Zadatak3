class Point{
  constructor(x,y){
    this._x=x;
    this._y=y;
    this._visited=false;
  }

  toString(){
    return `[${this.x},${this.y}]`;
  }

  toArray(){
    return [this.x,this.y];
  }

  //TODO prepraviti funkciju da umesto 10 bude cols and rows
  index(x,y){
    if(x<0 || y<0 || x> 10-1 || y>9){
      return -1;
    }
    return x+y*10;
  }


  checkNeighbor(grid){
    let neighbors=[];

    let top = grid[index(this.x,this.y -2)];
    let right = grid[index(this.x +2 ,this.y)];
    let bottom = grid[index(this.x ,this.y +2)];
    let left = grid[index(this.x - 2 ,this.y)];

    if(top && !top.visited){
      neighbors.push(top);
    }
    if(right && !top.visited){
      neighbors.push(right);
    }
    if(bottom && !top.visited){
      neighbors.push(bottom);
    }
    if(left && !top.visited){
      neighbors.push(left);
    }

    if(neighbors.length>0){
      let rand =  Math.floor(Math.random() * (neighbors.length));
      return neighbors[rand];
    }else{
      return undefined;
    }

  }


  get x() { return this._x}
  set x(value) { this._x=value }
  get y() { return this._y }
  set y(value) {this._y=value}
  get visited() {return this._visited;}
  set visited(value) { this._visited=value;}

}


module.exports = Point;
