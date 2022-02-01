import { SET_ALL_RECIPES } from "../actions/recipe";

export const initialState = {
    optionsAxios: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_ALL_RECIPES:
            return {
                ...state,
                recipes: action.value,
            }
        default:
            return state;
    }
};

export default reducer;