import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "@/types/recipe";

interface RecipeListProps {
    recipes: Recipe[];
}

export default function RecipeList({
    recipes,
}: RecipeListProps) {
    return (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.idMeal}
                    recipe={recipe}
                />
            ))}
        </section>
    );
}
