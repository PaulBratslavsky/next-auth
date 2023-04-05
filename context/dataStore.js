import React, { createContext, useContext, useEffect } from 'react';

const DataStoreContext = createContext();

export const DataStoreProvider = ({ children, storageKey }) => {
  const setData = (key, value) => {
    const data = getData();
    const updatedData = { ...data, [key]: value };
    localStorage.setItem(storageKey, JSON.stringify(updatedData));
  };

  const getData = () => {
    const storedData = localStorage.getItem(storageKey);
    const data = JSON.parse(storedData);
    return storedData ? JSON.parse(storedData) : {};
  };

  const removeData = (key) => {
    const data = getData();
    const updatedData = { ...data };
    delete updatedData[key];
    localStorage.setItem(storageKey, JSON.stringify(updatedData));
  };

  const clearStore = () => {
    localStorage.removeItem(storageKey);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/get-cookie');
        const data = await response.json();
        setData('user', data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataStoreContext.Provider value={{ getData, setData, removeData, clearStore }}>
      {children}
    </DataStoreContext.Provider>
  );
};


export const useDataStore = () => useContext(DataStoreContext);
