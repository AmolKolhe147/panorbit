import React from 'react'

const BackgroundSvg = () => {
  return (
    
    <svg viewBox="0 0 500 200">
        <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="blue"></path>
        <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="blue" opacity="0.8"></path>
        <path d="M 0 60 C 200 150 250 0 500 90 L 500 0 L 0 0" fill="hsla(0, 100%, 70%, 0.3)" opacity="0.5"></path>
        </svg>
  )
}

export default BackgroundSvg