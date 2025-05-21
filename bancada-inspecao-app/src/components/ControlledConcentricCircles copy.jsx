// import React, { useState, useEffect, useRef } from 'react';

// export default function ControlledConcentricCircles({
//   initialRadii = [200, 160, 150, 140],
//   strokeWidth = 2,
//   tickLength = 10,
//   tickStrokeWidth = 1,
//   extraTickDistances = [],
//   filledRadius = 25,
//   fillColor = 'rgba(0, 0, 0, 0.1)',
//   lineStep = 1,         // graus por frame
//   frameInterval = 30,   // ms entre frames (~33ms = 30fps)
//   jitter = 10,           // ±1px variação
// }) {
//   const [pathPoints, setPathPoints] = useState([]);
//   const angleRef = useRef(0);
//   const pointsRef = useRef([]);
//   const animationRef = useRef(null);

//   // Calculate constants once
//   const radiiArr = initialRadii;
//   const maxRadius = Math.max(...radiiArr, filledRadius);
//   const size = maxRadius * 2 + strokeWidth * 2 + tickLength * 4;
//   const center = maxRadius + strokeWidth + tickLength * 2;
//   const tickPositions = [
//     ...radiiArr.flatMap(r => [-r, r]),
//     ...extraTickDistances.flatMap(d => [-d, d])
//   ];

//   useEffect(() => {
//     const baseR = radiiArr[2];
//     // Initial point at 0°
//     pointsRef.current = [{ x: center + baseR, y: center }];
//     setPathPoints([...pointsRef.current]);
//     angleRef.current = lineStep;

//     const draw = () => {
//       const angle = angleRef.current;
//       if (angle > 360) {
//         cancelAnimationFrame(animationRef.current);
//         return;
//       }
//       // jitter ±1px
//       const delta = (Math.random() * 2 - 1) * jitter;
//       const r = baseR + delta;
//       const theta = (angle * Math.PI) / 180;
//       const x = center + r * Math.cos(theta);
//       const y = center + r * Math.sin(theta);

//       pointsRef.current.push({ x, y });
//       setPathPoints([...pointsRef.current]);

//       angleRef.current += lineStep;
//       setTimeout(() => {
//         animationRef.current = requestAnimationFrame(draw);
//       }, frameInterval);
//     };

//     animationRef.current = requestAnimationFrame(draw);
//     return () => cancelAnimationFrame(animationRef.current);
//   }, []); // run once

//   return (
//     <div className="p-4">
//       <svg width={size} height={size}>
//         {/* axes */}
//         <line x1={0} y1={center} x2={size} y2={center} stroke="black" strokeWidth={strokeWidth} />
//         <line x1={center} y1={0} x2={center} y2={size} stroke="black" strokeWidth={strokeWidth} />

//         {/* ticks + labels */}
//         {tickPositions.map((offset, i) => (
//           <React.Fragment key={i}>
//             <line
//               x1={center + offset}
//               y1={center - tickLength / 2}
//               x2={center + offset}
//               y2={center + tickLength / 2}
//               stroke="black"
//               strokeWidth={tickStrokeWidth}
//             />
//             <text
//               x={center + offset}
//               y={center - tickLength}
//               textAnchor="middle"
//               fontSize="10"
//             >{Math.abs(offset)}</text>
//             <line
//               x1={center - tickLength / 2}
//               y1={center + offset}
//               x2={center + tickLength / 2}
//               y2={center + offset}
//               stroke="black"
//               strokeWidth={tickStrokeWidth}
//             />
//             <text
//               x={center + tickLength}
//               y={center + offset + 3}
//               textAnchor="start"
//               fontSize="10"
//             >{Math.abs(offset)}</text>
//           </React.Fragment>
//         ))}

//         {/* concentric circles */}
//         {radiiArr.map((r, idx) => (
//           <circle
//             key={idx}
//             cx={center}
//             cy={center}
//             r={r}
//             stroke="black"
//             strokeWidth={strokeWidth}
//             fill="none"
//             strokeDasharray={idx === 2 ? '6 4' : undefined}
//           />
//         ))}
//         <circle cx={center} cy={center} r={filledRadius} fill={fillColor} stroke="none" />

//         {/* progressive path */}
//         <polyline
//           points={pathPoints.map(p => `${p.x},${p.y}`).join(' ')}
//           fill="none"
//           stroke="blue"
//           strokeWidth={2}
//         />
//       </svg>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from 'react';

export default function ControlledConcentricCircles({
  initialRadii = [250,200,190,170],
  strokeWidth = 2,
  tickLength = 10,
  tickStrokeWidth = 1,
  extraTickDistances = [],
  filledRadius = 25,
  fillColor = 'rgba(0, 0, 0, 0.1)',
  lineStep = 0.5,
  frameInterval = 30,
  jitter = 5,
}) {
  const [layers, setLayers] = useState([
    { color: 'blue', points: [], angle: 0 },
    { color: 'red', points: [], angle: 0 },
    { color: 'green', points: [], angle: 0 }
  ]);
  const animationRef = useRef(null);

  const radiiArr = initialRadii;
  const maxRadius = Math.max(...radiiArr, filledRadius);
  const size = maxRadius * 2 + strokeWidth * 2 + tickLength * 4;
  const center = maxRadius + strokeWidth + tickLength * 2;
  const tickPositions = [
    ...radiiArr.flatMap(r => [-r, r]),
    ...extraTickDistances.flatMap(d => [-d, d])
  ];

  useEffect(() => {
    let currentLayer = 0;

    const resetLayer = (idx) => {
      const baseR = radiiArr[2];
      const start = { x: center + baseR, y: center };
      setLayers(prev => prev.map((l,i) => i===idx ? { ...l, points: [start], angle: lineStep } : l));
    };

    resetLayer(0);

    const draw = () => {
      setLayers(prev => {
        const newLayers = [...prev];
        const layer = { ...newLayers[currentLayer] };
        if (layer.angle > 360) {
          if (currentLayer < newLayers.length - 1) {
            currentLayer++;
            resetLayer(currentLayer);
            animationRef.current = requestAnimationFrame(draw);
          }
          return newLayers;
        }
        const baseR = radiiArr[2];
        const delta = (Math.random() * 2 - 1) * jitter;
        const r = baseR + delta;
        const theta = (layer.angle * Math.PI) / 180;
        const x = center + r * Math.cos(theta);
        const y = center + r * Math.sin(theta);
        layer.points = [...layer.points, { x, y }];
        layer.angle += lineStep;
        newLayers[currentLayer] = layer;
        return newLayers;
      });
      setTimeout(() => {
        animationRef.current = requestAnimationFrame(draw);
      }, frameInterval);
    };

    animationRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="p-4">
      <svg width={size} height={size}>
        <line x1={0} y1={center} x2={size} y2={center} stroke="black" strokeWidth={strokeWidth} />
        <line x1={center} y1={0} x2={center} y2={size} stroke="black" strokeWidth={strokeWidth} />

        {tickPositions.map((offset, i) => (
          <React.Fragment key={i}>
            <line x1={center + offset} y1={center - tickLength/2} x2={center + offset} y2={center + tickLength/2} stroke="black" strokeWidth={tickStrokeWidth} />
            <text x={center + offset} y={center - tickLength} textAnchor="middle" fontSize="10">{Math.abs(offset)}</text>
            <line x1={center - tickLength/2} y1={center + offset} x2={center + tickLength/2} y2={center + offset} stroke="black" strokeWidth={tickStrokeWidth} />
            <text x={center + tickLength} y={center + offset + 3} textAnchor="start" fontSize="10">{Math.abs(offset)}</text>
          </React.Fragment>
        ))}

        {radiiArr.map((r, idx) => (
          <circle key={idx} cx={center} cy={center} r={r} stroke="black" strokeWidth={strokeWidth} fill="none" strokeDasharray={idx===2?'6 4':undefined} />
        ))}
        <circle cx={center} cy={center} r={filledRadius} fill={fillColor} stroke="none" />

        {layers.map((layer, i) => (
          <polyline key={i} points={layer.points.map(p => `${p.x},${p.y}`).join(' ')} fill="none" stroke={layer.color} strokeWidth={2} />
        ))}
      </svg>
    </div>
  );
}
