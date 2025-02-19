type Props = {
    label: string;
    onClick: () => void
}

export const Button = ({onClick, label}:Props) => {
    return(
        <button onClick={onClick}>
            {label}
        </button>
    )
}