type Props = {
    src: string
    alt: string
}

export const ImgRecipe = ({src, alt}:Props) => {
    return(
        <img 
            src={src}
            alt={alt}
            onClick={()=>alert('Pie apple')}
        />
    )
}

//../src/assets/img/pieaplle.webp