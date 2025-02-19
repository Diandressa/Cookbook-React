import { Recipe } from "./components/Recipe";
import { Button } from "./components/Button"

const App = () => {
  const handleOpen = () => alert('Clicou allrecipes.com');

  return(
    <div>
      <Recipe
        src="../src/assets/img/pieaplle.webp"
        alt="Apple Pie Photo"
        name="Apple Pie"
        list={[{id: 1, title: '8 aplles'}]}
        font="https://www.allrecipes.com/recipe/12682/apple-pie-by-grandma-ople/"
        label="Adicionar"
      />
      <Recipe
        src="../src/assets/img/brownie.webp"
        alt="Brownie Photo"
        name="Brownie"
        list={[{id: 2, title: '½ cup butter'}]}
        font="https://www.allrecipes.com/recipe/10549/best-brownies/"
        label="Adicionar"
      />
      <Button 
        onClick={handleOpen} 
        label={'Allrecipes.com'}
      />
      
    </div>
  )
}

export default App;