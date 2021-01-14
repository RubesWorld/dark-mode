import react from 'react'
import useLocalStorage from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
    const [on,setOn] = useLocalStorage(key, initialValue)

    return [on,setOn]
};

export default useDarkMode
