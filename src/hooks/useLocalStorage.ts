import { useState } from "react"

type UseLocalStorageState<T> = [T, (data: T) => void]

// React Hook for using localStorage. Similar to useState hook
const useLocalStorage = <T>(key: string, initialData: T): UseLocalStorageState<T> => {
  const [storedData, setStoredData] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialData
    } catch (error) {
      return initialData
    }
  })

  const setter = (data: T) => {
    try {
      setStoredData(data)
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedData, setter] as UseLocalStorageState<T>
}

export default useLocalStorage
