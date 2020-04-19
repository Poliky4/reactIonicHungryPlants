import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { Plants } from "./pages/plants";
import { Plant } from "./pages/plant";
import { Connect } from "./pages/connect";

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/connect" component={Connect} exact={true} />
          <Route path="/plant/:id" component={Plant} exact={true} />
          <Route path="/" component={Plants} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="/" href="/">
            <IonIcon icon={triangle} />
            <IonLabel>Plants</IonLabel>
          </IonTabButton>
          <IonTabButton tab="/connect" href="/connect">
            <IonIcon icon={ellipse} />
            <IonLabel>Connect</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
