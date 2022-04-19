import './Logo.css';
import 'animate.css';

function Logo({ animation = false }) {
    return (
        <div className={`Screen-logo ${animation ? 'animate__animated animate__fadeIn animate__delay-1s' : ''}`}>
            <h2>Logo</h2>
        </div>
    )
}

export default Logo;