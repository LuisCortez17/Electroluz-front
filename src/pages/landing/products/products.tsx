import React, { useState } from "react";
import ProductCard from "../../../components/productCard";
import ProductFilter from "../../../components/productFilter";

const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "https://via.placeholder.com/150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "Electronics",
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        image: "https://via.placeholder.com/150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "Electronics",
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        image: "https://via.placeholder.com/150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "Electronics",
    },
    {
        id: 4,
        name: "Product 4",
        price: 400,
        image: "https://via.placeholder.com/150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "Furniture",
    },
    {
        id: 5,
        name: "Product 5",
        price: 500,
        image: "https://via.placeholder.com/150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "Furniture",
    },
    {
        id: 6,
        name: "Product 6",
        price: 600,
        image: "https://via.placeholder.com/150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "Clothing",
    },
];

const Products = () => {
        const [filters, setFilters] = useState<{ category: string; priceRange: number }>({
        category: "All",
        priceRange: 1000,
    });

    const handleFilterChange = (newFilters: { category?: string; priceRange?: number }) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
        }));
    };

    const filteredProducts = products.filter((product) => {
        const matchesCategory =
            filters.category === "All" || product.category === filters.category;
        const matchesPrice = product.price <= filters.priceRange;
        return matchesCategory && matchesPrice;
    });

    return (
        <div className="p-6 flex">
            <div className="w-1/4 pr-4">
                <ProductFilter onFilterChange={handleFilterChange} />
            </div>
            <div className="w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
