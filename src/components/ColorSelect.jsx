import { styles } from '../styles';

function ColorSelect({ onStart, onBack }) {
  return (
    <div style={styles.menuScreen}>
      <div style={styles.menuCard}>
        <div style={styles.logo}>♚</div>
        <h1 style={styles.menuTitle}>رنگ مهره‌ات را انتخاب کن</h1>
        <p style={styles.menuDescription}>
          اگر سیاه را انتخاب کنی، کامپیوتر با سفید شروع می‌کند.
        </p>

        <button
          style={styles.whiteButton}
          onClick={() => onStart('w')}
        >
          🤍 بازی با مهره‌های سفید
        </button>

        <button
          style={styles.blackButton}
          onClick={() => onStart('b')}
        >
          🖤 بازی با مهره‌های سیاه
        </button>

        <button
          style={styles.textButton}
          onClick={onBack}
        >
          ← بازگشت به منو
        </button>
      </div>
    </div>
  );
}

export default ColorSelect;