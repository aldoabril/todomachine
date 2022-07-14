import React, { useEffect } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const {items,
    loading,
    error,
    localStorageChanged} = state;
  
  const onError = (error)=>{
    dispatch({type: actionTypes.error, payload: error})
  }
  const onSuccess = (items)=>{
    dispatch({type: actionTypes.success, payload: items})
  }
  const onSave = (items)=>{
    dispatch({type: actionTypes.save, payload: items})
  }
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
        onSuccess(parseItems)
        
      } catch (err) {
        onError(err)
      }
    }, 2000);
  }, [localStorageChanged]);
 
  const saveItems = (items) => {
    try {
      const stringifyItems = JSON.stringify(items);
      localStorage.setItem(itemName, stringifyItems);
      onSave(items);
    } catch (err) {
      onError(err);
    }
  };

  const reload = ()=>{
    dispatch({type: actionTypes.reload})
    
  }
  return { items, saveItems, loading, error, reload, localStorageChanged };
};


const actionTypes = {
  success : 'SUCCESS',
  save: 'SAVE',
  loading: 'LOADING',
  error: 'ERROR',
  reload: 'RELOAD',
  localStorageChanged: 'LOCAL_STORAGE_CHANGED'
}

const initialState = {
  items:[],
  loading:true,
  error:'',
  localStorageChanged:false
}

const reducer = (state, action)=>{
  switch (action.type){
    case actionTypes.error:
      return {
            ...state,
            error: action.payload
          }
     case actionTypes.loading:
      return {
        ...state,
        loading: true,
      }
     case actionTypes.success:
      return {
        ...state,
        items: action.payload,
        loading: false,
        localStorageChanged: false
      }
      case actionTypes.save:
        return {
          ...state,
          items: action.payload,
          loading: false,
          localStorageChanged: false
        }

     case actionTypes.reload:
       return {
        ...state,
        localStorageChanged: true,
        loading: true,
       }   
     case actionTypes.localStorageChanged:
      return {
        ...state,
        localStorageChanged: true
      }
      default:
        return state      
  }
}