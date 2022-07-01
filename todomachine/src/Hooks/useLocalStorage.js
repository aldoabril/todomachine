import React from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const localStorageItems = localStorage.getItem(itemName);
  let parseItems = initialValue;

  if (!localStorageItems) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  } else {
    parseItems = JSON.parse(localStorageItems);
  }

  const [items, setItems] = React.useState(parseItems);
  const saveItems = (items) => {
    const stringifyItems = JSON.stringify(items);
    localStorage.setItem(itemName, stringifyItems);
    setItems(items);
  };
  return [items, saveItems];
};
