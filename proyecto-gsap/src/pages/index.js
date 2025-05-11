// src/pages/index.js
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../styles/style.css'; // Importamos el CSS tradicional

export default function Home() {
  const [time, setTime] = useState('');
  const timeRef = useRef();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date(); //te da la fecha actual
      const hours = String(now.getHours()).padStart(2, '0'); //obtiene cada parte
      const minutes = String(now.getMinutes()).padStart(2, '0'); //asegura que siempre tenga 2 cifras '9' => '09'
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const currentTime = `${hours}: ${minutes}:${seconds}`;
      setTime(currentTime);

      //animacion al actualizar
      gsap.fromTo(
        timeRef.current,
        {scale: 0.9, opacity: 0.5},
        {scale: 1, opacity: 1, duration: 0.3}
      );
    };

    updateTime(); //primera ejecucion
    const interval = setInterval(updateTime, 1000); //se repite cada 1000ms(1seg)
    return () => clearInterval(interval);
  }, []); //dependencias

  return (
    <div className="container">
      <h1 ref={timeRef} className="{clock}">{time}</h1>
    </div>
  );
}
