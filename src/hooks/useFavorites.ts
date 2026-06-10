"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "favoriteRecipes";

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (stored) {
            setFavorites(JSON.parse(stored));
        }
    }, []);

    const toggleFavorite = useCallback((id: string) => {
        setFavorites((prev) => {
            const updated = prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id];

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(updated)
            );

            return updated;
        });
    }, []);

    const isFavorite = useCallback(
        (id: string) => favorites.includes(id),
        [favorites]
    );

    return {
        favorites,
        toggleFavorite,
        isFavorite,
    };
}
