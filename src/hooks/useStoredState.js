import { useState } from 'react'

function mergeInitialState (storedState, initialState) {
  if (typeof storedState === 'object' && typeof initialState === 'object') {
    return {
      ...initialState,
      ...storedState
    }
  }

  return storedState
}

export default function useStoredState (stateName, initialState) {
  const storedState = localStorage.getItem(stateName)
  const pageStateString = storedState
    ? storedState
    : JSON.stringify(initialState)
  const pageState = mergeInitialState(JSON.parse(pageStateString), initialState)

  const [state, setState] = useState(pageState)

  function setStoredState (newState) {
    localStorage.setItem(stateName, JSON.stringify(newState))
    setState(newState)
  }

  return [state, setStoredState]
}
