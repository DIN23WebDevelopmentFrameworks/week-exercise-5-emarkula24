
import Recipe from './Recipe';
import { IRecipe } from './types';

interface IRecipeListProps {
    recipes: IRecipe[];
}

const RecipeList = ({ recipes }: IRecipeListProps) => {
    return (
        <div>
            <h2>Recipes</h2>
            <div>
                {recipes.map((recipe) => (
                    <Recipe key={recipe.id} recipeData={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
