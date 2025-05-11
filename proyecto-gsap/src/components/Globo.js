import { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import CardInfo from './CardInfo';

export default function Globo() {
  const globeRef = useRef();
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const globe = Globe()(globeRef.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .arcsData([
        {
          startLat: 41.3851, startLng: 2.1734,       // Barcelona
          endLat: -22.9068, endLng: -43.1729,        // Río de Janeiro
          color: ['#ffcc00'],
        }
      ])
      .arcStroke(0.5)
      .arcAltitude(0.2)
      .arcDashLength(0.4)
      .arcDashGap(2)
      .arcDashInitialGap(() => Math.random() * 5)
      .arcDashAnimateTime(4000)
      .labelsData([
        { lat: -22.9068, lng: -43.1729, text: 'Rio de Janeiro' },
        { lat: 41.3851, lng: 2.1734, text: 'Barcelona' }
      ])
      .labelText('text')
      .labelColor(() => '#ffffff')
      .labelSize(2.2)
      .onLabelClick((label) => {
        if (label.text === 'Rio de Janeiro') {
          setShowCard(true);
        }
      });

    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.5;
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div ref={globeRef} style={{ width: '100%', height: '100%' }} />
      {showCard && <CardInfo onClose={() => setShowCard(false)} />}
    </div>
  );
}
