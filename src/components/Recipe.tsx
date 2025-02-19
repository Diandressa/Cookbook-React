import { Button } from "./Button"
import { Font } from "./Font"
import { ImgRecipe } from "./ImgRecipe"
import { Ingredients } from "./Ingredients"
import { Title } from "./Title"
import { useState, ChangeEvent } from "react"


type Props = {
    name: string;
    src: string;
    alt: string;
    list: {id:number, title:string}[];
    font: string;
    label: string;
}

export const Recipe = (props: Props) => {
    const show = true;

    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(count + 1);
        alert(count)
    }

    const [value, setValue] = useState('');

    const comment = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    if(show){
        return(
            <>
                <ImgRecipe src={props.src} alt={props.alt}/>
                <Title name={props.name}/>
                <Ingredients list={props.list}/>
                <Font font={props.font}/>
                <p>Comment:</p>
                <input 
                    onChange={comment}
                    value={value}
                />
                <p>{value}</p>
                <div>
                    { show && <Button onClick={handlePlus} label={props.label}/>}
                </div>
                
            </>
        )
    }
}

// ../src/assets/img/pieaplle.webp
// Apple Pie Photo
// Apple Pie
// [{id: 1, title: '8 aplles'}]
// https://www.allrecipes.com/recipe/12682/apple-pie-by-grandma-ople/