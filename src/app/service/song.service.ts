import { Season } from "../season";

export function getSeasons(): Promise<Season[]> {
    return fetch("/json/songs.json")
        .then(res => res.json())
        .then(res => res);
}