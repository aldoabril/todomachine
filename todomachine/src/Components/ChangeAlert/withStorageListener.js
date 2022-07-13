import React from "react";

export const withStorageListener = (WrappedComponent) => {
  return function WrapperComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);
    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        setStorageChange(true);
        props.onChangeStorage();
      }
    });
    return (
      <WrappedComponent show={storageChange} toggleShow={setStorageChange} loading={props.loading}/>
    );
  };
};
