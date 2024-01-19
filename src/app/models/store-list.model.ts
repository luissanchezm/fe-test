import { Game } from "./game-list.model";

export interface Store {
    id: number;
    name: string;
    domain: string;
    slug: string;
    games_count: number;
    games: Game[];
    image_background: string;
}

export interface StoreList {
    count: number;
    next: string | null;
    previous: string | null;
    results: Store[];
}
