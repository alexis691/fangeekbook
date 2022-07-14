export interface iStaffAttributes{
    id: number
    staffType: number;
    name: string;
    birthDate: Date;
    gender: boolean;
    bio: string;
    status?: boolean;
}

export interface iStaffInstances{
    id: number
    staffType: number;
    name: string;
    birthDate: Date;
    gender: boolean;
    bio: string;
    status?: boolean;
    createdAt: Date;
    UpdatedAt: Date;
}
