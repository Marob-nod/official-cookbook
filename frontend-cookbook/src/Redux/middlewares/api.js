import axios from 'axios'
import { CREATE_RECIPE, GET_ALL_RECIPES, setAllRecipes } from '../actions/recipe';


const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_RECIPES: {
      const optionsAxios = store.getState().optionsAxios;
      axios.get('http://localhost:3001/recipes', optionsAxios)
        .then((response) => {
          store.dispatch(setAllRecipes(response.data))
        }).catch(
          (error) => console.log('error'),
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
  switch (action.type) {
    case CREATE_RECIPE: {
      // const optionsAxios = store.getState().optionsAxios;
      // axios.get('http://localhost:3001/recipes', optionsAxios, {
      //   "title": titleRecipe,
      //   "cookingTime": cookingTime,
      //   "prepTime": prepTime,
      //   "serves": serves,
      //   "level": level,
      //   "ingredients": ingredients,
      //   "instructions": instructions,
      //   "imgUrl": imgUrl
      // })
      //   .then((response) => {
      //   }).catch(
      //     (error) => console.log('error'),
      //   );
      next(action);
      break;
    }
    default:
      next(action);
  }
}

export default apiMiddleware;
