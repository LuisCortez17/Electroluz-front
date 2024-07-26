import React, { useState } from "react";

interface FiltersProps {
    onFilterChange: (filters: { [key: string]: string | number }) => void;
}

const ProductFilter = ({ onFilterChange }: FiltersProps) => {
    const [category, setCategory] = useState<string>("All");
    const [priceRange, setPriceRange] = useState<number>(1000);

    const handleCategoryChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newCategory = event.target.value;
        setCategory(newCategory);
        onFilterChange({ category: newCategory, priceRange });
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPriceRange = Number(event.target.value);
        setPriceRange(newPriceRange);
        onFilterChange({ category, priceRange: newPriceRange });
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Filters
            </h2>
            <div className="mb-4">
                <label className="block text-gray-600">Category</label>
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                >
                    <option value="All">All</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Clothing">Clothing</option>
                    {/* Añade más categorías según sea necesario */}
                </select>
            </div>
            <div>
                <label className="block text-gray-600">Price Range</label>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange}
                    onChange={handlePriceChange}
                    className="mt-1 w-full"
                />
                <span className="text-gray-600 mt-1">Up to ${priceRange}</span>
            </div>
        </div>
    );
};

export default ProductFilter;
