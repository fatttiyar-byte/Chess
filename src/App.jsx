import { useState } from 'react';
//مدیریت هوک ها در ری اکت
import { Canvas } from '@react-three/fiber';
//بوم رندر سه بعدی
import {
  OrbitControls,
  //کنترل دوربین  با ماوس  و لمس
  PerspectiveCamera,
  //دوربین پرسپکتیو
} from '@react-three/drei';
import { Chess } from 'chess.js';
//کتابخانه مناسب منطق بازی شطرنج

import cloneGame from './utils/cloneGame';
import ChessBoard from './components/ChessBoard';
import MainMenu from './components/MainMenu';
import ColorSelect from './components/ColorSelect';
import GameHUD from './components/GameHUD';
import GameOverOverlay from './components/GameOverOverlay';
import { styles } from './styles';

//کامپوننت اصلی
export default function App() {
  const [gameMode, setGameMode] = useState('modeSelect');
  const [playerColor, setPlayerColor] = useState(null);
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [status, setStatus] = useState('نوبت سفید');
  const [statusType, setStatusType] = useState('turn');
  const [legalMoves, setLegalMoves] = useState([]);
  const [hintMove, setHintMove] = useState(null);
  const [robotThinking, setRobotThinking] = useState(false);

  // تشخیص وضعیت واقعی بازی
  const updateStatus = (currentGame) => {
    if (currentGame.isCheckmate()) {
      const winner = currentGame.turn() === 'w' ? 'سیاه' : 'سفید';
      setStatus(`کیش‌مات! برنده: ${winner}`);
      setStatusType('win');
      return;
    }

    if (currentGame.isStalemate()) {
      setStatus('پات! بازی مساوی شد.');
      setStatusType('draw');
      return;
    }

    if (currentGame.isDraw()) {
      setStatus('بازی مساوی شد!');
      setStatusType('draw');
      return;
    }

    if (currentGame.isCheck()) {
      setStatus(
        `کیش! شاه ${currentGame.turn() === 'w' ? 'سفید' : 'سیاه'} در خطر است`
      );
      setStatusType('check');
      return;
    }

    setStatus(
      `نوبت ${currentGame.turn() === 'w' ? 'سفید' : 'سیاه'}`
    );
    setStatusType('turn');
  };

  //پاک کردن انتخاب ها
  const clearSelection = () => {
    setSelectedSquare(null);
    setLegalMoves([]);
    setHintMove(null);
  };

  // انتخاب یک حرکت برای کامپیوتر
  const makeRobotMove = (currentGame, humanColor) => {
    if (currentGame.isGameOver()) return currentGame;
    if (currentGame.turn() === humanColor) return currentGame;

    const moves = currentGame.moves({ verbose: true });
    //verbose==>اطلاعات کامل هر حرکت رو میده
    if (moves.length === 0) return currentGame;

    // اولویت با حرکت‌های کیش‌مات، کیش و گرفتن مهره است.
    const mates = moves.filter((move) => move.san.includes('#'));
    //san.includes==>کیش و مات در نماد جبری
    const checks = moves.filter((move) => move.san.includes('+'));
    const captures = moves.filter((move) => move.isCapture());
    //isCapture==>آیا مهره میگیرد؟

    let pool = moves;

    if (mates.length > 0) {
      pool = mates;
    } else if (checks.length > 0) {
      pool = checks;
    } else if (captures.length > 0) {
      pool = captures;
    }

    const chosenMove = pool[Math.floor(Math.random() * pool.length)];
    const copy = cloneGame(currentGame);

    copy.move({
      from: chosenMove.from,
      to: chosenMove.to,
      promotion: 'q',
      //ارتقای پیاده به وزیر
    });

    return copy;
  };

  // شروع بازی تک‌نفره
  const startGame = (color) => {
    const newGame = new Chess();

    setPlayerColor(color);
    setGameMode('single');
    setGame(newGame);
    clearSelection();
    setRobotThinking(false);
    updateStatus(newGame);

    // اگر بازیکن سیاه باشد، کامپیوتر با سفید شروع می‌کند.
    if (color === 'b') {
      const afterRobot = makeRobotMove(newGame, color);
      setGame(afterRobot);
      updateStatus(afterRobot);
    }
  };

  // شروع بازی دونفره
  const startTwoPlayer = () => {
    const newGame = new Chess();

    setPlayerColor(null);
    setGameMode('twoPlayer');
    setGame(newGame);
    clearSelection();
    setRobotThinking(false);
    updateStatus(newGame);
  };

  // کلیک روی خانه و انجام حرکت قانونی
  function onSquareClick(col, row) {
    if (game.isGameOver() || robotThinking) return;

    if (
      gameMode === 'single' &&
      game.turn() !== playerColor
    ) {
      return;
    }

    const square =
      String.fromCharCode(97 + col) + (8 - row);

    setHintMove(null);

    // اگر هنوز مهره‌ای انتخاب نشده، مهره انتخاب شود.
    if (!selectedSquare) {
      const piece = game.get(square);

      if (!piece) return;

      if (
        gameMode === 'single' &&
        piece.color !== playerColor
      ) {
        return;
      }

      setSelectedSquare({ x: col, z: row });
      setLegalMoves(game.moves({ square, verbose: true }));
      return;
    }

    const from =
      String.fromCharCode(97 + selectedSquare.x) +
      (8 - selectedSquare.z);

    // کلیک دوباره روی همان خانه، انتخاب را لغو می‌کند.
    if (from === square) {
      clearSelection();
      return;
    }

    // کلیک روی مهره خودی، آن مهره را انتخاب می‌کند.
    const targetPiece = game.get(square);

    if (
      targetPiece &&
      targetPiece.color === game.turn()
    ) {
      setSelectedSquare({ x: col, z: row });
      setLegalMoves(game.moves({ square, verbose: true }));
      return;
    }

    const gameCopy = cloneGame(game);

    try {
      gameCopy.move({
        from,
        to: square,
        promotion: 'q',
      });
    } catch {
      // حرکت غیرقانونی است؛ بازی بدون تغییر باقی می‌ماند.
      return;
    }

    clearSelection();
    setGame(gameCopy);
    updateStatus(gameCopy);

    // بعد از کیش‌مات یا مساوی، نوبت کامپیوتر اجرا نمی‌شود.
    if (gameCopy.isGameOver()) return;

    if (
      gameMode === 'single' &&
      gameCopy.turn() !== playerColor
    ) {
      setRobotThinking(true);

      const afterRobot = makeRobotMove(gameCopy, playerColor);

      setGame(afterRobot);
      updateStatus(afterRobot);
      setRobotThinking(false);
    }
  }

  // بازگشت به حرکت قبل؛ تاریخچه حفظ می‌شود.
  const handleUndo = () => {
    if (game.history().length === 0) return;

    const copy = cloneGame(game);

    if (gameMode === 'single') {
      // در حالت تک‌نفره، حرکت کامپیوتر و سپس حرکت انسان برگردانده می‌شوند.
      copy.undo();

      if (copy.history().length > 0) {
        copy.undo();
      }
    } else {
      copy.undo();
    }

    setGame(copy);
    clearSelection();
    setRobotThinking(false);
    updateStatus(copy);
  };

  // پیشنهاد یک حرکت قانونی
  const handleHint = () => {
    if (game.isGameOver() || robotThinking) return;

    if (
      gameMode === 'single' &&
      game.turn() !== playerColor
    ) {
      return;
    }

    const moves = game.moves({ verbose: true });
    if (moves.length === 0) return;

    const mates = moves.filter((move) => move.san.includes('#'));
    const checks = moves.filter((move) => move.san.includes('+'));
    const captures = moves.filter((move) => move.isCapture());

    let pool = moves;
    let reason = 'حرکت پیشنهادی';

    if (mates.length > 0) {
      pool = mates;
      reason = 'کیش‌مات';
    } else if (checks.length > 0) {
      pool = checks;
      reason = 'کیش';
    } else if (captures.length > 0) {
      pool = captures;
      reason = 'گرفتن مهره';
    }

    const suggestion = pool[Math.floor(Math.random() * pool.length)];

    setHintMove({
      from: suggestion.from,
      to: suggestion.to,
    });

    setStatus(
      `${reason}: ${suggestion.from} → ${suggestion.to}`
    );
    setStatusType('hint');
  };

  const isRobotTurn =
    gameMode === 'single' &&
    game.turn() !== playerColor &&
    !game.isGameOver();

  // منوی اصلی
  if (gameMode === 'modeSelect') {
    return (
      <MainMenu
        onSelectComputer={() => setGameMode('colorSelect')}
        onSelectTwoPlayer={startTwoPlayer}
      />
    );
  }

  // انتخاب رنگ برای بازی با کامپیوتر
  if (gameMode === 'colorSelect') {
    return (
      <ColorSelect
        onStart={startGame}
        onBack={() => setGameMode('modeSelect')}
      />
    );
  }

  const gameOver = game.isGameOver();
  const winner = game.turn() === 'w' ? 'سیاه' : 'سفید';

  return (
    <div style={styles.gameScreen}>
      <Canvas shadows>
        <PerspectiveCamera
          makeDefault
          position={[0, 9, 9]}
          fov={45}
        />
        <OrbitControls
          enablePan={false}
          minDistance={6}
          maxDistance={15}
          maxPolarAngle={Math.PI / 2.2}
        />
        <ambientLight intensity={0.65} />
        <directionalLight
          position={[5, 10, 5]}
          intensity={1.2}
          castShadow
        />
        <ChessBoard
          game={game}
          selectedSquare={selectedSquare}
          onSquareClick={onSquareClick}
          legalMoves={legalMoves}
          hintMove={hintMove}
        />
      </Canvas>

      {/* پنل شیشه‌ای وضعیت بازی */}
      <GameHUD
        game={game}
        gameMode={gameMode}
        playerColor={playerColor}
        status={status}
        statusType={statusType}
        isRobotTurn={isRobotTurn}
        gameOver={gameOver}
        winner={winner}
        robotThinking={robotThinking}
        onUndo={handleUndo}
        onHint={handleHint}
        onMenu={() => {
          setGameMode('modeSelect');
          clearSelection();
        }}
        onRestart={(mode) => {
          if (mode === 'single') {
            startGame(playerColor);
          } else {
            startTwoPlayer();
          }
        }}
      />

      {/* اعلان بزرگ پایان بازی */}
      {gameOver && (
        <GameOverOverlay
          game={game}
          winner={winner}
          onRestart={() => {
            if (gameMode === 'single') {
              startGame(playerColor);
            } else {
              startTwoPlayer();
            }
          }}
        />
      )}
    </div>
  );
}