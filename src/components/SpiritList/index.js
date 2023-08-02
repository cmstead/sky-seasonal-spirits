export default function SpiritList ({ spirits, update }) {
  return (
    <ul>
      {Object.keys(spirits).map(spirit => (
        <li key={spirit}>
          <input type='checkbox' checked={spirits[spirit]} onClick={() => update(spirit, spirits[spirit])}></input>
          {spirit}
        </li>
      ))}
    </ul>
  )
}
