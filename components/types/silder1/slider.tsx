import React, { useState } from 'react';
import Image from 'next/image';

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: "Producto 1", image: "/api/placeholder/400/300", price: 29.99 },
    { id: 2, name: "Producto 2", image: "/api/placeholder/400/300", price: 29.99 },
    { id: 3, name: "Producto 3", image: "/api/placeholder/400/300", price: 39.99 },
    { id: 4, name: "Producto 4", image: "/api/placeholder/400/300", price: 49.99 },
];

const ProductSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative h-64">
                    <Image
                        src={products[currentIndex].image}
                        alt={products[currentIndex].name}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="p-4 bg-white">
                    <h2 className="text-xl font-semibold">{products[currentIndex].name}</h2>
                    <p className="mt-2 text-gray-600">${products[currentIndex].price.toFixed(2)}</p>
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
                ←
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            >
                →
            </button>
        </div>
    );
};

export default ProductSlider;