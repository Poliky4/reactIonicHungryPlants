import Plant from '../models/Plant';

const API_URL = "http://ubuntu.mansdahlstrom.se:3000";

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
