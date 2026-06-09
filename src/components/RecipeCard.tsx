import { Recipe } from "@/types/recipe";
import Link from "next/link";

interface RecipeCardProps {
    recipe: Recipe;
}

export default function RecipeCard({
    recipe,
}: RecipeCardProps) {
    return (
        <Link href={`/recipes/${recipe.idMeal}`}>
            <article className="rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-lg">
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="mb-4 h-52 w-full rounded-md object-cover"
                />

                <h2 className="text-gray-900 text-xl font-semibold">
                    {recipe.strMeal}
                </h2>
            </article>
        </Link>
    );
}
