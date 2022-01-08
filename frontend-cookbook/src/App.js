import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home-page'
import './App.scss';
import RecipesPage from './pages/Recipes'
import RecipePage from './pages/Recipe'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import CreateRecipe from './pages/Create-recipe'
import ProfilPage from './pages/Profil'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>

        </Route>
        <Route path="/recipes" element={<RecipesPage />}>

        </Route>
        <Route path="/login" element={<LoginPage />}>

        </Route>
        <Route path="/signup" element={<SignupPage />}>

        </Route>
        <Route path="/profil" element={<RecipePage />}>

        </Route>
        <Route path="/create-recipe" element={<CreateRecipe />}>

        </Route>
        <Route>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
