import { combineReducers } from 'redux';

import recipeReducer from '../reducers/recipe'
import commonReducer from '../reducers/common';

const rootReducer = combineReducers({
  // ici, on indique que notre state aurra une tranche (slice) appelée
  // recipes et que c'est le reducers recipesReducer (défini dans le module ./recipes)
  // qui en aura la charge
  // on accède à cette tranche du state par state.recipes
  recipe: recipeReducer,
  common: commonReducer,
});

export default rootReducer;