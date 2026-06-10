import RecipeCard from "./RecipeCard";
import EmptyState from "./EmptyState";
import { Recipe } from "@/types/recipe";

interface Props {
    recipes: Recipe[];
}

export default function RecipeList({
    recipes,
}: Props) {
    if (!recipes.length) {
        return (
            <EmptyState title="Recipes not found" />
        );
    }

    return (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.idMeal}
                    recipe={recipe}
                />
            ))}
        </section>
    );
}
