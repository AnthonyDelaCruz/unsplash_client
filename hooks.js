import React from 'react'

export const useImageToggleHook = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const [imgIndex, setImgIndex] = React.useState(1);

    const toggleLightBox = i => {
        setImgIndex(i + 1);
        setIsVisible(!isVisible);
    };

    return {
        toggleLightBox,
        imgIndex,
        isVisible
    }
}