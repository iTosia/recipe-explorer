"use client";

import { useEffect, useState } from "react";

import RecipeList from "./RecipeList";
import SkeletonCard from "./SkeletonCard";
import EmptyState from "./EmptyState";

import { getRecipesByIds } from "@/services/recipe.service";
import { useFavorites } from "@/hooks/useFavorites";
import { RecipeDetails } from "@/types/recipe";

export default function FavoriteRecipes() {
    const { favorites } = useFavorites();

    const [recipes, setRecipes] = useState<
        RecipeDetails[]
    >([]);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {
        async function load() {
            if (!favorites.length) {
                setRecipes([]);
                setLoading(false);

                return;
            }

            const data =await getRecipesByIds(favorites);

            setRecipes(data);
            setLoading(false);
        }

        load();
    }, [favorites]);

    if (loading) {
        return (
            <section className="grid grid-cols-3 gap-6">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </section>
        );
    }

    if (!recipes.length) {
        return (
            <EmptyState title="No favorite recipes yet." />
        );
    }

    return (
        <RecipeList
            recipes={recipes}
        />
    );
}
