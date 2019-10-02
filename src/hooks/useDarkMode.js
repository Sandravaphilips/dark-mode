import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);

    useEffect(() => {
        const body = document.querySelector('body');
        value ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
    }, [value])

    return [value, setValue];
}

export default useDarkMode;