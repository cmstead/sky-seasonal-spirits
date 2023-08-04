import SpiritList from '../SpiritList'
import { seasonData, spiritData } from './spiritData'
import useStoredState from '../../hooks/useStoredState'
// import MarkdownList from '../MarkdownList'

const initialState = spiritData

function countAvailableSpirits (spirits) {
  return Object.keys(spirits).reduce(
    (count, spiritName) => (spirits[spiritName].visited ? count + 1 : count),
    0
  )
}

function countTotalSpirits (seasonData) {
  return Object.keys(seasonData).reduce(
    (sum, seasonName) => sum + countAvailableSpirits(seasonData[seasonName]),
    0
  )
}

function countAllSpirits(seasonData) {
  return Object.keys(seasonData).reduce(
    (sum, seasonName) => sum + Object.keys(seasonData[seasonName]).length,
    0
  )
}

function sumCollectedSpirits (season) {
  return Object.keys(season).reduce(
    (sum, spiritName) => (season[spiritName] ? sum + 1 : sum),
    0
  )
}

function countCollectedSpirits (spirits) {
  return Object.keys(spirits).reduce(
    (sum, seasonName) => sum + sumCollectedSpirits(spirits[seasonName]),
    0
  )
}

function isSeasonComplete (spirits) {
  return Object.keys(spirits).length === sumCollectedSpirits(spirits)
}

export default function SeasonList () {
  const [spirits, setSpirits] = useStoredState('spiritState', initialState)

  function updateSelection (seasonName, spiritName, value) {
    const newState = {
      ...spirits
    }

    const newSeasonState = {
      ...spirits[seasonName]
    }

    newSeasonState[spiritName] = !value

    newState[seasonName] = newSeasonState

    setSpirits(newState)
  }

  return (
    <div>
      <div id='ts-count'>
        <strong>Traveling Spirits Collected:</strong>{' '}
        {countCollectedSpirits(spirits)}/{countTotalSpirits(seasonData)}
      </div>
      <div id='spirit-count'>
        <strong>Total Seasonal Spirits In Game:</strong>{' '}
        {countAllSpirits(seasonData)}
      </div>
      <ol>
        {Object.keys(spirits).map(seasonName => (
          <li
            key={seasonName}
            className={
              isSeasonComplete(spirits[seasonName])
                ? 'season-complete'
                : 'season-incomplete'
            }
          >
            <strong>{seasonName}</strong>
            <SpiritList
              key={seasonName}
              seasonName={seasonName}
              spirits={spirits[seasonName]}
              update={(spiritName, value) =>
                updateSelection(seasonName, spiritName, value)
              }
            ></SpiritList>
          </li>
        ))}
      </ol>
      {/* <MarkdownList spiritList={spirits}></MarkdownList> */}
    </div>
  )
}
