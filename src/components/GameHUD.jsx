import { styles } from '../styles';

function GameHUD({
  game,
  gameMode,
  playerColor,
  status,
  statusType,
  isRobotTurn,
  gameOver,
  winner,
  robotThinking,
  onUndo,
  onHint,
  onMenu,
  onRestart,
}) {
  return (
    <aside style={styles.hud}>
      <div style={styles.hudHeader}>
        <span>♟ CHESS ARENA</span>
        <span style={styles.liveBadge}>
          <span style={styles.liveDot} />
          {gameOver ? 'FINISHED' : 'LIVE'}
        </span>
      </div>

      <div style={styles.turnCard}>
        <div style={styles.turnCaption}>نوبت حرکت</div>
        <div style={styles.turnName}>
          {gameOver
            ? 'بازی به پایان رسید'
            : game.turn() === 'w'
            ? '🤍 سفید'
            : '🖤 سیاه'}
        </div>
        {gameMode === 'single' && (
          <div style={styles.playerCaption}>
            شما: {playerColor === 'w' ? 'سفید' : 'سیاه'}
          </div>
        )}
        {gameMode === 'twoPlayer' && (
          <div style={styles.playerCaption}>
            حالت دو نفره
          </div>
        )}
      </div>

      {isRobotTurn && (
        <div style={styles.robotStatus}>
          😉نوبت کامپیوتر است...
        </div>
      )}

      <div
        style={{
          ...styles.statusBox,
          ...(statusType === 'check' ? styles.checkBox : {}),
          ...(statusType === 'win' ? styles.winBox : {}),
          ...(statusType === 'draw' ? styles.drawBox : {}),
          ...(statusType === 'hint' ? styles.hintBox : {}),
        }}
      >
        <span style={styles.statusIcon}>
          {statusType === 'win'
            ? '🏆'
            : statusType === 'draw'
            ? '🤝'
            : statusType === 'check'
            ? '⚠️'
            : statusType === 'hint'
            ? '💡'
            : '♟'}
        </span>
        <span>{status}</span>
      </div>

      {gameOver && (
        <div style={styles.resultCard}>
          <div style={styles.resultIcon}>
            {game.isCheckmate() ? '👑' : '🤝'}
          </div>
          <div style={styles.resultTitle}>
            {game.isCheckmate()
              ? 'کیش‌مات!'
              : 'بازی مساوی شد'}
          </div>
          <p style={styles.resultDescription}>
            {game.isCheckmate()
              ? `برنده: ${winner}`
              : 'هیچ بازیکنی برنده نشده است.'}
          </p>
          {gameMode === 'single' && (
            <button
              style={styles.restartButton}
              onClick={() => onRestart('single')}
            >
              ↻ بازی دوباره
            </button>
          )}
          {gameMode === 'twoPlayer' && (
            <button
              style={styles.restartButton}
              onClick={() => onRestart('twoPlayer')}
            >
              ↻ بازی دوباره
            </button>
          )}
        </div>
      )}

      <div style={styles.controls}>
        <button
          style={styles.smallButton}
          onClick={onUndo}
          disabled={game.history().length === 0 || gameOver}
        >
          ↩ بازگشت
        </button>
        <button
          style={styles.smallButton}
          onClick={onHint}
          disabled={gameOver || robotThinking}
        >
          💡 راهنمایی
        </button>
        <button
          style={styles.smallButton}
          onClick={onMenu}
        >
          ⌂ منو
        </button>
      </div>

      <div style={styles.footerNote}>
        حرکت‌های غیرقانونی پذیرفته نمی‌شوند.
      </div>
    </aside>
  );
}

export default GameHUD;