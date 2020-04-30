import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonSpinner,
  IonInput,
  IonLabel,
  IonItem,
  IonList,
  IonItemDivider,
} from "@ionic/react";
import "./style.css";
import { Step } from "../../components/Step";
import { verifyESPConnection } from "../../services/api";
import { format } from "path";

export const Connect = () => {
  const [step, setStep] = useState(1);
  const [{
    ssid,
    password
  }, setForm] = useState({
    ssid: '',
    password: ''
  });


  const [success, setSuccess] = useState(false);
  const [text, setText] = useState("hej");
  const isConnectedToHungryPlant = false;

  useEffect(() => {
    const testConnection = async () => {
      const response = await verifyESPConnection();
      setSuccess(true); // TODO
    }
    if (step === 2) {
      testConnection()
    }
  }, [step])

  // const sendCredentials = (ssid, password) => {
  // }

  return (
    <IonPage>
      <IonContent>
        <div className="wrapper">
          {isConnectedToHungryPlant ? (
            "Send your password"
          ) : (
              "Connect to Hungry Plants WIFI"
            )}

          <Step active={step === 1} step={1}>
            <h3>Anslut till din Hungry Plant™</h3>
            <p>
              1. Gå in i systeminställningar <br />
              2. Välj nätverket <b>HP - 001</b>
            </p>

            <IonButton color="primary" onClick={() => setStep(2)}>
              Verify Connection
            </IonButton>
          </Step>
          <Step active={step === 2} step={2}>
            <h3> Verifying connection....</h3>
            <IonSpinner name="crescent" />

            <p>
              Hej
            </p>

            {success ? (
              <>
                Connected!
                <IonButton onClick={() => setStep(3)}>
                  Next step
                </IonButton>
              </>
            ) : (
                <>
                  <IonButton onClick={() => setStep(1)}>
                    Previous step
                </IonButton>
                </>
              )}

            <IonButton disabled color="primary" onClick={() => setStep(1)}>
              Verify Connection
            </IonButton>
          </Step>
          <Step active={step === 3} step={3}>
            <h3>Pair</h3>
            <h4 className="subtitle">
              Connect your hungry plants to your network
            </h4>
            <form onSubmit={event => {
              event.preventDefault();
              console.log({
                ssid,
                password,
              })
            }}>
              <IonList>
                <IonItem>
                  <IonLabel position='floating'>ssid</IonLabel>
                  <IonInput
                    name="ssid"
                    type="text"
                    
                    value={ssid}
                    placeholder="Enter Input"
                    onIonChange={e => setForm({
                      ssid: e.detail.value || "",
                      password,
                    })}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position='floating'>Password</IonLabel>
                  <IonInput
                    name="password"
                    type="password"
                    value={password}
                    placeholder="Password"
                    onIonChange={e => setForm({
                      ssid,
                      password: e.detail.value || "",
                    })}
                    clearInput
                  />
                </IonItem>
              </IonList>
              <IonButton type="submit" color="primary">
                Connect
            </IonButton>
            </form>
          </Step>
        </div>
      </IonContent>
    </IonPage>
  );
};
