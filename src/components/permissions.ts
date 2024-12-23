import { Screen } from "../Models/DataInterface";
import { useDatabase } from "../providers/DataProvider";
import { Role } from "../types/auth.type";


export const hasPermission = (role: Role, page: string) => {
    const { screens } = useDatabase();  
    console.log(screens);
    
    const screen = screens.find((screen: Screen) => screen.path === page)
    const value =  screen?.allowed_role.includes(role) ?? true;
    return value
}