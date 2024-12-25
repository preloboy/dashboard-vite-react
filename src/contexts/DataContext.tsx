// DatabaseContext.tsx
import { createContext } from 'react';
import { DatabaseContextType } from '../types/DataInterface';
import { useContext, useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { DatabaseProviderProps, Menu_List, Screen } from "../types/DataInterface";

const DatabaseContext = createContext<DatabaseContextType | undefined>(undefined);

export const DatabaseProvider: React.FC<DatabaseProviderProps> = ({ children }) => {
    const [title, setTitle] = useState<string>('')
    const [index, setIndex] = useState<string>('1')
    const [menuList, setMenuList] = useState<Menu_List[]>([]);
    const [screens, setScreens] = useState<Screen[]>([]);
    const [error, setError] = useState<string | null>(null);

    const getTitle = async (index: string) => {
        const { data, error } = await supabase.from('menu_list').select('menu_name').eq('id', index)
        setTitle(data ? data[0].menu_name : 1)
        // console.log("Title", data[0].menu_name);
        // console.log("Index", index);
    }

    const fetchScreens = async () => {
        const l_screens = sessionStorage.getItem('screens')
        if (l_screens) {
            setScreens(JSON.parse(l_screens))
        } else {
            const { data, error } = await supabase.from('screens').select()
            if (error) {
                setError(error.message)
            } else {
                setScreens(data as Screen[])
                sessionStorage.setItem('screens', JSON.stringify(data))
            }
        }
    }


    const fetchMenu = async () => {
        const l_menuList = sessionStorage.getItem('menu_list')
        if (l_menuList) {
            setMenuList(JSON.parse(l_menuList))
        } else {
            const { data, error } = await supabase.from('menu_list').select()
            if (error) {
                setError(error.message)
            } else {
                setMenuList(data as Menu_List[])
                sessionStorage.setItem('menu_list', JSON.stringify(data))
            }
        }
    }

    return (
        <DatabaseContext.Provider value={{ title, index, setIndex, getTitle, menuList, screens, fetchScreens, fetchMenu }}>
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