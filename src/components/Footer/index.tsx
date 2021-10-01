import React from 'react'
import cityscape from './cityscape.png'

export default function Footer() {
  return (
    <footer className="container" style={{
      height: '50vmin',
      backgroundImage: `url(${cityscape})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat',
    }} />
  );
}
