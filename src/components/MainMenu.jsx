import { styles } from '../styles';

function MainMenu({ onSelectComputer, onSelectTwoPlayer }) {
  return (
    <div style={styles.menuScreen}>
      <div style={styles.menuGlow} />
      <div style={styles.menuCard}>
        <div style={styles.logo}>♟</div>
        <div style={styles.eyebrow}>3D CHESS EXPERIENCE</div>
        <h1 style={styles.menuTitle}>شطرنج سه‌بعدی</h1>
        <p style={styles.menuDescription}>
          استراتژی، تمرکز و یک حرکت تا پیروزی
        </p>

        <button
          style={styles.primaryButton}
          onClick={onSelectComputer}
        >
          بازی با کامپیوتر
        </button>

        <button
          style={styles.secondaryButton}
          onClick={onSelectTwoPlayer}
        >
          بازی دونفره
        </button>
      </div>
    </div>
  );
}

export default MainMenu;