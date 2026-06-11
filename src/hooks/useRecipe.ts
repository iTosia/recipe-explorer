"use client";

import { useQuery } from "@tanstack/react-query";
import { clientFetch } from "@/lib/client-api";
import { Recipe } from "@/types/recipe";

export function useRecipe(
    id: string
) {
    return useQuery({
        queryKey: ["recipe", id],
        queryFn: () => clientFetch<Recipe>(`/api/recipes/${id}`),
    });
}
