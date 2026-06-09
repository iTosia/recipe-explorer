import { Recipe, RecipesResponse } from "@/types/recipe";

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