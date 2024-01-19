import { Store } from "./store-list.model";

export interface GameSummary {
    id: number;
    slug: string;
    name: string;
    added: number;
}

export interface StoreDetail extends Store {
    description: string;
    games: GameSummary[];
}
