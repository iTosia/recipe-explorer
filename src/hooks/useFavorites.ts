"use client";

import { useFavoritesContext } from "@/providers/FavoritesProvider";

export function useFavorites() {
    return useFavoritesContext();
}
