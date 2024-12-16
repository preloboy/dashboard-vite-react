// DatabaseContext.tsx
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import supabase from '../utils/supabase';

interface Screen {
  id: number;
  name: string;
  // Add other properties that exist in your 'screens' table
}

interface DatabaseContextType {
  screens: Screen[];
  fetchScreens: () => void;
}

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

interface DatabaseProviderProps {
  children: ReactNode;
}

export const DatabaseProvider: React.FC<DatabaseProviderProps> = ({ children }) => {
  const [screens, setScreens] = useState<Screen[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchScreens = async () => {
    const { data, error } = await supabase.from('screens').select();
    if (error) {
      setError(error.message);
    } else {
      setScreens(data as Screen[]);
    }
  };

  useEffect(() => {
    fetchScreens();
  }, []);

  return (
    <DatabaseContext.Provider value={{ screens, fetchScreens }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => {
  const context = useContext(DatabaseContext);
  if (context === undefined) {
    throw new Error('useDatabase must be used within a DatabaseProvider');
  }
  return context;
};
