import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const API_CURRENT = "https://api.weather.com/v2/pws/observations/current?stationId=ICIUDA253&format=json&units=m&apiKey=526e059114aa4a5eae059114aada5eb3&numericPrecision=decimal";
const API_FORECAST = "https://api.weather.com/v3/wx/forecast/daily/5day?geocode=-25.484386,-54.671117&format=json&units=m&language=es&apiKey=526e059114aa4a5eae059114aada5eb3";

// Endpoint proxy para datos actuales
app.get('/api/current-weather', async (req, res) => {
  try {
    const response = await fetch(API_CURRENT);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de clima' });
  }
});

// Endpoint proxy para datos del pronóstico
app.get('/api/forecast', async (req, res) => {
  try {
    const response = await fetch(API_FORECAST);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos del pronóstico' });
  }
});
app.get('/api/saludar', async (req, res) => {
  try {
    const data = {mensaje:'Hola como estas'}
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar mensaje' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});