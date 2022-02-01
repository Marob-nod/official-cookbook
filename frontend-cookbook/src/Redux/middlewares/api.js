import axios from 'axios'
import { SET_ALL_RECIPES } from '../actions/recipe';


const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SET_ALL_RECIPES: {

      console.log('Entrée dans le middleware avec action :', action)
      const { optionsAxios } = store.getState().optionsAxios;

      axios.get('http://localhost:3001/recipes', optionsAxios)
        .then((response) => {
          console.log('All the recipes: ', response.data)
        }).catch(
          (error) => console.log('error'),
        );
      next(action);
      break;
    }

    // case SIGN_UP: {

    //   const { email, password, confirmedPassword, firstName, lastName, gender } = 
    //   console.log('Soumission du formulaire avec le formulaire : ', email, password, confirmedPassword, firstName, lastName, gender );


    //   axios.post('https://lets-be-friend.herokuapp.com/v1/user/login', {
    //         email: email,
    //         password: password,
    //         confirmedPassword: confirmedPassword,
    //         firstName: firstName,
    //         lastName: lastName,
    //         gender: gender,
    //       }).then((response) => {
    //         console.log('Vous avez soumis le formulaire Login, voici la réponse de l API: ', response)
    //       }).catch(
    //       (error) => console.log('error'),
    //     );
    //   next(action);
    //   break;
    // }

    default:
      next(action);
  }
}

export default authMiddleware;
