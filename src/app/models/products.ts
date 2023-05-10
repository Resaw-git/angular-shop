export interface IProducts {
    id: string;
    category: string;
    model: string;
    status: string;
    rating: number;
    price: number;
    images: string[];
    details: [[string, string]];
    description: string;
}
