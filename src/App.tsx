import { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';
import { IRecipe } from './types';

const App = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    // Fetch recipe tags when the component mounts
    useEffect(() => {
        fetch("https://dummyjson.com/recipes/tags")
            .then((response) => response.json())
            .then((data) => setTags(data))
            .catch((error) => console.error("Error fetching tags:", error));
    }, []);

    // Fetch recipes when a tag is selected
    useEffect(() => {
        if (selectedTag) {
            fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
                .then((response) => response.json())
                .then((data) => setRecipes(data.recipes))  // assuming the API returns an array of recipes
                .catch((error) => console.error("Error fetching recipes:", error));
        }
    }, [selectedTag]);

    return (
        <div>
            <h1>ACME Recipe O'Master</h1>
            <RecipeTagList tagList={tags} onSelectTag={setSelectedTag} />
            {selectedTag && <RecipeList recipes={recipes} />}
        </div>
    );
};

export default App;
