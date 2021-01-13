import { useState } from 'react'

const useLocalStorage = (key, initialValue) {
    const [storedValue, setStoredValue] = useState(()=>{
        //get local storage by key
    const item = window.locatlStorage.getItem(key);
        //parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
    });

    return [storedValue];
};

export default useLocalStorage
