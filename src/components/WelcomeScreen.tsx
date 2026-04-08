import { useState, useEffect } from 'react';

interface WelcomeScreenProps {
    onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
    const [isExiting, setIsExiting] = useState(false);
    const [isEntering, setIsEntering] = useState(true);

    useEffect(() => {
        // Trigger entrance animation
        setTimeout(() => setIsEntering(false), 100);

        // Auto-advance after 3 seconds
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800);
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    const handleClick = () => {
        setIsExiting(true);
        setTimeout(onComplete, 800);
    };

    return (
        <div
            className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-all duration-1000 cursor-pointer ${
                isExiting ? 'opacity-0 scale-105' : isEntering ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
            onClick={handleClick}
        >
            {/* Clean minimal welcome text with scroll effect */}
            <div className="text-center overflow-hidden">
                <h1 className={`relative text-5xl md:text-6xl lg:text-7xl font-light text-accent-primary transition-all duration-1000 ${
                    isEntering ? 'translate-y-20 opacity-0' : isExiting ? '-translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
                }`}>
                    Welcome
                    {/* Elegant underline with animation */}
                    <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-1000 delay-300 ${
                        isEntering ? 'w-0 opacity-0' : isExiting ? 'w-0 opacity-0' : 'w-32 opacity-100'
                    }`}></div>
                </h1>
            </div>
        </div>
    );
};

export default WelcomeScreen;