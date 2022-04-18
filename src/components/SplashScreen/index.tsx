import { useSelector} from 'react-redux';

import Spinner from "react-spinkit";
import Logo from '../Logo';
import './SplashScreen.css';
import 'animate.css';

function SplashScreen() {
    let load = useSelector((state: any) => state.load);
    return (
        <div>
            <header className="Screen-header animate__animated animate__bounceOut animate__delay-5s">
                {
                load ? <Logo /> : <Spinner name="cube-grid" style={{ width: 100, height: 100 }} />
                }
            </header>
        </div>
    )
}

export default SplashScreen;