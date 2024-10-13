
interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

const RecipeTag = ({ tagName, onSelectTag }: IRecipeTagProps) => {
    return (
        <button onClick={() => onSelectTag(tagName)} style={{ margin: '5px' }}>
            {tagName}
        </button>
    );
};

export default RecipeTag;
