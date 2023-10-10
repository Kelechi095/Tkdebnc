import { useEffect, useState } from 'react'

const useDebounce = (value: string, delay = 1000) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const id = setTimeout(() => {
            setDebouncedValue(value)
        }, 1000)
        return () => clearTimeout(id)
    }, [value, delay])

  return debouncedValue
}

export default useDebounce