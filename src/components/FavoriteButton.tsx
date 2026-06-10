"use client";

import { useFavorites } from "@/hooks/useFavorites";

interface Props {
    recipeId: string;
}

export default function FavoriteButton({
    recipeId,
}: Props) {
    const {
        toggleFavorite,
        isFavorite,
    } = useFavorites();

    const favorite = isFavorite(recipeId);

    return (
        <button
            onClick={() =>
                toggleFavorite(recipeId)
            }
            className="mt-4 rounded bg-red-500 px-4 py-2 text-white transition hover:opacity-90"
        >
            {favorite ? "❤️ Remove from favorites" : "🤍 Add to favorites"}
        </button>
    );
}
