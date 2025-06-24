import { Link } from 'react-router-dom';
import '../styles/orbital.css';
import { useState, useEffect, useContext } from 'react';
import ControlledConcentricCircles from '../components/ControlledConcentricCircles';
import SensorSimulator from '../utils/SensorSimulator';
import { ConfigContext } from '../context/ConfigContext';

export default function Orbital1000() {
  const [sensors, setSensors] = useState([false, false, false, false]);
  const [readings, setReadings] = useState(Array(360).fill(null));

  const allChecked = sensors.every(Boolean);
////////////////////////////
  const { configurations } = useContext(ConfigContext);
  const partConfig = configurations['1000'] || { radii: [250, 180, 150, 120] };
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
      <h2>Orbital 1000</h2>
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
                  <span className='sensor-label'>Sensor {idx+1}</span>
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