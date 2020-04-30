import React, { ReactNode } from 'react';
import { IonCard } from '@ionic/react';

import './style.css'

interface Props {
  active: boolean,
  step: number,
  children: ReactNode
}

export const Step = ({ active, step, children }: Props) => {
  if (!active) {
    return null;
  }
  
  return (
    <div className="step">
      <IonCard title="step">
        <span className="step-indicator">Step {step}</span>
        {children}
      </IonCard>
    </div>
  )
};
