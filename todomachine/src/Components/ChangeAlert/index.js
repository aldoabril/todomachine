import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./styles.css";
export const ChangeAlert = ({ show, toggleShow }) => {
  if (show)
    return (
      <>
        <div>Nuevo cambio!!</div>
        <button onClick={() => toggleShow(false)}>Refrescar cambios</button>
      </>
    );
  else return null;
};

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
