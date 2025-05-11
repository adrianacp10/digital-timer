// components/Timeout.js
import { useEffect, useState } from 'react';

export default function Timeout({ duration, onEnd }) {
  const [timeLeft, setTimeLeft] = useState(duration); // en segundos

  useEffect(() => {
    if (timeLeft <= 0) {
      onEnd(); // Llama a la función cuando se termina la cuenta atrás
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onEnd]);

  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  return (
    <h1 style={{height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', }}>
      {formatTime(timeLeft)}
    </h1>
  );
}
