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

    const [favoritesRecipe, setfavoritesRecipe] = useState<{name: string; comment: string}[]>([]);

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const commentRecipe = () => {
        if(comment == '' && name == ''){
            alert('Comente antes de enviar')
            return
        }

        setfavoritesRecipe([...favoritesRecipe, {name: name, comment: comment}])

        setName('');
        setComment('');
    }

    const deleteComment = (key:number) => {
        setfavoritesRecipe(favoritesRecipe.filter((_value, index) => index != key))
        //index ≠ key ?
        // false (o index é igual a key)
        //false nao filtra e consequentemente nao seta
    }

    if(show){
        return(
            <>
                <ImgRecipe src={props.src} alt={props.alt}/>
                <Title name={props.name}/>
                <Ingredients list={props.list}/>
                <Font font={props.font}/>
                <form>
                    <fieldset>
                        <legend>Commment about Recipe</legend>
                        <p>
                            <label htmlFor="name">Name:</label><br></br>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                id="name"
                            />
                        </p>
                    
                        <p>
                            <label htmlFor="comment">Comment:</label><br></br>
                            <textarea
                                onChange={(e) => setComment(e.target.value)}
                                value={comment}
                                id="comment"
                            />
                        </p>
                    </fieldset>
                </form>
                <Button 
                    onClick={commentRecipe} 
                    label={'Send'}
                />
                
                <div>
                    <ul>
                        {favoritesRecipe.map((value, key) => (
                            <li key={key}>
                                Name: {value.name}<br></br>
                                Comment: {value.comment} 
                                <Button
                                    onClick={() => deleteComment(key)}
                                    label="Excluir"
                                />
                            </li>
                        ))}
                    </ul>
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