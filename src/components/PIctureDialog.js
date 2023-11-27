import React from 'react';

const PictureDialog = ({ isOpen, onClose, cards }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.dialog}>
        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <img src={cards[0].image} alt="Card" style={styles.image} />
          </div>
          <div style={styles.card}>
            <div style={styles.textCardContent}>{cards[0].displayName}</div>
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <button onClick={(e) => onClose(e, true)} style={styles.claimButton}>Claim Point</button>
          <button onClick={(e) => onClose(e, false)} style={styles.closeButton}>&times;</button>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  dialog: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px', // Same fixed width for both cards
    height: '200px', // Same fixed height for both cards
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Prevents image overflow
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // Ensures the image ratio is maintained and the image is fully contained within the card
  },
  textCardContent: {
    textAlign: 'center',
    fontSize: "48px", /* Large font size for visibility */
    fontWeight: "bold", /* Bold font for emphasis */
    fontFamily: "'Arial', sans-serif", /* Modern, readable font */
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  claimButton: {
    padding: '10px 20px',
    cursor: 'pointer',
    border: '2px solid #007bff', // Outlined style
    borderRadius: '5px',
    background: 'none',
    fontSize: '16px',
    color: '#007bff',
  },
  closeButton: {
    padding: '10px 20px',
    cursor: 'pointer',
    border: '2px solid #dc3545', // Outlined style
    borderRadius: '5px',
    background: 'none',
    fontSize: '16px',
    color: '#dc3545',
  },
};

export default PictureDialog;
