// src/pages/index.js
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../styles/style.css'; // Importamos el CSS tradicional
import Carousel from '../components/Carousel';
import Timeout from '../components/TimeOut';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Globo = dynamic(() => import('../components/Globo'), { ssr: false });


export default function Home() {
  const [showGlobe, setShowGlobe] = useState(false);

  return (
    <div style={{ height: '100vh' }}>
      {showGlobe ? (
        <Globo />
      ) : (
        <Timeout duration={10} onEnd={() => setShowGlobe(true)} />
      )}
    </div>
  );
}