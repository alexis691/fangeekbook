export interface iFilmAttributes {
    id?: number; 
    category?: number;
    genreType?: number;
    originalLanguage?: number;
    recordingCountry?: number;
    ratingId?: number;
    distributorId?: number;
    runtime?: number;
    budget?: number;
    sinopsis?: string;
    boxOffice?: number;
    rate?: number;
    trailerUrl?: string;
    releasedate?: Date;
    status?: boolean
}

export interface iFilmInstance {
    id?: number; 
    category?: number;
    genreType?: number;
    originalLanguage?: number;
    recordingCountry?: number;
    ratingId?: number;
    distributorId?: number;
    runtime?: number;
    budget?: number;
    sinopsis?: string;
    boxOffice?: number;
    rate?: number;
    trailerUrl?: string;
    releasedate?: Date;
    status?: boolean;
}
