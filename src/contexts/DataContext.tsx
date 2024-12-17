// DatabaseContext.tsx
import { createContext } from 'react';
import { DatabaseContextType } from '../Models/DataInterface';


export const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);


