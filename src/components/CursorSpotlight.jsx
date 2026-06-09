import React, { useEffect, useRef } from 'react';

const CursorSpotlight = () => {
  const spotRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!spotRef.current) return;
      spotRef.current.style.left = e.clientX + 'px';
      spotRef.current.style.top = e.clientY + 'px';
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={spotRef}
      className="cursor-spotlight"
      aria-hidden="true"
    />
  );
};

export default CursorSpotlight;
