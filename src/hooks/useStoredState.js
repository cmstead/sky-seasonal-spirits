import { useState } from 'react'

export default function useStoredState (stateName, initialState) {
  const storedState = localStorage.getItem(stateName)
  const pageState = storedState ? storedState : JSON.stringify(initialState)

  const [state, setState] = useState(JSON.parse(pageState))

  function setStoredState (newState) {
    console.log('setting new stored state', newState)
    localStorage.setItem(stateName, JSON.stringify(newState))
    setState(newState)
  }

  console.log(state)

  return [state, setStoredState]
}
