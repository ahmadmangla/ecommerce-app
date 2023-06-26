import React, { useContext, useState, useEffect, createContext } from "react";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [sort, setSort] = useState("default");
  const [filterCat, setFilterCat] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsPending(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        if (sort === "default") {
          setData(data);
        } else if (filterCat.length !== 0) {
          setData(filterCat);
        } else if (sort === "lowest") {
          const sorted = data.sort((a, b) => {
            return a.price - b.price;
          });
          setData(sorted);
        } else if (sort === "highest") {
          const sorted = data.sort((a, b) => {
            return b.price - a.price;
          });
          setData(sorted);
        }

        setTimeout(() => {
          setIsPending(false);
        }, 2000);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    }
    fetchData();
  }, [sort, filterCat]);
  return (
    <APIContext.Provider
      value={{
        setFilterCat,
        setData,
        data,
        isPending,
        error,
        setSort,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
