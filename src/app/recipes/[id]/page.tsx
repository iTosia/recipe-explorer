import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getRecipeById } from "@/services/recipe.service";

interface RecipePageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({
    params,
}: RecipePageProps): Promise<Metadata> {
    const { id } = await params;

    const recipe = await getRecipeById(id);

    return {
        title: recipe?.strMeal ?? "Recipe",
        description: recipe?.strCategory,
    };
}

export default async function RecipePage({
    params,
}: RecipePageProps) {
    const { id } = await params;

    const recipe = await getRecipeById(id);

    if (!recipe) {
        notFound();
    }

    return (
        <article className="space-y-8">
            <Image
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                width={800}
                height={500}
                className="rounded-xl"
            />

            <div>
                <h1 className="text-4xl font-bold">
                    {recipe.strMeal}
                </h1>

                <p className="mt-2 text-gray-600">
                    {recipe.strCategory} • {recipe.strArea}
                </p>
            </div>

            <section>
                <h2 className="mb-4 text-2xl font-semibold">
                    Instructions
                </h2>

                <p className="whitespace-pre-line">
                    {recipe.strInstructions}
                </p>
            </section>
        </article>
    );
}
