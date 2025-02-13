type Props = {
    name: string
}

export const Title = ({name}:Props) => {
    //let name = 'Apple Pie'
    
    return(
        <h4>{name}</h4>
    )
}