// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/configuration.css';
// // import { ConfigContext } from '../context/ConfigContext';

// const parts = [
//   { id: '610', name: 'Peça 610' },
//   { id: '810', name: 'Peça 810' },
//   { id: '870', name: 'Peça 870' },
//   { id: '1000', name: 'Peça 1000' }
// ];

// export default function ConfigurationsPage({ onSave }) {
//   const [selectedPart, setSelectedPart] = useState(parts[0].id);
//   const initialRadii = { r1: 250, r2: 180, r3: 150, r4: 120 };
//   const [config, setConfig] = useState(
//     parts.reduce((acc, p) => {
//       acc[p.id] = { ...initialRadii };
//       return acc;
//     }, {})
//   );

//   const handleRadiusChange = (partId, key, value) => {
//     const num = Math.min(250, Math.max(0, Number(value)));
//     setConfig(prev => ({
//       ...prev,
//       [partId]: { ...prev[partId], [key]: num }
//     }));
//   };

//   const saveConfig = () => {
//     if (onSave) onSave(config);
//     alert('Configurações salvas!');
//   };

//   const radii = config[selectedPart];

//   return (
//     <div className="orbital-container">
//       <h1>Configurações de Peças</h1>
//       <div className="config-content">
//         <div className="parts-list">
//           {parts.map(p => (
//             <button
//               key={p.id}
//               className={`part-button ${selectedPart === p.id ? 'active' : ''}`}
//               onClick={() => setSelectedPart(p.id)}
//             >
//               {p.name}
//             </button>
//           ))}
//         </div>

//         <div className="radii-form">
//           <h2>{parts.find(p => p.id === selectedPart).name}</h2>
//           <form>
//             {['r1','r2','r3','r4'].map((key, idx) => (
//               <div className="form-group" key={key}>
//                 <label>Raio {idx+1}:</label>
//                 <input
//                   type="number"
//                   value={radii[key]}
//                   min={0}
//                   max={250}
//                   onChange={e => handleRadiusChange(selectedPart, key, e.target.value)}
//                 />
//               </div>
//             ))}
//           </form>
//           <button className="btn-inspection" onClick={saveConfig}>
//             Salvar Configurações
//           </button>
//         </div>
//       </div>
//       <Link to="/">
//         <button className="btn-voltar">Voltar à Home</button>
//       </Link>
//     </div>
//   );
// }

// src/pages/ConfigurationsPage.jsx
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ConfigContext } from '../context/ConfigContext';
import '../styles/configuration.css';

const parts = [
  { id: '610', name: 'Peça 610' },
  { id: '810', name: 'Peça 810' },
  { id: '870', name: 'Peça 870' },
  { id: '1000', name: 'Peça 1000' },
];

// Adicione um objeto de mapeamento para os nomes dos raios
const RADIUS_NAMES = {
	0: 'Diâmetro Externo',
	1: 'Raio de Curvatura',
	2: 'Raio Interno',
	3: 'Raio de Acabamento'
	// Adicione mais mapeamentos conforme necessário
  };

const DEFAULT_SETTINGS = {
	radii: [0, 0, 0, 0],
	rotationSpeed: 100,
	manualReadDelay: 5
}

export default function ConfigurationsPage() {
  const { radiiConfig, updateRadii } = useContext(ConfigContext);
  const [selectedPart, setSelectedPart] = useState(parts[0].id);
  const [radii, setRadii] = useState(radiiConfig[selectedPart]);

  const handleRadiusChange = (index, value) => {
    const num = Math.min(250, Math.max(0, Number(value)));
    const newRadii = [...radii];
    newRadii[index] = num;
    setRadii(newRadii);
  };

  const saveConfig = () => {
    updateRadii(selectedPart, radii);
    alert('Configurações salvas!');
  };

  return (
    <div className="orbital-container">
      <h1>Configurações de Peças</h1>
      <div className="config-content">
        <div className="parts-list">
          {parts.map((p) => (
            <button
              key={p.id}
              className={`part-button ${selectedPart === p.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedPart(p.id);
                setRadii(radiiConfig[p.id]);
              }}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="radii-form">
          <h2>{parts.find((p) => p.id === selectedPart).name}</h2>
          <form>
            {radii.map((radius, idx) => (
              <div className="form-group" key={idx}>
                {/* <label>Raio {idx + 1}:</label> */}
				<label>{RADIUS_NAMES[idx] || `Raio ${idx + 1}`}:</label>
                <input
                  type="number"
                  value={radius}
                  min={0}
                  max={250}
                  onChange={(e) => handleRadiusChange(idx, e.target.value)}
                />
              </div>
            ))}
          </form>
          <button className="btn-inspection" onClick={saveConfig}>
            Salvar Configurações
          </button>
        </div>
      </div>
      <Link to="/">
        <button className="btn-voltar">Voltar à Home</button>
      </Link>
    </div>
  );
}
