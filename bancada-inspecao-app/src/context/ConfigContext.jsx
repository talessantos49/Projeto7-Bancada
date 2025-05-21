///src/context/ConfigContext.jsx
import React, { createContext, useState } from 'react';

const DEFAULT_PART_CONFIG = {
  radii: [250, 180, 150, 120],
  rotationSpeed: 60,
  manualStartDelay: 3
};

const INITIAL_CONFIG = {
  '610': { ...DEFAULT_PART_CONFIG },
  '810': { ...DEFAULT_PART_CONFIG },
  '870': { ...DEFAULT_PART_CONFIG },
  '1000': { ...DEFAULT_PART_CONFIG }
};

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [configurations, setConfigurations] = useState(INITIAL_CONFIG);

  const updateConfiguration = (partId, newConfig) => {
    setConfigurations(prev => ({
      ...prev,
      [partId]: {
        ...prev[partId], 
        ...newConfig
      }
    }));
  };

  return (
    <ConfigContext.Provider value={{ configurations, updateConfiguration }}>
      {children}
    </ConfigContext.Provider>
  );
};
