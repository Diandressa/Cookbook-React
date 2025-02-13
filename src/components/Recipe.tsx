import { ButtonClose } from "./ButtonClose"
import { Font } from "./Font"
import { ImgRecipe } from "./ImgRecipe"
import { Ingredients } from "./Ingredients"
import { Title } from "./Title"

export const Recipe = () => {
    const show = true;
    if(show){
        return(
            <>
                <ImgRecipe src="../src/assets/img/pieaplle.webp" alt="Apple Pie Photo"/>
                <Title name="Apple Pie"/>
                <Ingredients list={ [{id: 1, title: '8 aplles'}] }/>
                <Font font='https://www.allrecipes.com/recipe/12682/apple-pie-by-grandma-ople/'/>
                <div>
                    { show && <ButtonClose/>}
                </div>
                
            </>
        )
    }
}
