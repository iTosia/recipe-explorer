"use client";

import { useFavorites } from "@/hooks/useFavorites";

export default function FavoritesPage() {
    const { favorites } = useFavorites();

    return (
        <section className="space-y-6">
            <h1 className="text-4xl font-bold">
                ❤️ Favorite Recipes
            </h1>

            {favorites.length === 0 ? (
                <p className="text-gray-600">
                    No favorite recipes yet.
                </p>
            ) : (
                <ul className="space-y-2">
                    {favorites.map((id) => (
                        <li key={id}>
                            Recipe ID: {id}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
