export interface Season {
  label: string;
  songs: Song[];
}

export interface Song {
  id: number;
  name: string;
  lyrics: string;
  story: string;
}
