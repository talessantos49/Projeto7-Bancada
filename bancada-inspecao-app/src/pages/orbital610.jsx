//   			{/* <!-- 				- Tensionamento minimo: Ponto mais proximo da medição do batimento 					--> */}
// 			{/* <!--					- Tensionamento Maximo: Ponto mais distante da medição do batimento --> */}
// 			{/* <!--					- Calculo do CUP: Angulo da peça Sendo concava ou convexa 			--> */}
// 			{/* <!--					- Definir lado A e lado B de acordo com a medição					--> */}
// 			{/* <!--					- Um dos lados sempre vai ser o refencial (Primeiro Lado) e o outro sempre vai ser o maximo ou o minimo(segundo lado). Se o movimento  --> */}
// 			{/* <!--					- Encontrar o minimo do primeiro lado conforme medição. --> */}
// 			{/* <!--					- Encontrar o maximo do segundo lado conforme medição. --> */}
// 			{/* <!--				- O Minimo encontrado sempre será o Lado A e o valor cup será a diferença entre o minimo de A e o minimo de B. --> */}

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
            <div className="sensor-config">
              <div className="sensors-grid">
                <h3>Sensores</h3>
                {sensors.map((checked, idx) => (
                  <label key={idx} className="sensor-item">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleSensor(idx)}
                      />
                    <span className='sensor-label'>Sensor {idx+1}</span>
                  </label>
                ))}
              </div>
              <label className="toggle-container">
                <input type="checkbox" className="toggle-checkbox" />
                <div className="toggle-slider"></div>
                <div className="toggle-labels">
                  <span className="manual">Manual</span>
                  <span className="automatico">Automático</span>
                </div>
              </label>
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