import React, { useState, useEffect } from 'react';
import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';

function Home() {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const handleWindowSizeChange = () => {
        if(window.innerWidth <= 600 && window.matchMedia("(pointer: coarse) and (hover: none)").matches){
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    return (
        isMobile ? (
            <HomeMobile />
        ) : (
            <HomeDesktop />
        )

    );
}

export default Home;


