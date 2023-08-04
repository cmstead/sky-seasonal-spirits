import SpiritList from '../SpiritList'
import { spiritData } from './spiritData'
import useStoredState from '../../hooks/useStoredState'
import MarkdownList from '../MarkdownList'

const initialState = spiritData

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

  const totalSpiritCount = Object.keys(spirits).reduce(
    (sum, seasonName) => sum + Object.keys(spirits[seasonName]).length,
    0
  )

  function sumCollectedSpirits (season) {
    return Object.keys(season).reduce(
      (sum, spiritName) => (season[spiritName] ? sum + 1 : sum),
      0
    )
  }

  const collectedSpiritCount = Object.keys(spirits).reduce(
    (sum, seasonName) => sum + sumCollectedSpirits(spirits[seasonName]),
    0
  )

  function isSeasonComplete (spirits) {
    return Object.keys(spirits).length === sumCollectedSpirits(spirits)
  }

  return (
    <div>
      <div id='ts-count'>
        <strong>Traveling Spirits Collected:</strong> {collectedSpiritCount}/
        {totalSpiritCount}
      </div>
      <ol>
        {Object.keys(spirits).map(seasonName => (
          <li
            className={
              isSeasonComplete(spirits[seasonName])
                ? 'season-complete'
                : 'season-incomplete'
            }
          >
            <strong>{seasonName}</strong>
            <SpiritList
              key={seasonName}
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
