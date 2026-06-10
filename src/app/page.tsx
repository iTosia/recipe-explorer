import SearchBar from "@/components/SearchBar";
import RecipeList from "@/components/RecipeList";

import {
    getRecipes,
    searchRecipes,
} from "@/services/recipe.service";

interface Props {
    searchParams: Promise<{
        search?: string;
    }>;
}

export default async function HomePage({
    searchParams,
}: Props) {
    const { search } =
        await searchParams;

    const recipes =
        search && search.trim()
            ? await searchRecipes(search)
            : await getRecipes();

    return (
        <>
            <SearchBar />

            <RecipeList
                recipes={recipes}
            />
        </>
    );
}
