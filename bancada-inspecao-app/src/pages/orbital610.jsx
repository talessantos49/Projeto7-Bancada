// import { Link } from 'react-router-dom';
// import '../styles/orbital.css';
// import {useState, useEffect } from "react";
// import ControlledConcentricCircles from '../components/ControlledConcentricCircles';
// import SensorSimulator from '../utils/SensorSimulator';


// export default function Orbital610() {
// 	const [sensors] = useState([false, false, false, false]);
// 	const [setReadings] = useState(Array(360).fill(null));

// 	const allChecked = sensors.every(Boolean);

// ///////////////////////////////////////////////////////////////////////////////////////
// useEffect(() => {
//     const simulator = new SensorSimulator(({ angulo, valor }) => {
//       setReadings(prev => {
//         const copy = [...prev];
//         copy[angulo] = valor;
//         return copy;
//       });
//     }, 100); // 100ms entre leituras
//     simulator.start();
//     return () => simulator.stop();
//   }, []);

// 	return (
// 		<div>
// 			<h1>Orbital 610</h1>
// 			<div id="orbital610" className="content-section">
// 				<div>
// 					<div>
// 						<h1>Círculos Concentricos Dinâmicos</h1>
// 						<ControlledConcentricCircles initialRadii={[200, 160, 150, 140]} strokeWidth={2} />
// 					</div>
// 				</div>
// 				<div className="sensor-group">
// 				{[1, 2, 3, 4].map((num) => (
// 					<div className="sensor-item" key={num}>
// 					<input type="checkbox" id={`sensor610-${num}`} />
// 					<label htmlFor={`sensor610-${num}`}>Sensor {num}</label>
// 					</div>
// 				))}
// 					<div>
// 						<p>Valor Atual: <span id="valor-atual">0</span></p>
// 						<p>Tensionamento Mínimo: <span id="minVermelho">0</span></p>
// 						<p>Tensionamento Máximo: <span id="maxVermelho">0</span></p>
// 						<p>Batimento: <span id="maxAzul">0</span></p>
// 						<p>CUP: <span id="minAzul">0</span></p>
// 						<p>Espessura da Flange: <span id="espessuraFlange">0</span></p>
// 						<p>Espessura do Ângulo: <span id="espessuraAngulo">0</span></p>
// 					</div>

// 					<div className="infos">
// 						<h1 className="content-tittle">Bancada de Inspeção</h1>
// 						<br />
// 						<p className="content-description">
// 							Seja bem-vindo à bancada de inspeção. Aqui você poderá realizar a inspeção de peças de forma rápida e eficiente.
// 						</p>
// 						<br />
// 						<p>Para começar, clique no botão abaixo.</p>
// 						<br />
// 						<button
// 							className="btn-inspection"
// 							id="btn-start-inspection1"
// 							disabled={!allChecked}
// 						>
// 							Iniciar inspeção
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 			<br />
// 			<Link to="/">
// 				<button className="btn-voltar">Voltar à Home</button>
// 			</Link>
// 		</div>
// 	);
// }

//   			{/* <!-- 				- Tensionamento minimo: Ponto mais proximo da medição do batimento 					--> */}
// 			{/* <!--					- Tensionamento Maximo: Ponto mais distante da medição do batimento --> */}
// 			{/* <!--					- Calculo do CUP: Angulo da peça Sendo concava ou convexa 			--> */}
// 			{/* <!--					- Definir lado A e lado B de acordo com a medição					--> */}
// 			{/* <!--					- Um dos lados sempre vai ser o refencial (Primeiro Lado) e o outro sempre vai ser o maximo ou o minimo(segundo lado). Se o movimento  --> */}
// 			{/* <!--					- Encontrar o minimo do primeiro lado conforme medição. --> */}
// 			{/* <!--					- Encontrar o maximo do segundo lado conforme medição. --> */}
// 			{/* <!--				- O Minimo encontrado sempre será o Lado A e o valor cup será a diferença entre o minimo de A e o minimo de B. --> */}


// import { Link } from 'react-router-dom';
// import '../styles/orbital.css';
// import { useState, useEffect } from 'react';
// import ControlledConcentricCircles from '../components/ControlledConcentricCircles';
// import SensorSimulator from '../utils/SensorSimulator';

// export default function Orbital610() {
//   const [sensors, setSensors] = useState([false, false, false, false]);
//   const [readings, setReadings] = useState(Array(360).fill(null));

//   const allChecked = sensors.every(Boolean);

//   // Simula dados dos sensores
//   useEffect(() => {
//     const simulator = new SensorSimulator(({ angulo, valor }) => {
//       setReadings(prev => {
//         const copy = [...prev];
//         copy[angulo] = valor;
//         return copy;
//       });
//     }, 100);
//     simulator.start();
//     return () => simulator.stop();
//   }, []);

//   // Handlers para checkboxes
//   const toggleSensor = idx => {
//     setSensors(prev => prev.map((v,i) => i===idx ? !v : v));
//   };

//   // Exemplo de valores derivados
//   const valorAtual = readings.filter(v=>v!=null).slice(-1)[0] ?? 0;
//   const minVermelho = Math.min(...readings.filter(v=>v!=null));
//   const maxVermelho = Math.max(...readings.filter(v=>v!=null));
//   const maxAzul = maxVermelho - minVermelho;
//   const minAzul = minVermelho;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Orbital 610</h1>
//       <div id="orbital610" className="flex gap-8">
//         {/* Gráfico à esquerda */}
//         <div className="flex-1">
//           <h2 className="text-xl mb-2">Círculos Concêntricos Dinâmicos</h2>
//           <ControlledConcentricCircles initialRadii={[200,160,150,140]} strokeWidth={2} />
//         </div>

//         {/* Painel de controles e valores à direita */}
//         <div className="w-1/3 flex flex-col">
//           <div className="mb-4">
//             <h3 className="text-lg font-semibold mb-2">Sensores</h3>
//             <div className="grid grid-cols-2 gap-2">
//               {sensors.map((checked, idx) => (
//                 <label key={idx} className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={checked}
//                     onChange={() => toggleSensor(idx)}
//                   />
//                   Sensor {idx+1}
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="mb-4 flex-1">
//             <h3 className="text-lg font-semibold mb-2">Valores</h3>
//             <table className="w-full table-auto border">
//               <tbody>
//                 <tr><td className="border px-2 py-1">Valor Atual</td><td className="border px-2 py-1">{valorAtual.toFixed(2)}</td></tr>
//                 <tr><td className="border px-2 py-1">Tensionamento Mínimo</td><td className="border px-2 py-1">{minVermelho.toFixed(2)}</td></tr>
//                 <tr><td className="border px-2 py-1">Tensionamento Máximo</td><td className="border px-2 py-1">{maxVermelho.toFixed(2)}</td></tr>
//                 <tr><td className="border px-2 py-1">Batimento</td><td className="border px-2 py-1">{maxAzul.toFixed(2)}</td></tr>
//                 <tr><td className="border px-2 py-1">CUP</td><td className="border px-2 py-1">{minAzul.toFixed(2)}</td></tr>
//                 <tr><td className="border px-2 py-1">Espessura da Flange</td><td className="border px-2 py-1">--</td></tr>
//                 <tr><td className="border px-2 py-1">Espessura do Ângulo</td><td className="border px-2 py-1">--</td></tr>
//               </tbody>
//             </table>
//           </div>

//           <button
//             className="btn-inspection bg-blue-600 text-white py-2 rounded disabled:opacity-50"
//             id="btn-start-inspection1"
//             disabled={!allChecked}
//           >
//             Iniciar inspeção
//           </button>
//         </div>
//       </div>
//       <div className="mt-6">
//         <Link to="/">
//           <button className="btn-voltar bg-gray-600 text-white py-2 px-4 rounded">
//             Voltar à Home
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

import { Link } from 'react-router-dom';
import '../styles/orbital.css';
import { useState, useEffect, useContext } from 'react';
import ControlledConcentricCircles from '../components/ControlledConcentricCircles';
import SensorSimulator from '../utils/SensorSimulator';
import { ConfigContext } from '../context/ConfigContext';

export default function Orbital610() {
  const [sensors, setSensors] = useState([false, false, false, false]);
  const [readings, setReadings] = useState(Array(360).fill(null));

  const allChecked = sensors.every(Boolean);
////////////////////////////
  const { configurations } = useContext(ConfigContext);
  const partConfig = configurations['610'] || { radii: [250, 180, 150, 120] };
  const radii = partConfig.radii;
////////////////////////////

  // Simula dados dos sensores
  useEffect(() => {
    const simulator = new SensorSimulator(({ angulo, valor }) => {
      setReadings(prev => {
        const copy = [...prev];
        copy[angulo] = valor;
        return copy;
      });
    }, 100);
    simulator.start();
    return () => simulator.stop();
  }, []);

  const toggleSensor = idx => {
    setSensors(prev => prev.map((v,i) => i===idx ? !v : v));
  };

  // Valores derivados
  const valorAtual = readings.filter(v=>v!=null).slice(-1)[0] ?? 0;
  const valid = readings.filter(v=>v!=null);
  const minVermelho = valid.length? Math.min(...valid):0;
  const maxVermelho = valid.length? Math.max(...valid):0;
  const maxAzul = maxVermelho - minVermelho;
  const minAzul = minVermelho;

  return (
    <div className="orbital-container">
      <h2>Orbital 610</h2>
      <div className="orbital-content">
        <div className="orbital-graph">
          {/* <ControlledConcentricCircles initialRadii={radii} strokeWidth={2} /> */}
          <ControlledConcentricCircles key={JSON.stringify(radii)}
          initialRadii={radii}
          strokeWidth={2} 
          />
        </div>
        <div className="orbital-panel">
          <section className="panel-section">
            <h3>Sensores</h3>
            <div className="sensors-grid">
              {sensors.map((checked, idx) => (
                <label key={idx} className="sensor-item">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleSensor(idx)}
                  />
                  Sensor {idx+1}
                </label>
              ))}
            </div>
          </section>

          <section className="panel-section">
            <h3>Valores</h3>
            <table className="values-table">
              <tbody>
                <tr><td>Valor Atual</td><td>{valorAtual.toFixed(2)}</td></tr>
                <tr><td>Tensionamento Mínimo</td><td>{minVermelho.toFixed(2)}</td></tr>
                <tr><td>Tensionamento Máximo</td><td>{maxVermelho.toFixed(2)}</td></tr>
                <tr><td>Batimento</td><td>{maxAzul.toFixed(2)}</td></tr>
                <tr><td>CUP</td><td>{minAzul.toFixed(2)}</td></tr>
                <tr><td>Espessura da Flange</td><td>--</td></tr>
                <tr><td>Espessura do Ângulo</td><td>--</td></tr>
              </tbody>
            </table>
          </section>

          <button
            className="btn-inspection"
            disabled={!allChecked}
          >Iniciar inspeção</button>
        </div>
      </div>
      <Link to="/">
        <button className="btn-voltar">Voltar à Home</button>
      </Link>
    </div>
  );
}