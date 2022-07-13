import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./styles.css";
export const ChangeAlert = ({ show, toggleShow, loading,localStorageChanged }) => {
    if (show)
    return (
      <>
        
        {!loading &&localStorageChanged && <div>Nuevo cambio!!</div>}
        {loading && !localStorageChanged&&<div>Refrescando!!</div>}
      </>
    );
  else return null;
};

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
