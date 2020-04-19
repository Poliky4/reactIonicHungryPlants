import React, { useState, useEffect } from "react";
import { IonContent, IonPage, IonText } from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./style.css";
import { RouteComponentProps } from "react-router";

import { getPlant } from "../../services/api";
import PlantModel from "../../models/Plant";

type Params = {
  id: string;
};
interface Props extends RouteComponentProps<Params> {}

export const Plant = ({
  match: {
    params: { id },
  },
}: Props) => {
  const [plant, setPlant] = useState<PlantModel>();

  useEffect(() => {
    const loadData = async () => {
      const plant = await getPlant(id);
      setPlant(plant);
    };
    loadData();
  }, []);

  return (
    <IonPage>
      <IonContent>
        <IonText>
          {plant?.name}
          ---
          {plant?.id}
        </IonText>
      </IonContent>
    </IonPage>
  );
};
