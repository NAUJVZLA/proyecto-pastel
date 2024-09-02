'use client'
import { useState } from 'react';
import Head from 'next/head';

interface Category {
    id: number;
    name: string;
    description: string;
}

const categories: Category[] = [
    { id: 1, name: 'Electrónica', description: 'Gadgets y dispositivos electrónicos' },
    { id: 2, name: 'Ropa', description: 'Moda para todas las edades' },
    { id: 3, name: 'Hogar', description: 'Artículos para el hogar y decoración' },
    { id: 4, name: 'Deportes', description: 'Equipamiento y ropa deportiva' },
    { id: 5, name: 'Libros', description: 'Libros de todos los géneros' },
];

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

    return (
        <div className="container mx-auto px-4 py-8">
            <Head>
                <title>Categorías de Productos</title>
                <meta name="description" content="Listado de categorías de productos" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="text-3xl font-bold mb-6">Categorías de Productos</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="border p-4 rounded cursor-pointer hover:bg-gray-100"
                            onClick={() => setSelectedCategory(category)}
                        >
                            <h2 className="text-xl font-semibold">{category.name}</h2>
                            <p className="text-gray-600">{category.description}</p>
                        </div>
                    ))}
                </div>

                {selectedCategory && (
                    <div className="mt-8 p-4 border rounded">
                        <h2 className="text-2xl font-bold mb-2">Categoría seleccionada:</h2>
                        <p className="text-xl">{selectedCategory.name}</p>
                        <p className="text-gray-600">{selectedCategory.description}</p>
                    </div>
                )}
            </main>
        </div>
    );
}