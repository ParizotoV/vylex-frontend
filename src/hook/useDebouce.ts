import { debounce } from 'lodash'
import { useCallback } from 'react'

export const useDebouce = (callback: (...arg: any[]) => any, time: number = 1000) => {
  const funcDebouce = useCallback(debounce(callback, time), [])

  return funcDebouce
}
