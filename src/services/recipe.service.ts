import { apiFetch } from "@/lib/api";
import { RecipeDetails, RecipesResponse, RecipeDetailsResponse } from "@/types/recipe";

export async function getRecipes() {
    const data = await apiFetch<RecipesResponse>("/search.php?f=a");

    return data.meals ?? [];
}

export async function searchRecipes(
    query: string
) {
    const data = await apiFetch<RecipesResponse>(`/search.php?s=${query}`);

    return data.meals ?? [];
}

export async function getRecipeById(
    id: string
): Promise<RecipeDetails | null> {
    const data = await apiFetch<RecipeDetailsResponse>(`/lookup.php?i=${id}`);

    return data.meals?.[0] ?? null;
}

export async function getRecipesByIds(
    ids: string[]
) {
    const recipes = await Promise.all(ids.map((id) => getRecipeById(id)));

    return recipes.filter(Boolean) as RecipeDetails[];
}
