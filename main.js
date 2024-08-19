const input = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];

const output = [
  [1, 9, 2, 1],
  [2, 3, 9, 2],
  [3, 9, 4, 9],
  [9, 9, 3, 1],
]

function minesweeper(board) {
  const rows = board.length;
  const cols = board[0].length;
  
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],         [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];
  
  const result = board.map(row => row.slice());

  for (let r = 0; r < rows; r++) 
  {
      for (let c = 0; c < cols; c++) 
      {
          if (board[r][c] === 1) 
          {
            result[r][c] = 9; 
          } 
          else
          {
            let mineCount = 0;
            directions.forEach(([dr, dc]) => 
          {
              const newRow = r + dr;
              const newCol = c + dc;
              
              if (
                newRow >= 0 && newRow < rows &&
                newCol >= 0 && newCol < cols &&
                board[newRow][newCol] === 1
              )
              {
                mineCount++;
              }
            } );
            
            result[r][c] = mineCount; 
          }
      }
  } 
  return result;
}
console.log(minesweeper(input));
