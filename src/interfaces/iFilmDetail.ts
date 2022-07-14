export interface iFilmDetailAttributes{
    id: number
    filmId: number;
    totalSeasons: number;
    totalEpisodes: number;
    endDate?: Date;
}

export interface iFilmDetailInstances{
    id: number;
    filmId: number;
    totalSeasons: number;
    totalEpisodes: number;
    endDate?: Date;
    createdAt: Date;
    UpdatedAt: Date;
}
