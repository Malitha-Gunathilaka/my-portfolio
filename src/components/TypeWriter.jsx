import { useState, useEffect } from 'react';

const TypeWriter = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const phrases = [
        "Web & Mobile App Development",
        "IoT-Based Systems",
        "Embedded Systems",
        "Software Engineering"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 4000); // Change text every 4 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setDisplayText(''); // Clear text when phrase changes
        let currentText = '';
        let charIndex = 0;

        const typeInterval = setInterval(() => {
            if (charIndex < phrases[currentIndex].length) {
                currentText += phrases[currentIndex][charIndex];
                setDisplayText(currentText);
                charIndex++;
            }
        }, 100); // Typing speed

        return () => clearInterval(typeInterval);
    }, [currentIndex]);

    return (
        <span className="typewriter text-xl md:text-3xl text-gray-300">
            {displayText}
        </span>
    );
};

export default TypeWriter;