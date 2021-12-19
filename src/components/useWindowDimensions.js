
import { useState, useEffect } from 'react';


function getWindowDimensions(photowidth, photoheight) {
    const { innerWidth: width, innerHeight: height } = window;
    var wpadding = 0;
    var hpadding = 0;
    var pwidth = photowidth ? photowidth : 3;
    var pheight = photoheight ? photoheight : 2;

    if (width / height > pwidth / pheight) {
        wpadding = (width - height / pheight * pwidth) / 2;
    } else {
        hpadding = (height - width / pwidth * pheight) / 2;
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

export default function useWindowDimensions(photowidth, photoheight) {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions(photowidth, photoheight));

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
