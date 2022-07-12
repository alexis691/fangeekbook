export interface iFilmSongAttributes{
    id: number;
    songName: string;
    songPerformer: string;
    songDuration: string;
    songAlbum: string;
    songVideo: string;
    status?: boolean;
}

export interface iFilmSongInstance{
    id: number;
    songName: string;
    songPerformer: string;
    songDuration: string;
    songAlbum: string;
    songVideo: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}