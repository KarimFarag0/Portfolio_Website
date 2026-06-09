import React from 'react';
import './ambient.css';

const bubbles = [
  { size: 18,  left: '8%',   delay: '0s',   duration: '18s' },
  { size: 32,  left: '15%',  delay: '3s',   duration: '22s' },
  { size: 12,  left: '25%',  delay: '7s',   duration: '16s' },
  { size: 50,  left: '35%',  delay: '1s',   duration: '26s' },
  { size: 22,  left: '45%',  delay: '9s',   duration: '20s' },
  { size: 14,  left: '55%',  delay: '4s',   duration: '17s' },
  { size: 40,  left: '65%',  delay: '12s',  duration: '24s' },
  { size: 28,  left: '72%',  delay: '6s',   duration: '21s' },
  { size: 16,  left: '80%',  delay: '2s',   duration: '19s' },
  { size: 60,  left: '88%',  delay: '10s',  duration: '28s' },
  { size: 20,  left: '93%',  delay: '15s',  duration: '18s' },
  { size: 36,  left: '50%',  delay: '18s',  duration: '23s' },
];

const AmbientBackground = () => {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="blob blob--1" />
      <div className="blob blob--2" />
      <div className="blob blob--3" />

      {bubbles.map((b, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            width: b.size + 'px',
            height: b.size + 'px',
            left: b.left,
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        />
      ))}
    </div>
  );
};

export default AmbientBackground;
