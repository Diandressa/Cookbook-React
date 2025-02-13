type Props = {
    font: string
}
export const Font = ({font}:Props) => {
    return(
        <small>
            <a 
                href={font} 
                target="_blank" 
                rel="noopener noreferrer">
                Fonte
            </a>
        </small>
    )
}

//https://www.allrecipes.com/recipe/12682/apple-pie-by-grandma-ople/