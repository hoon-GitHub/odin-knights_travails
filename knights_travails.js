class KnightGraph {
  constructor() {
    this.squares = [];
    this.knightPaths = [];
    this.boardSize = 8;
  }

  /**
   * function that initiates/generates the graph representation of 
   * chess knight moves
   */
  initiate () {
    // create 64 squares (verticies)
    for (let i = 0; i < this.boardSize; i++) {
      let square = [];
      for (let j = 0; j < this.boardSize; j++) {
        square = [i, j];
        this.squares.push(square);
      }
    }
    // and list of possible moves from each square (adjacency list)
    for (let i = 0; i < this.squares.length; i++) {
      this.knightPaths.push(this.getKnightPaths(i));
    }
  }

  // utility: find possible knight moves from the square
  getKnightPaths (sqIndex) {
    let paths = [];
    const moveX = [-2, -1, 1, 2, 2, 1, -1, -2];
    const moveY = [-1, -2, -2, -1, 1, 2, 2, 1];
    for (let i = 0; i < 8; i++) {
      let temp = this.squares[sqIndex];
      temp = [temp[0] + moveX[i], temp[1] + moveY[i]];
      if (temp[0] >= 0 && temp[0] < this.boardSize && temp[1] >= 0 && temp[1] < this.boardSize)
        paths.push(this.xyToIndex(temp[0], temp[1]));
    }
    return paths;
  }

  /** 
   * the main assignment: a function that shows the shortest possible way  
   * to get from one square to another by outputting all squares 
   * the knight will stop on along the way
   */
  moves (from, to) {
    const fromIndex = this.xyToIndex(from[0], from[1]);
    const toIndex = this.xyToIndex(to[0], to[1]);
    console.log(`Moving knight from square ${fromIndex} to ${toIndex}...`);
    const moves = this.knightPaths[fromIndex];
    console.log(moves);
    let queue = moves;
    console.log(queue);
    let nextMoves = this.knightPaths[queue.shift()];
    console.log(nextMoves);
    console.log(queue);
  }

  // utility: convert coordinate to index
  xyToIndex (x, y) {
    let index = null;
    for (let i = 0; i < this.squares.length; i++) {
      if (this.squares[i][0] === x && this.squares[i][1] === y) {
        index = i;
      }
    }
    return index;
  }

  // utility: print entire graph
  info () {
    for (let i = 0; i < this.boardSize * this.boardSize; i++) {
      console.log(`Square ${i}: [${this.squares[i][0]}-${this.squares[i][1]}]` + `, Possible moves: ` + this.knightPaths[i]);
    }
  }
}

const knight = new KnightGraph();
knight.initiate();
knight.info();
knight.moves([1,0], [1,1]);
