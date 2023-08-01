export default function SpiritList({spirits}) {
    return (
        <ul>
            {Object.keys(spirits).map(spirit => <li>{spirit}</li>)}
        </ul>
    )
}