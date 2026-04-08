import { useState, useEffect } from 'react';

const Quotes = () => {
    const quotes = [
        {
            text: "Thank you for exploring my journey so far. Now, I'd love to hear about yours. Feel free to reach out and let's connect.",
            author: "me"
        },
        {
            text: "Mistake increases your experience & experience decreases your mistakes.If you learn your mistakes than other learn from Success..",
            author: "Dr. APJ Abdul Kalam"
        },
        {
            text: "Every Successful Person Has A\n" +
                "Painful Story.\n" +
                "Every Painful Story Has A\n" +
                "Successful Ending.\n" +
                "Accept The Pain And Gel Ready\n" +
                "For Success.",
            author: ""
        },
        {
            text: "Experience is the name everyone gives to their mistakes",
            author: "Oscar Wilde"
        },
        {
            text: "Every delayed prayer is just God's way of saying hold on ,I'm making it bigger.",
            author: ""
        },
        {
            text: "If everything was achieved, what would we desire ?",
            author: ""
        },
        {
            text: "Sometimes being alone is better than being taken for granted.",
            author: ""
        },
         {
            text: "Pain changes people… but it can also build them.",
            author: ""
        }
    ];

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
                setIsVisible(true);
            }, 1000);
        }, 10000);

        return () => clearInterval(interval);
    }, [quotes.length]);

    return (
        <div className="container mx-auto px-4 py-20 relative">
            {/* Decorative circles */}
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-accent-secondary/10 rounded-full blur-2xl"></div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <div
                    className={`transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    <blockquote
                        className="text-2xl md:text-3xl italic text-White-800 mb-6 leading-relaxed"
                        style={{ fontFamily: "'Share Tech', sans-serif" }}
                    >
                        {quotes[currentQuoteIndex].text}
                    </blockquote>

                    <cite
                        className="block text-xl md:text-2xl text-[#4A90E2] mt-4 not-italic"
                        style={{ fontFamily: "'Share Tech', sans-serif" }}
                    >
                        — {quotes[currentQuoteIndex].author}
                    </cite>

                </div>
            </div>
        </div>
    );
};

export default Quotes;
