
import { useState, useEffect } from 'react';


function getWindowDimensions(photowidth, photoheight) {
    const actualHeight = window.innerHeight;
    const elementHeight = document.getElementById('control-height') ? document.getElementById('control-height').clientHeight : actualHeight;
    const barHeight = elementHeight - actualHeight;

    const { innerWidth: width, innerHeight: height } = window;
    var wpadding = 0;
    var hpadding = 0;
    var pwidth = photowidth ? photowidth : 3;
    var pheight = photoheight ? photoheight : 2;

    var aWidth = width;
    var aHeight = height + barHeight;

    if (aWidth / aHeight > pwidth / pheight) {
        wpadding = (aWidth - aHeight / pheight * pwidth) / 2;
    } else {
        hpadding = (aHeight - aWidth / pwidth * pheight) / 2;
    }

    var w = aWidth - 2 * wpadding;
    var h = aHeight - 2 * hpadding;
    //hpadding -= barHeight;
    console.log('wpadding:{} hpadding{} w:{} h:{}', wpadding, hpadding, w, h);
    console.log('innerHeight: {} innerWidth: {}', height, width);
    console.log('actial : {}, element : {}, bar : {}', actualHeight, elementHeight, barHeight);

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
