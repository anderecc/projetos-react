import { useEffect, useState } from 'react';

export function useWindowSize() {
    let [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        let handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width;
}
