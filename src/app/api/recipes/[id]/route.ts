import { NextResponse } from "next/server";

import { getRecipeById } from "@/services/recipe.service";

interface Context {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(
    request: Request,
    { params }: Context
) {
    try {
        const { id } = await params;
        const recipe = await getRecipeById(id);

        if (!recipe) {
            return NextResponse.json(
                {
                    message: "Recipe not found",
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json(recipe);
    } catch {
        return NextResponse.json(
            {
                message: "Server error",
            },
            {
                status: 500,
            }
        );
    }
}
