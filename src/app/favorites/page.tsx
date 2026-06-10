import FavoriteRecipes from "@/components/FavoriteRecipes";

export default function FavoritesPage() {
    return (
        <section className="space-y-8">
            <h1 className="text-4xl font-bold">
                ❤️ Favorite Recipes
            </h1>

            <FavoriteRecipes />
        </section>
    );
}
