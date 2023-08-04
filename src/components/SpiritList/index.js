import { seasonData } from '../SeasonList/spiritData'

export default function SpiritList ({ seasonName, spirits, update }) {
  return (
    <ul>
      {Object.keys(spirits).map(spiritName => (
        <li key={spiritName}>
          <input
            type='checkbox'
            id={spiritName}
            name={spiritName}
            defaultChecked={spirits[spiritName]}
            disabled={!seasonData[seasonName][spiritName].visited}
            onClick={() => update(spiritName, spirits[spiritName])}
          ></input>
          <label
            htmlFor={spiritName}
            className={seasonData[seasonName][spiritName].visited ? 'visited' : 'not-visited'}
          >
            {spiritName}
          </label>
        </li>
      ))}
    </ul>
  )
}
