import { Screen } from "../Models/DataInterface";
import { useDatabase } from "../providers/DataProvider";
import { Role } from "../types/auth.type";


export const hasPermission = (role: Role, page: string) => {
    const { screens } = useDatabase();
    const screen = screens.find((screen: Screen) => screen.path === page)
        return screen?.allowed_role.includes(role) ?? false;
}