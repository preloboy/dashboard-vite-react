import { useDatabase } from "../contexts/DataContext";
import { Screen } from "../types/DataInterface";
import { Role } from "../types/auth.types";


export const hasPermission = (role: Role, page: string) => {
    const { screens } = useDatabase();  
    // console.log(screens);
    
    const screen = screens.find((screen: Screen) => screen.path === page)
    const value =  screen?.allowed_role.includes(role) ?? true;
    return value
}