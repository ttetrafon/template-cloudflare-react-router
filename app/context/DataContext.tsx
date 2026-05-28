import { createContext, useContext } from "react";

interface DataContextType {
}

const DataContext = createContext<DataContextType | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {

  return (
    <DataContext value={{
    }}>
      {children}
    </DataContext>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
