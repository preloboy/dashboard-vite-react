import { ReactNode } from "react";
import { Database, Tables } from "../../database.types";

export type Screen = Database['public']['Tables']['screens']['Row']
export type Menu_List = Database['public']['Tables']['menu_list']['Row']

export interface DatabaseContextType {
    title : string,
    index: string | undefined,
    setIndex: (index: string) => void,
    getTitle: (index: string) => void,
    menuList: Menu_List[],
    screens: Screen[];
    fetchScreens: (index:string) => void;
}

export interface DatabaseProviderProps {
    children: ReactNode;
}