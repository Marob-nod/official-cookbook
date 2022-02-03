export const SET_ALL_RECIPES = 'SET_ALL_RECIPES';
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const CREATE_RECIPE = 'CREATE_RECIPE';

export const CHANGE_LEVEL = 'CHANGE_LEVEL';
export const CHANGE_FIELD_CREATE_RECIPE = 'CHANGE_FIELD_CREATE_RECIPE'
export const CHANGE_FIELD_INSTRUCTIONS_INGREDIENTS = 'CHANGE_FIELD_INSTRUCTIONS_INGREDIENTS'

export const setAllRecipes = (value) => (
  {
    type: SET_ALL_RECIPES,
    value,
  }
);
export const getAllRecipes = () => (
  {
    type: GET_ALL_RECIPES,
  }
);
export const createRecipe = (ingredients, instructions) => (
  {
    type: CREATE_RECIPE,
    ingredients,
    instructions,
  }
);
export const changeLevel = (value) => (
  {
    type: CREATE_RECIPE,
    value,
  }
);
export const changeFieldInstructionsIngredients = (value, fieldName) => (
  {
    type: CHANGE_FIELD_INSTRUCTIONS_INGREDIENTS,
    fieldName,
  }
);
export const changeFieldCreateRecipe = (value, fieldName) => (
  {
    type: CREATE_RECIPE,
    value,
    fieldName,
  }
)
