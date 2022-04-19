import { useSelector } from 'react-redux'
import useDisplayNoneTimer from '../../hooks/useDisplayNoneTimer'

import Spinner from "react-spinkit"
import Logo from '../Logo'
import './SplashScreen.css'
import 'animate.css'

function SplashScreen() {
    let load = useSelector((state: any) => state.load)
    const display = useDisplayNoneTimer(6000)
    return (
        <header className="Screen-header animate__animated animate__bounceOut animate__delay-5s" style={display}>
            { load ? <Logo animation={true} /> : <Spinner name="cube-grid" style={{ width: 100, height: 100 }} />}
        </header>
    )
}

export default SplashScreen