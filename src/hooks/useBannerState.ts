import { useState, useEffect } from "react";

function useBannerState(enabled: boolean) {
    const [highlightedArea, setHighlightedArea] = useState<null | 'Nati' | 'Beti'>(null);
    useEffect(() => {
        if (!enabled) {
            return;
        }

        const intervalId = setInterval(() => {
            if (highlightedArea === null) {
                setHighlightedArea("Nati"); 
            } else if (highlightedArea === 'Nati') {
                setHighlightedArea("Beti");
            } else {
                setHighlightedArea(null);
            }
        }, 7000);

        return () => clearInterval(intervalId);
    }, [highlightedArea, enabled])
    return highlightedArea;
}

export default useBannerState;
