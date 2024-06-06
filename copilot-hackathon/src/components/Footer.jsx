import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: 'lightgrey',
    padding: '10px',
    textAlign: 'center',
    fontSize: 'small',
  };

  return (
    <footer style={footerStyle}>
      <p>Made with ❤️ on a GitHub Copilot hackathon.</p>
    </footer>
  );
};

export default Footer;
