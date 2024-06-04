class ChessBoard {
  constructor() {
    this.squares = [];
    this.knightPaths = [];
    this.boardSize = 8;
  }

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

  // find possible knight moves from the square
  getKnightPaths (sqIndex) {
    let paths = [];
    const moveX = [-2, -1, 1, 2, 2, 1, -1, -2];
    const moveY = [-1, -2, -2, -1, 1, 2, 2, 1];
    for (let i = 0; i < 8; i++) {
      let temp = this.squares[sqIndex];
      temp = [temp[0]+moveX[i], temp[1]+moveY[i]];
      if (temp[0] >= 0 && temp[0] < this.boardSize && temp[1] >= 0 && temp[1] < this.boardSize)
        paths.push(temp);
    }
    return paths;
  }

  // utility print function
  info () {
    for (let i = 0; i < this.boardSize * this.boardSize; i++) {
      console.log(`Square ${i}: [${this.squares[i][0]}-${this.squares[i][1]}]` + `, possible moves: ` + this.knightPaths[i]);
    }
  }
}

const board = new ChessBoard();
board.initiate();
board.info();
