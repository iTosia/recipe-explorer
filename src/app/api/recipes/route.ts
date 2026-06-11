import { NextResponse } from "next/server";

import { getRecipes, searchRecipes } from "@/services/recipe.service";

export async function GET(
    request: Request
) {
    try {
        const { searchParams } = new URL(request.url);
        const search = searchParams.get("search");
        const recipes = search ? await searchRecipes(search) : await getRecipes();

        return NextResponse.json(recipes);
    } catch {
        return NextResponse.json(
            {
                message: "Failed to load recipes",
            },
            {
                status: 500,
            }
        );
    }
}
