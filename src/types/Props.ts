export interface Product {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    stock: number;
    brand: string;
    images: string[];
}

export interface CartProduct {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}