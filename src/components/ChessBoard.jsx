import Square from './Square';
import Piece from './Piece';

function ChessBoard({
  // برد سه‌بعدی
  game,
  selectedSquare,
  onSquareClick,
  legalMoves,
  hintMove,
}) {
  const squares = [];
  const pieces = [];
  const board = game.board();

  const checkedKing = game.isCheck()
    ? game.board().flat().find(
        (piece) => piece?.type === 'k' && piece.color === game.turn()
      )
    : null;

  let checkedSquare = null;

  if (checkedKing) {
    //چک کردن شاه در کیش
    board.forEach((row, rowIndex) => {
      row.forEach((piece, colIndex) => {
        if (
          piece?.type === 'k' &&
          piece.color === game.turn()
        ) {
          checkedSquare = { row: rowIndex, col: colIndex };
          //مختصات دقیق شاه
        }
      });
    });
  }
  //حلقه ساخت خانه ها
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const squareName =
        String.fromCharCode(97 + col) + (8 - row);
      //محاسبه وضعیت ها
      const isSelected =
        selectedSquare?.x === col &&
        selectedSquare?.z === row;

      const isLegalTarget = legalMoves.some(
        (move) => move.to === squareName
      );

      const isHint =
        hintMove?.from === squareName ||
        hintMove?.to === squareName;

      const isCheck =
        checkedSquare?.row === row &&
        checkedSquare?.col === col;

      squares.push(
        <Square
          key={`sq-${row}-${col}`}
          position={[col - 3.5, 0, row - 3.5]}
          //موقعیت سه بعدی
          isLight={(row + col) % 2 === 0}
          isSelected={isSelected}
          isHint={isHint}
          isCheck={isCheck}
          isLegalTarget={isLegalTarget}
          onClick={() => onSquareClick(col, row)}
        />
      );

      //رندر مهره ها
      const piece = board[row][col];

      if (piece) {
        pieces.push(
          <Piece
            key={`piece-${row}-${col}`}
            type={piece.type}
            color={piece.color}
            position={[col - 3.5, 0.1, row - 3.5]}
            isSelected={isSelected}
            onClick={() => onSquareClick(col, row)}
          />
        );
      }
    }
  }

  return <group>{squares}{pieces}</group>;
}

export default ChessBoard;