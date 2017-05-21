import React from 'react'

const Footer = () => {
  const styles = {
    position: 'absolute',
    bottom: '10px',
    textAlign: 'center',
    width: '100%',
    fontSize: '0.8rem',
    zIndex: '2'
  }

  return (
    <div style={styles}>
      <span>Developed by Fernando Poumián. Powered by React.</span>
    </div>
  )
}

export default Footer
