interface Props {
    name: string,
    onRemove: () => void
}

export function Beer(props: Props) {
    return (
        <li>
            {props.name}
            <button onClick={props.onRemove}>Remove</button>
        </li>
    );
}