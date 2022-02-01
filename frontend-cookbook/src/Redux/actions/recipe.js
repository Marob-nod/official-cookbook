export const SET_ALL_RECIPES = 'SET_ALL_RECIPES';
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';
export const CREATE_RECIPE = 'CREATE_RECIPE';

export const CHANGE_TITLERECIPE = 'CHANGE_TITLERECIPE';
export const CHANGE_SERVES = 'CHANGE_SERVES';
export const CHANGE_IMGURL = 'CHANGE_IMGURL';
export const CHANGE_COOKINGTIME = 'CHANGE_COOKINGTIME';
export const CHANGE_PREPTIME = 'CHANGE_PREPTIME';
export const CHANGE_INSTRUCTIONS = 'CHANGE_INSTRUCTIONS';
export const CHANGE_INGREDIENTS = 'CHANGE_INGREDIENTS';
export const CHANGE_LEVEL = 'CHANGE_LEVEL';
export const CHANGE_FIELD_CREATE_RECIPE = 'CHANGE_FIELD_CREATE_RECIPE'

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
export const createRecipe = () => (
  {
    type: CREATE_RECIPE,
  }
);
export const changeTitleRecipe = (value) => (
  {
    type: CREATE_RECIPE,
    value,
  }
);
export const changeServes = (value) => (
  {
    type: CREATE_RECIPE,
    value,
  }
);
export const changeLevel = (value) => (
  {
    type: CREATE_RECIPE,
    value,
  }
);
export const changeIngredients = (value) => (
  {
    type: CREATE_RECIPE,
    value,
  }
);
export const changeInstructions = (value) => (
  {
    type: CREATE_RECIPE,
    value,
  }
);
export const changeCookingTime = (value) => (
  {
    type: CREATE_RECIPE,
    value,
  }
);
export const changePrepTime = (value) => (
  {
    type: CREATE_RECIPE,
    value,
  }
);
export const changeImgUrl = (value) => (
  {
    type: CREATE_RECIPE,
    value,
  }
);
export const changeFieldCreateRecipe = (value, fieldName) => (
  {
    type: CREATE_RECIPE,
    value,
    fieldName,
  }
)
