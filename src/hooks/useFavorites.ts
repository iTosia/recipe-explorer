"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "favoriteRecipes";

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const data = localStorage.getItem(STORAGE_KEY);

        if (data) {
            setFavorites(
                JSON.parse(data)
            );
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite =
        useCallback((id: string) => {
            setFavorites((prev) =>
                prev.includes(id)
                    ? prev.filter(
                          (item) =>
                              item !== id
                      )
                    : [...prev, id]
            );
        }, []);

    const isFavorite = useCallback((id: string) => favorites.includes(id), [favorites]);

    return {
        favorites,
        toggleFavorite,
        isFavorite,
    };
}
