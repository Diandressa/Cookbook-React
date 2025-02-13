type Props = {
    list: {id:number, title:string}[]
}
export const Ingredients = ({list}:Props) => {
    /*
    const list = [
        {id: 1, title: '8 aplles'},
        {id: 2, title: '½ cup butter'},
        {id: 3, title: '3 tablespoons flour'},
        {id: 4, title: '½ cup sugar'},
        {id: 5, title: '½ cup brown sugar'},
        {id: 6, title: '¼ cup water'},
        {id: 7, title: '1 double-crust pie pastry'}
    ]
    */
    return(
        <ul>
            { list.map((item, key) => (
                <li key={key}>
                    {item.title}
                </li>
            ))}
        </ul>
    )
}