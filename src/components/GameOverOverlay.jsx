import { styles } from '../styles';

function GameOverOverlay({ game, winner, onRestart }) {
  return (
    <div style={styles.gameOverOverlay}>
      <div style={styles.gameOverCard}>
        <div style={styles.gameOverIcon}>
          {game.isCheckmate() ? '🏆' : '🤝'}
        </div>
        <div style={styles.gameOverEyebrow}>
          GAME OVER
        </div>
        <h2 style={styles.gameOverTitle}>
          {game.isCheckmate() ? 'کیش‌مات!' : 'مساوی!'}
        </h2>
        <p style={styles.gameOverText}>
          {game.isCheckmate()
            ? `بازیکن ${winner} برنده شد.`
            : 'بازی طبق قوانین شطرنج مساوی شد.'}
        </p>
        <button
          style={styles.primaryButton}
          onClick={onRestart}
        >
          شروع بازی جدید
        </button>
      </div>
    </div>
  );
}

export default GameOverOverlay;