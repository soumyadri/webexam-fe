import { useEffect, useState } from 'react';

export const useTimer = () => {
    const storedTimer = localStorage.getItem('timer');
    const initialTimer = storedTimer ? parseInt(storedTimer) : 60;
    const [timer, setTimer] = useState(initialTimer);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((t) => t > 0 ? t-1 : 0);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if(timer == 0) {
            localStorage.removeItem('timer');
        }
        const beforeUnloadHandler = () => {
            localStorage.setItem('timer', timer.toString());
        };

        window.addEventListener('beforeunload', beforeUnloadHandler);

        return () => {
            window.removeEventListener('beforeunload', beforeUnloadHandler);
        };
    }, [timer]);

    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    return {
        minutes,
        seconds,
        trigger: timer === 0 ? true : false,
    }
}