export type Role = 'superAdmin' | 'admin' | 'authenticated' | 'public';
export interface Permissions {
    [key: string]: Role[];
}

export const permissions: Permissions = {
    'dashboard': ['superAdmin', 'admin', 'authenticated'],
    'users': ['superAdmin', 'admin'],
    'settings': ['superAdmin', 'admin'],
}