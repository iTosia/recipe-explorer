"use client";

import { useEffect, useState } from "react";

import RecipeList from "./RecipeList";
import SkeletonCard from "./SkeletonCard";
import EmptyState from "./EmptyState";

import { clientFetch } from "@/lib/client-api";
import { useFavorites } from "@/hooks/useFavorites";
import { Recipe } from "@/types/recipe";

export default function FavoriteRecipes() {
    const { favorites } = useFavorites();
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            if (!favorites.length) {
                setRecipes([]);
                setLoading(false);
                return;
            }

            try {
                const data = await Promise.all(favorites.map((id) => clientFetch<Recipe>(`/api/recipes/${id}`)));
                setRecipes(data);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [favorites]);

    if (loading) {
        return (
            <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map(
                    (_, index) => (
                        <SkeletonCard
                            key={index}
                        />
                    )
                )}
            </section>
        );
    }

    if (!recipes.length) {
        return (
            <EmptyState title="No favorite recipes yet." />
        );
    }

    return (
        <RecipeList recipes={recipes} />
    );
}
