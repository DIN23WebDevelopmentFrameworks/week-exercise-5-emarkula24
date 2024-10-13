
import RecipeTag from './RecipeTag';

interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
}

const RecipeTagList = ({ tagList, onSelectTag }: IRecipeTagListProps) => {
    return (
        <div>
            <h2>Recipe Tags</h2>
            <div>
                {tagList.map((tag) => (
                    <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
                ))}
            </div>
        </div>
    );
};

export default RecipeTagList;
