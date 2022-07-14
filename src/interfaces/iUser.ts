export interface iUserAttributes{
    id: number
    userType: number;
    fullName: string;
    nickName?: string;
    email: string;
    picture?: string;
    hash: string;
    salt: string;
    status?: boolean;
}

export interface iUserInstances{
    id: number
    userType: number;
    fullName: string;
    nickName?: string;
    email: string;
    picture?: string;
    hash: string;
    salt: string;
    status?: boolean;
    createdAt: Date;
    UpdatedAt: Date;
}
