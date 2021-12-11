
import { useState, useEffect } from 'react';


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    var wpadding = 0;
    var hpadding = 0;

    if (width / height > 3 / 2) {
        wpadding = (width - height / 2 * 3) / 2;
    } else {
        hpadding = (height - width / 3 * 2) / 2;
    }

    var w = width - 2 * wpadding;
    var h = height - 2 * hpadding;
    console.log('wpadding:{} hpadding{} w:{} h:{}', wpadding, hpadding, w, h);

    return {
        wpadding,
        hpadding,
        w,
        h
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
