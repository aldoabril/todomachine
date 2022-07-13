import React, { useEffect } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [items, setItems] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [localStorageChanged, setLocalStorageChanged] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parseItems = initialValue;
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          parseItems = JSON.parse(localStorageItems);
        }
        setItems(parseItems);
        setLoading(false);
        setLocalStorageChanged(false);
      } catch (err) {
        setError(error);
      }
    }, 2000);
  }, [localStorageChanged]);
 
  const saveItems = (items) => {
    try {
      const stringifyItems = JSON.stringify(items);
      localStorage.setItem(itemName, stringifyItems);
      setItems(items);
    } catch (err) {
      setError(err);
    }
  };

  const reload = ()=>{
    setLocalStorageChanged(true)
    setLoading(true)
  }
  return { items, saveItems, loading, error, reload, localStorageChanged };
};
