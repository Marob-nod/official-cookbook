import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>

        </Route>
        <Route path="/recipes" element={<RecipesPage />}>

        </Route>
        <Route path="/recipes/:_id" element={<RecipePage />}>

        </Route>
        <Route path="/login" element={<LoginPage />}>

        </Route>
        <Route path="/signup" element={<SignupPage />}>

        </Route>
        <Route path="/profil" element={<ProfilPage />}>

        </Route>
        <Route path="/create-recipe" element={<CreateRecipe />}>

        </Route>

        <Route path="*" element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
