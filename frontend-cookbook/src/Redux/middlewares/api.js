import axios from 'axios'
import { GET_ALL_RECIPES, setAllRecipes } from '../actions/recipe';


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
}

export default apiMiddleware;
