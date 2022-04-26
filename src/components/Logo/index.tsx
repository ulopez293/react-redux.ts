import './Logo.css';
import CSS from 'csstype';
import 'animate.css';

function Logo({ animation = false, navbarStyling = false }) {
    const styles: CSS.Properties = {
        width: '90%',
        height: '1px',
        fontSize: 'x-small',
        color: 'black',
        display: 'inline-table',
        margin: '5px',
        border: '3px solid black',
        textAlign: 'center',
    }
    return (
        <div className={`Screen-logo ${animation ? 'animate__animated animate__fadeIn animate__delay-1s' : ''}`}
             style={navbarStyling ? styles : {} } >
            <h2>Logo</h2>
        </div>
    )
}

export default Logo;