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

export const PlantCard = ({ id, name }: Plant) => {
  return (
    <IonCard routerLink={`/plant/${id}`}>
      <IonCardHeader>
        <IonCardSubtitle>{id}</IonCardSubtitle>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit
        clean.
      </IonCardContent>
    </IonCard>
  );
};
