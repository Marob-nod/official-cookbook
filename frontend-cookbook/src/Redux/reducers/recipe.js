import { CHANGE_FIELD_INSTRUCTIONS_INGREDIENTS, CHANGE_FIELD_CREATE_RECIPE, CHANGE_LEVEL, SET_ALL_RECIPES } from "../actions/recipe";
import dataRecipes from '../../../src/public/data/recipes'

export const initialState = {
  allRecipes: dataRecipes,
  titleRecipe: '',
  serves: 0,
  level: 'easy',
  imgUrl: 'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
  cookingTime: 0,
  prepTime: 0,
  instructions: [],
  ingredients: []
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ALL_RECIPES:
      return {
        ...state,
        allRecipes: action.value,
      }
    case CHANGE_FIELD_CREATE_RECIPE:
      return {
        ...state,
        [action.fieldName]: action.value,
      }
    case CHANGE_LEVEL:
      return {
        ...state,
        level: action.value,
      }
    case CHANGE_FIELD_INSTRUCTIONS_INGREDIENTS:
      return {
        ...state,
        ingredients: action.value.split(', '),

      }
    default:
      return state;
  }
};

export default reducer;
