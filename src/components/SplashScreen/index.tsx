import React, { useEffect, useState } from 'react';
import Spinner from "react-spinkit";
import './SplashScreen.css';

function SplashScreen() {
    const [fadeIn, setFadeIn] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
        setTimeout(() => {
            setFadeIn(true);
        }, 6000);
    }, []);

    return (
        <div className={`splash-screen ${fadeIn ? 'hidden' : ''}`}>
            <header className="Screen-header">
                {
                    loading ? <Spinner name="cube-grid" style={{ width: 100, height: 100 }} /> :
                    <div className={`Screen-logo Screen-logo  ${loading ? 'hidden' : 'visible'}`}>
                        <h2>Logo</h2>
                    </div>
                }
            </header>
        </div>
    )
}

export default SplashScreen;