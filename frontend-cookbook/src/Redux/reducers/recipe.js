import { SET_ALL_RECIPES } from "../actions/recipe";
import dataRecipes from '../../../src/public/data/recipes'

export const initialState = {
  allRecipes: dataRecipes,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: action.value,
      }
    default:
      return state;
  }
};

export default reducer;
