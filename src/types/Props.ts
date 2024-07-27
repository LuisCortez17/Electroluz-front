export interface Product {
    name: string;
    image: string;
    description: string;
    price: number;
    category: string;
}

export interface CartProduct {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}