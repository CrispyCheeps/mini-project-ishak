// src/context/PaginationContext.js
import { createContext, useContext, useState } from "react";

export const PaginationContext = createContext();
export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        data,
        setData,
        totalData,
        setTotalData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
