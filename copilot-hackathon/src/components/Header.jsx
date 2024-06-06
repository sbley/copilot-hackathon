import React from 'react';
import packageInfo from '../../package.json'; // adjust the path according to your project structure

const Header = () => {
  const headerStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    backgroundColor: 'lightgrey',
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  return (
      <header style={headerStyle}>
        <h1>{packageInfo.name}</h1>
      </header>
  );
};

export default Header;
