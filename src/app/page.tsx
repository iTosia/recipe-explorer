import SearchBar from "@/components/SearchBar";
import RecipeList from "@/components/RecipeList";

import { getRecipes, searchRecipes } from "@/services/recipe.service";

interface Props {
    searchParams: Promise<{
        search?: string;
    }>;
}

export default async function HomePage({
    searchParams,
}: Props) {
    
    const { search } = await searchParams;
    const recipes = search ? await searchRecipes(search) : await getRecipes();

    return (
        <section className="space-y-8">
            <SearchBar />
            <RecipeList recipes={recipes} />
        </section>
    );
}
