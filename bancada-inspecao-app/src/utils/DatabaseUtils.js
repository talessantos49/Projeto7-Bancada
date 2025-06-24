import db from '../db';

// Função para salvar uma leitura
export const saveReading = async (sensor, angle, value) => {
  await db.readings.add({
    sensor,
    angle,
    value,
    timestamp: new Date().toISOString(),
  });
};

// Função para buscar todas as leituras
export const getAllReadings = async () => {
  return await db.readings.toArray();
};

// Função para buscar leituras de um sensor específico
export const getReadingsBySensor = async (sensor) => {
  return await db.readings.where('sensor').equals(sensor).toArray();
};

// Função para limpar todas as leituras (opcional)
export const clearReadings = async () => {
  await db.readings.clear();
};
