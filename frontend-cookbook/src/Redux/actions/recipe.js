export const SET_ALL_RECIPES = 'SET_ALL_RECIPES';
export const GET_ALL_RECIPES = 'GET_ALL_RECIPES';

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

