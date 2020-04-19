import React from "react";
import {
  IonContent,
  IonPage,
} from "@ionic/react";
import ExploreContainer from "../../components/ExploreContainer";
import "./style.css";

export const Connect = () => {
  return (
    <IonPage>
      <IonContent>
        <ExploreContainer name="Connect page" />
      </IonContent>
    </IonPage>
  );
};
