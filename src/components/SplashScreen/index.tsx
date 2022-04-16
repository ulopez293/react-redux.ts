import { useState, useEffect } from 'react';
import Spinner from "react-spinkit";
import './SplashScreen.css';
import 'animate.css';

function SplashScreen() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []);
    return (
        <div>
            <header className="Screen-header animate__animated animate__bounceOut animate__delay-5s">
                {
                    loading ? <Spinner name="cube-grid" style={{ width: 100, height: 100 }} /> :
                    <div className={`Screen-logo Screen-logo animate__animated animate__fadeIn animate__delay-1s`}>
                        <h2>Logo</h2>
                    </div>
                }
            </header>
        </div>
    )
}

export default SplashScreen;