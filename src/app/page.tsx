import RecipeList from "@/components/RecipeList";
import { getRecipes } from "@/services/recipe.service";

export default async function HomePage() {
    const recipes = await getRecipes();

    return (
        <section className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold">
                    🍳 Recipe Explorer
                </h1>

                <p className="mt-2 text-gray-600">
                    Discover delicious recipes from around the world.
                </p>
            </div>

            <RecipeList recipes={recipes} />
        </section>
    );
}
