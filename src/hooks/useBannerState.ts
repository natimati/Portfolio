import { useState, useEffect } from "react";

function useBannerState() {
    const [highlightedArea, setHighlightedArea] = useState<null | 'Nati' | 'Beti'>(null);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (highlightedArea === null) {
                setHighlightedArea("Nati"); 
            } else if (highlightedArea === 'Nati') {
                setHighlightedArea("Beti");
            } else {
                setHighlightedArea(null);
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, [highlightedArea])
    return highlightedArea;
}

export default useBannerState;
