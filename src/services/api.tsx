import Plant from '../models/Plant';

const API_URL = "http://ubuntu.mansdahlstrom.se:3000";
const ESP_URL = "192.168.4.1";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)); 


export const getPlants = async () => {
  const response = await fetch(`${API_URL}/`);
  const myPlants = await response.json();

  return myPlants;
};

export const getPlant: (id: string) => Promise<Plant> = async id => {
  console.log(id);
  console.log(`${API_URL}/${id}`);
  const response = await fetch(`${API_URL}/${id}`);
  const plant = await response.json();

  return plant;
};

export const verifyESPConnection = async () => {
  await delay(1000);
  return {
    status: 200,
    success: true,
  }
}