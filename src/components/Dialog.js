import React, { useState } from 'react';

const Dialog = ({ isOpen, onNumberOfTeamsSubmit }) => {
  const [numberOfTeams, setNumberOfTeams] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onNumberOfTeamsSubmit(numberOfTeams);
  };

  return (
    <div style={overlayStyle}>
      <div style={dialogStyle}>
        <div style={headerStyle}>Welcome to the Game!</div>
        <div style={contentStyle}>
          <form onSubmit={handleSubmit}>
            <label style={labelStyle}>
              How many teams are playing?
              <input
                style={inputStyle}
                type="number"
                value={numberOfTeams}
                onChange={(e) => setNumberOfTeams(e.target.value)}
                min="1"
                required
              />
            </label>
            <button type="submit" onClick={handleSubmit} style={buttonStyle}>Start Game</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Styles
const overlayStyle = {
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
};

const dialogStyle = {
  backgroundColor: '#fff',
  borderRadius: '15px',
  padding: '20px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  position: 'relative',
};

const headerStyle = {
  marginBottom: '15px',
  fontSize: '24px',
  color: '#333',
};

const contentStyle = {
  marginBottom: '20px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '10px',
  color: '#333',
};

const inputStyle = {
  fontSize: '16px',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ddd',
  width: '100%',
};

const buttonStyle = {
  backgroundColor: '#ff4081',
  color: '#fff',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '18px',
};

export default Dialog;
