import React, { useEffect } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [items, setItems] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
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
      } catch (err) {
        setError(error);
      }
    }, 2000);
  });
  const saveItems = (items) => {
    try {
      const stringifyItems = JSON.stringify(items);
      localStorage.setItem(itemName, stringifyItems);
      setItems(items);
    } catch (err) {
      setError(err);
    }
  };
  return { items, saveItems, loading, error };
};
