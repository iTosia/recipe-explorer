import Image from "next/image";
import Link from "next/link";

import { Recipe } from "@/types/recipe";

interface RecipeCardProps {
    recipe: Recipe;
}

export default function RecipeCard({
    recipe,
}: RecipeCardProps) {
    return (
        <Link href={`/recipes/${recipe.idMeal}`}>
            <article className="rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-lg">
                <Image
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    width={500}
                    height={300}
                    className="mb-4 rounded-lg"
                />

                <h2 className="text-gray-900 text-xl font-semibold">
                    {recipe.strMeal}
                </h2>
            </article>
        </Link>
    );
}
