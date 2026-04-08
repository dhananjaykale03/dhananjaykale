import { useScrollReveal } from '@/hooks/useScrollReveal';

const About = () => {
    const aboutRef = useScrollReveal();

    return (
        <section ref={aboutRef} id="about" className="section-padding relative">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-left mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-text-primary">
                        About Me
                    </h2>
                    <div className="w-16 h-1 bg-accent-primary mb-8"></div>
                </div>

                <div className="max-w-5xl text-left">
                    <p className="text-lg text-text-secondary leading-relaxed mb-6">
                        I’m a 21-year-old Full-Stack Developer from📍Wardha who loves 👨‍💻 building websites and web applications. I enjoy working on both the front-end and back-end, creating projects that are fast, easy to use, and helpful for people. I like turning ideas into real applications that solve problems and make life simpler.

                    </p>

                    <p className="text-lg text-text-secondary leading-relaxed">
                        I specialize in frontend development with expertise in React, TypeScript, and modern web technologies. I 💗 turning complex problems into simple, beautiful, and intuitive solutions that users enjoy interacting with.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;