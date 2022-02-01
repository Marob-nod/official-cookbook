import { CHANGE_COOKINGTIME, CHANGE_IMGURL, CHANGE_INGREDIENTS, CHANGE_INSTRUCTIONS, CHANGE_LEVEL, CHANGE_PREPTIME, CHANGE_SERVES, CHANGE_TITLERECIPE, SET_ALL_RECIPES } from "../actions/recipe";
import dataRecipes from '../../../src/public/data/recipes'

export const initialState = {
  allRecipes: [],
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
    case CHANGE_TITLERECIPE:
      return {
        ...state,
        titleRecipe: action.value,
      }
    case CHANGE_SERVES:
      return {
        ...state,
        serves: action.value,
      }
    case CHANGE_LEVEL:
      return {
        ...state,
        level: action.value,
      }
    case CHANGE_IMGURL:
      return {
        ...state,
        imgUrl: action.value,
      }
    case CHANGE_COOKINGTIME:
      return {
        ...state,
        cookingTime: action.value,
      }
    case CHANGE_PREPTIME:
      return {
        ...state,
        prepTime: action.value,
      }
    case CHANGE_INSTRUCTIONS:
      return {
        ...state,
        instructions: action.value,
      }
    case CHANGE_INGREDIENTS:
      return {
        ...state,
        ingredients: action.value,
      }
    default:
      return state;
  }
};

export default reducer;
