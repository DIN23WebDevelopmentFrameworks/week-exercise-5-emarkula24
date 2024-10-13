
import { IRecipe } from './types';

interface IRecipeProps {
    recipeData: IRecipe;
}

const Recipe = ({ recipeData }: IRecipeProps) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <h3>{recipeData.name}</h3>
            <img src={recipeData.image} alt={recipeData.name} style={{ width: '100px', height: '100px' }} />
            <p><strong>Servings:</strong> {recipeData.servings}</p>
            <p><strong>Prep Time:</strong> {recipeData.prepTimeMinutes} minutes</p>
            <p><strong>Cook Time:</strong> {recipeData.cookTimeMinutes} minutes</p>
            <p><strong>Difficulty:</strong> {recipeData.difficulty}</p>
            <p><strong>Ingredients:</strong> {recipeData.ingredients.join(', ')}</p>
            <p><strong>Instructions:</strong></p>
            <ol>
                {recipeData.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;
