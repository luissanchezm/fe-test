export interface Game {
  id: number;
  slug: string;
  name: string;
  added: number;
}

export interface GameList {
  count: number;
  results: Game[];
}