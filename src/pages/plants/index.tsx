import React, { useState, useEffect } from "react";
import { IonContent, IonPage } from "@ionic/react";

import { getPlants } from "../../services/api";
import { PlantCard } from "../../components/PlantCard";
import "./style.css";

export const Plants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const _getPlants = async () => {
      const plants = await getPlants();
      console.log(plants);
      setPlants(plants);
    };

    _getPlants();
  }, []);

  return (
    <IonPage>
      <IonContent>
        {plants.map((plant) => (
          <PlantCard {...plant} />
        ))}
      </IonContent>
    </IonPage>
  );
};
