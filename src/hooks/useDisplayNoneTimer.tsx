import { useState, useEffect } from 'react';

function useDisplayNoneTimer(seconds: number) {
    const [display, setDisplay] = useState({ display: '' })
    useEffect(() => {
        setTimeout(() => { setDisplay({ display: 'none' }) }, seconds);
    }, [display, seconds])

    return display
}

export default useDisplayNoneTimer