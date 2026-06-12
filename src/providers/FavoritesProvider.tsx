"use client";

import React, { useCallback, useEffect, useState, createContext, useContext } from "react";

const STORAGE_KEY = "favoriteRecipes";

interface FavoritesContextType {
    favorites: string[];
    toggleFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
    isInitialized: boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<string[]>(() => {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            if (data) {
                const parsed = JSON.parse(data);
                if (Array.isArray(parsed)) {
                    return parsed;
                }
            }
        } catch (e) {
            console.error("Failed to load favorites:", e);
        }
        return [];
    });
    const isInitialized = true;

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = useCallback((id: string) => {
        setFavorites((prev) => {
            const currentFavorites = Array.isArray(prev) ? prev : [];
            if (currentFavorites.includes(id)) {
                return currentFavorites.filter((item) => item !== id);
            }
            return [...currentFavorites, id];
        });
    }, []);

    const isFavorite = useCallback((id: string) => favorites.includes(id), [favorites]);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, isInitialized }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavoritesContext() {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error("useFavoritesContext must be used within a FavoritesProvider");
    }
    return context;
}
