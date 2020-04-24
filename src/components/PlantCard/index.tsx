import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

import "./style.css";
import Plant from "../../models/Plant";

export const PlantCard = ({
  id,
  name,
  breed,
  latest_measurement: latestMeasurement
}: Plant) => {
  return (
    <IonCard key={id} className="plant-card" routerLink={`/plant/${id}`}>
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
        <IonCardSubtitle>{breed}</IonCardSubtitle>
        <span className="card-stat">
          {Number(latestMeasurement.humidity * 100).toFixed()}%
        </span>
      </IonCardHeader>

      <IonCardContent>
      </IonCardContent>
    </IonCard>
  );
};
