import Image from "next/image";
import Link from "next/link";

import FavoriteButton from "@/components/FavoriteButton";

import { Recipe } from "@/types/recipe";

interface Props {
    recipe: Recipe;
}

export default function RecipeCard({
    recipe,
}: Props) {
    return (
        <article className="rounded-lg border bg-white p-4 shadow-sm">
            <Link href={`/recipes/${recipe.idMeal}`}>
                <Image
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    width={500}
                    height={300}
                    className="rounded-lg"
                />

                <h2 className="mt-4 text-xl font-semibold">
                    {recipe.strMeal}
                </h2>
            </Link>

            <FavoriteButton recipeId={recipe.idMeal} />
        </article>
    );
}
