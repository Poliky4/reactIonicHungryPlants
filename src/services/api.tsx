const API_URL = "http://localhost:1337";

interface Plant {
  id: string;
  name: string;
}

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
