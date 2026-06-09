export interface Recipe {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

export interface RecipeDetails extends Recipe {
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strYoutube: string;
}

export interface RecipesResponse {
    meals: Recipe[];
}

export interface RecipeDetailsResponse {
    meals: RecipeDetails[];
}