export interface GameDetail {
    id: number;
    slug: string;
    name: string;
    description: string;
    metacritic: number;
    released: string;
    background_image: string;
    background_image_additional?: string[];
    rating: number;
}
