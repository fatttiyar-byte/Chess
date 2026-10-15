export const styles = {
  gameScreen: {
    width: '100%',
    height: '100vh',
    minHeight: '500px',
    position: 'relative',
    overflow: 'hidden',
    background: 'radial-gradient(circle at 50% 35%, #273052 0%, #101426 65%, #090d19 100%)',
    fontFamily: "'Vazirmatn', Tahoma, Arial, sans-serif",
    color: '#f8fafc',
  },

  menuScreen: {
    minHeight: '100vh',
    width: '100%',
    boxSizing: 'border-box',
    padding: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    background: 'radial-gradient(circle at 50% 30%, #29234e 0%, #111326 55%, #080b15 100%)',
    fontFamily: "'Vazirmatn', Tahoma, Arial, sans-serif",
    color: '#fff',
  },

  menuGlow: {
    position: 'absolute',
    width: '360px',
    height: '360px',
    borderRadius: '50%',
    background: 'rgba(139, 92, 246, 0.16)',
    filter: 'blur(90px)',
    pointerEvents: 'none',
  },

  menuCard: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '440px',
    boxSizing: 'border-box',
    padding: '36px 28px',
    textAlign: 'center',
    borderRadius: '28px',
    border: '1px solid rgba(255,255,255,0.15)',
    background: 'rgba(255,255,255,0.065)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
  },

  logo: {
    width: '76px',
    height: '76px',
    margin: '0 auto 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '24px',
    fontSize: '2.7rem',
    color: '#ddd6fe',
    background: 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(99,102,241,0.15))',
    border: '1px solid rgba(196,181,253,0.3)',
  },

  eyebrow: {
    color: '#c4b5fd',
    fontSize: '0.72rem',
    letterSpacing: '3px',
    marginBottom: '14px',
    fontWeight: 'bold',
  },

  menuTitle: {
    margin: '0 0 14px',
    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
    fontWeight: 'bold',
    color: '#fff',
  },

  menuDescription: {
    margin: '0 0 28px',
    color: '#b8bfd5',
    fontSize: '0.9rem',
    lineHeight: 1.9,
  },

  primaryButton: {
    width: '100%',
    padding: '15px 18px',
    marginBottom: '12px',
    border: '1px solid rgba(196,181,253,0.3)',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    color: '#fff',
    fontSize: '0.95rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 8px 24px rgba(109,40,217,0.25)',
  },

  secondaryButton: {
    width: '100%',
    padding: '15px 18px',
    border: '1px solid rgba(255,255,255,0.17)',
    borderRadius: '14px',
    background: 'rgba(255,255,255,0.06)',
    color: '#f1f5f9',
    fontSize: '0.95rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },

  whiteButton: {
    width: '100%',
    padding: '15px',
    marginBottom: '12px',
    border: 'none',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #f8fafc, #dbe4f0)',
    color: '#17172b',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    cursor: 'pointer',
  },

  blackButton: {
    width: '100%',
    padding: '15px',
    marginBottom: '10px',
    border: '1px solid rgba(255,255,255,0.18)',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #303044, #171725)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    cursor: 'pointer',
  },

  textButton: {
    marginTop: '16px',
    padding: '10px',
    border: 'none',
    background: 'transparent',
    color: '#c4b5fd',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },

  hud: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: 'min(330px, calc(100vw - 40px))',
    maxHeight: 'calc(100vh - 40px)',
    overflowY: 'auto',
    boxSizing: 'border-box',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    border: '1px solid rgba(255,255,255,0.17)',
    borderRadius: '23px',
    background: 'rgba(13, 17, 35, 0.76)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    boxShadow: '0 18px 55px rgba(0,0,0,0.3)',
    color: '#fff',
    zIndex: 5,
  },

  hudHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    color: '#d8ccff',
    fontSize: '0.76rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },

  liveBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 9px',
    borderRadius: '20px',
    background: 'rgba(255,255,255,0.07)',
    color: '#cbd5e1',
    fontSize: '0.65rem',
    letterSpacing: '0.5px',
  },

  liveDot: {
    width: '7px',
    height: '7px',
    display: 'inline-block',
    borderRadius: '50%',
    background: '#4ade80',
    boxShadow: '0 0 10px rgba(74,222,128,0.7)',
  },

  turnCard: {
    padding: '16px',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.09)',
    background: 'rgba(255,255,255,0.045)',
  },

  turnCaption: {
    marginBottom: '9px',
    color: '#a8b0c9',
    fontSize: '0.78rem',
  },

  turnName: {
    color: '#fff',
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },

  playerCaption: {
    marginTop: '8px',
    color: '#c4b5fd',
    fontSize: '0.8rem',
  },

  robotStatus: {
    padding: '12px',
    borderRadius: '13px',
    border: '1px solid rgba(96,165,250,0.2)',
    background: 'rgba(96,165,250,0.1)',
    color: '#93c5fd',
    fontSize: '0.85rem',
    lineHeight: 1.8,
  },

  statusBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '11px',
    padding: '14px',
    borderRadius: '15px',
    border: '1px solid rgba(167,139,250,0.25)',
    background: 'rgba(139,92,246,0.12)',
    color: '#ddd6fe',
    fontSize: '0.87rem',
    lineHeight: 1.9,
  },

  statusIcon: {
    flexShrink: 0,
    fontSize: '1.3rem',
  },

  checkBox: {
    border: '1px solid rgba(251,191,36,0.4)',
    background: 'rgba(251,191,36,0.11)',
    color: '#fde68a',
  },

  winBox: {
    border: '1px solid rgba(74,222,128,0.4)',
    background: 'rgba(74,222,128,0.1)',
    color: '#bbf7d0',
  },

  drawBox: {
    border: '1px solid rgba(196,181,253,0.35)',
    background: 'rgba(196,181,253,0.1)',
    color: '#ddd6fe',
  },

  hintBox: {
    border: '1px solid rgba(56,189,248,0.35)',
    background: 'rgba(56,189,248,0.1)',
    color: '#bae6fd',
  },

  resultCard: {
    padding: '20px 15px',
    textAlign: 'center',
    borderRadius: '18px',
    border: '1px solid rgba(196,181,253,0.22)',
    background: 'rgba(139,92,246,0.09)',
  },

  resultIcon: {
    fontSize: '2.4rem',
    marginBottom: '8px',
  },

  resultTitle: {
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },

  resultDescription: {
    color: '#cbd5e1',
    fontSize: '0.85rem',
    lineHeight: 1.9,
  },

  restartButton: {
    width: '100%',
    padding: '13px',
    marginTop: '8px',
    border: 'none',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    cursor: 'pointer',
  },

  controls: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },

  smallButton: {
    flex: '1 1 75px',
    minWidth: 0,
    padding: '11px 7px',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '11px',
    background: 'rgba(255,255,255,0.07)',
    color: '#f1f5f9',
    fontSize: '0.78rem',
    cursor: 'pointer',
  },

  footerNote: {
    paddingTop: '10px',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    color: '#8993ad',
    fontSize: '0.7rem',
    textAlign: 'center',
    lineHeight: 1.8,
  },

  gameOverOverlay: {
    position: 'absolute',
    inset: 0,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: '20px',
    background: 'rgba(5,8,20,0.58)',
    backdropFilter: 'blur(7px)',
    WebkitBackdropFilter: 'blur(7px)',
  },

  gameOverCard: {
    width: '100%',
    maxWidth: '390px',
    boxSizing: 'border-box',
    padding: '32px 26px',
    textAlign: 'center',
    borderRadius: '26px',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'rgba(23,26,48,0.92)',
    boxShadow: '0 25px 80px rgba(0,0,0,0.4)',
  },

  gameOverIcon: {
    marginBottom: '14px',
    fontSize: '3rem',
  },

  gameOverEyebrow: {
    color: '#c4b5fd',
    fontSize: '0.7rem',
    letterSpacing: '4px',
    fontWeight: 'bold',
  },

  gameOverTitle: {
    margin: '12px 0',
    color: '#fff',
    fontSize: '1.8rem',
  },

  gameOverText: {
    marginBottom: '24px',
    color: '#cbd5e1',
    fontSize: '0.95rem',
    lineHeight: 1.9,
  },
};