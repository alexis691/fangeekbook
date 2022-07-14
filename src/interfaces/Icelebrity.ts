export interface iCelebrityAttributes{
    id: number
    birthCountry: number;
    fullName: string;
    nickName?: string;
    birthPlace: string;
    bio: string;
    gender: boolean;
    status?: boolean;
}

export interface iCelebrityInstances{
    id: number
    birthCountry: number;
    fullName: string;
    nickName?: string;
    birthPlace: string;
    bio: string;
    gender: boolean;
    status?: boolean;
    createdAt: Date;
    UpdatedAt: Date;
}
