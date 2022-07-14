export interface iFilmSeasonAttributes{
    id: number
    filmId: number;
    name: string;
    description: string;
    firstEmision: Date;
    lastEmision: Date;
    image?: string;
}

export interface iFilmSeasonInstances{
    id: number;
    filmId: number;
    name: string;
    description: string;
    firstEmision: Date;
    lastEmision: Date;
    image?: string;
    createdAt: Date;
    UpdatedAt: Date;
}
