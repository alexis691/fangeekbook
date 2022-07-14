export interface iFilmSeasonEpisodeAttributes{
    id: number
    filmSeasonId: number;
    name?: string;
    description: string;
    runtime: String;
    releaseDate: Date;
}

export interface iFilmSeasonEpisodeInstances{
    id: number
    filmSeasonId: number;
    name?: string;
    description: string;
    runtime: String;
    releaseDate: Date;
    createdAt: Date;
    UpdatedAt: Date;
}
