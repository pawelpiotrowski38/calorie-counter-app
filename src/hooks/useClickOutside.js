import { useEffect } from "react";

export default function useClickOutside(ref, callback) {

    useEffect(() => {
        const listener = (event) => {
            if (ref && ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };
    
        document.addEventListener("mousedown", listener);
    
        return () => {
            document.removeEventListener("mousedown", listener);
        };
    }, [ref, callback]);
}
