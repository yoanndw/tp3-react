interface Props {
    name: string
}

export function Beer(props: Props) {
    return (
        <li>{props.name}</li>
    );
}