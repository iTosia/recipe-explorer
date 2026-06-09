import { Recipe, RecipeDetails, RecipesResponse, RecipeDetailsResponse } from "@/types/recipe";

const API_URL =
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

export async function getRecipes(): Promise<Recipe[]> {
    const response = await fetch(API_URL, {
        next: {
            revalidate: 3600,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to load recipes");
    }

    const data: RecipesResponse = await response.json();

    return data.meals ?? [];
}

export async function getRecipeById(
    id: string
): Promise<RecipeDetails | null> {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
        {
            next: {
                revalidate: 3600,
            },
        }
    );

    if (!response.ok) {
        return null;
    }

    const data: RecipeDetailsResponse =
        await response.json();

    return data.meals?.[0] ?? null;
}

export async function searchRecipes(
    query: string
) {
    if (!query) {
        return [];
    }

    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );

    const data = await response.json();

    return data.meals ?? [];
}
