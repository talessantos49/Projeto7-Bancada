import { Link } from 'react-router-dom';
import '../styles/orbital.css';
import { useRef, useState, useEffect } from "react";
import RadarChart from '../components/RadarChart';
import BotaoInspecao from '../components/BotaoInspecao';
import SensorCheckboxGroup from '../components/SensorCheckboxGroup';
import { blueData, redData } from '../data/sensorData';
import GraficoCircular from '../components/GraficoCircular';
import GraficoProgressivo from '../components/GraficoProgressivo';
import GraficoProgressivoRadar from '../components/GraficoProgressivoRadar';
import ControlledConcentricCircles from '../components/ControlledConcentricCircles';
import SensorSimulator from '../utils/SensorSimulator';
import RealTimePolarChart from '../components/RealTimePolarChart';


export default function Orbital610() {
	const [sensors, setSensors] = useState([false, false, false, false]);
	const [sensorData, setSensorData] = useState([]); // começa vazio
	const [sensorReadings, setSensorReadings] = useState([]);
	const [readings, setReadings] = useState(Array(360).fill(null));

	// Verifica se todos os sensores estão marcados
	const allChecked = sensors.every(Boolean);

	const toggleSensor = (index) => {
		const newSensors = [...sensors];
		newSensors[index] = !newSensors[index];
		setSensors(newSensors);
	};

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 	  const novosDados = Array.from({ length: 360 }, () =>
	// 		Math.floor(Math.random() * 100)
	// 	  );
	// 	  setSensors(novosDados);
	// 	//   setDadosSensores(novosDados);
	// 	//   toggleSensor(novosDados);
	// 	}, 1000);
	// 	return () => clearInterval(interval);
	//   }, []);
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 	  setSensorData((prevData) => {
	// 		if (prevData.length >= 360) return prevData; // para em 360
	// 		const newPoint = Math.floor(Math.random() * 100); // valor aleatório
	// 		return [...prevData, newPoint];
	// 	  });
	// 	}, 50); // 50ms entre cada ponto
	  
	// 	return () => clearInterval(interval);
	//   }, []);
	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 	  const novosDados = Array.from({ length: 360 }, () =>
	// 		Math.floor(Math.random() * 100)
	// 	  );
	// 	  setSensorReadings(novosDados);
	// 	}, 1000);
	// 	return () => clearInterval(interval);
	// }, []);
///////////////////////////////////////////////////////////////////////////////////////
useEffect(() => {
    const simulator = new SensorSimulator(({ angulo, valor }) => {
      setReadings(prev => {
        const copy = [...prev];
        copy[angulo] = valor;
        return copy;
      });
    }, 100); // 100ms entre leituras
    simulator.start();
    return () => simulator.stop();
  }, []);

	return (
		<div>
			<h1>Orbital 610</h1>
			<div id="orbital610" className="content-section">
				{/* <div className="chart-container-circle"> */}
					{/* <GraficoCircular dados={sensorData}/> */}
					{/* <GraficoProgressivo /> */}
					{/* <GraficoProgressivoRadar /> */}
					{/* <canvas id="chart610"></canvas> */}
				{/* </div> */}
				<div>
					<div>
						<RealTimePolarChart readings={readings}/>
					</div>
					<div>
						<h1>Círculos Concentricos Dinâmicos</h1>
						<ControlledConcentricCircles initialRadii={[200, 160, 150, 140]} strokeWidth={2} />
					</div>
					{/* <div>
						<h1>Exemplo de Réguas e Círculos</h1>
						<ControlledConcentricCircles initialRadii={[120, 80, 40]} />
					</div> */}
				</div>
				<div className="sensor-group">
				{[1, 2, 3, 4].map((num) => (
					<div className="sensor-item" key={num}>
					<input type="checkbox" id={`sensor610-${num}`} />
					<label htmlFor={`sensor610-${num}`}>Sensor {num}</label>
					</div>
				))}
					{/* {sensors.map((checked, index) => (
						<div key={index} className="sensor-item">
							<input
								type="checkbox"
								id={`sensor610-${index + 1}`}
								checked={checked}
								onChange={() => toggleSensor(index)}
							/>
							<label htmlFor={`sensor610-${index + 1}`}>Sensor {index + 1}</label>
						</div>
					))} */}
					<div>
						<p>Valor Atual: <span id="valor-atual">0</span></p>
						<p>Tensionamento Mínimo: <span id="minVermelho">0</span></p>
						<p>Tensionamento Máximo: <span id="maxVermelho">0</span></p>
						<p>Batimento: <span id="maxAzul">0</span></p>
						<p>CUP: <span id="minAzul">0</span></p>
						<p>Espessura da Flange: <span id="espessuraFlange">0</span></p>
						<p>Espessura do Ângulo: <span id="espessuraAngulo">0</span></p>
					</div>

					<div className="infos">
						<h1 className="content-tittle">Bancada de Inspeção</h1>
						<br />
						<p className="content-description">
							Seja bem-vindo à bancada de inspeção. Aqui você poderá realizar a inspeção de peças de forma rápida e eficiente.
						</p>
						<br />
						<p>Para começar, clique no botão abaixo.</p>
						<br />
						<button
							className="btn-inspection"
							id="btn-start-inspection1"
							disabled={!allChecked}
						>
							Iniciar inspeção
						</button>
					</div>
				</div>
			</div>
			<br />
			<Link to="/">
				<button className="btn-voltar">Voltar à Home</button>
			</Link>
		</div>
	);
}

  			{/* <!-- 				- Tensionamento minimo: Ponto mais proximo da medição do batimento 					--> */}
			{/* <!--					- Tensionamento Maximo: Ponto mais distante da medição do batimento --> */}
			{/* <!--					- Calculo do CUP: Angulo da peça Sendo concava ou convexa 			--> */}
			{/* <!--					- Definir lado A e lado B de acordo com a medição					--> */}
			{/* <!--					- Um dos lados sempre vai ser o refencial (Primeiro Lado) e o outro sempre vai ser o maximo ou o minimo(segundo lado). Se o movimento  --> */}
			{/* <!--					- Encontrar o minimo do primeiro lado conforme medição. --> */}
			{/* <!--					- Encontrar o maximo do segundo lado conforme medição. --> */}
			{/* <!--				- O Minimo encontrado sempre será o Lado A e o valor cup será a diferença entre o minimo de A e o minimo de B. --> */}
