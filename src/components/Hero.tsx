import { useState } from 'react';
import { FileText, Github, Linkedin, Instagram, MessageCircle, ArrowDownToLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useScrollReveal } from '@/hooks/useScrollReveal';


const Hero = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const { currentText } = useTypingEffect({
        words: ['Web Developer', 'FullStack Developer', ],
        typeSpeed: 100,
        deleteSpeed: 50,
        delayBetweenWords: 2000,
    });

    const heroRef = useScrollReveal();

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const openResume = () => {
        setIsResumeOpen(true);
    };

    return (
        <section
            ref={heroRef}
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Minimal overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/10 to-transparent" />

            <div className="section-padding relative z-20">
                <div className="flex items-center justify-end pr-20 lg:pr-64">
                    {/* Text Content */}
                    <div className="animate-fade-in text-left max-w-6xl">
                        <div className="mb-4">
                            <h1 className="text-4xl font-normal text-text-primary mb-2">
                                Hi,👋
                            </h1>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                                I'm{' '}
                                <span className="text-gradient">
                  Dhananjay Kale
                </span>
                            </h2>

                            <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-light">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-shift">
                  {currentText}
                </span>
                            </h3>
                        </div>

                        <p className="text-lg text-text-muted mb-8 max-w-3xl leading-relaxed">
                            Building scalable, fast, and reliable web applications that are easy to use and maintain with modern web technologies.
                        </p>

                        <div className="mb-12">
                            <a
                                href="https://drive.google.com/uc?export=download&id=1R5XNDeLE3qxzDU94G2u2wXxqxKlky1K3"
                                download
                            >
                                <Button className="bg-accent-primary hover:bg-interactive-hover text-background px-2 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center hover:gap-3">
                                <FileText className="mr-0 h-4 w-4" />
                                    CV
                                </Button>
                            </a>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-6">
                            <a
                                href="https://github.com/dhananjaykale03"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-accent-primary transition-colors p-2"
                            >
                                <Github size={24} />
                            </a>

                            <a
                                href="https://www.instagram.com/dhananjaykale__143?igsh=MWV6dTVkdHZ3ZnF5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-accent-primary transition-colors p-2"
                            >
                                <Instagram size={24} />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/dhananjaykale-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-accent-primary transition-colors p-2"
                            >
                                <Linkedin size={24} />
                            </a>

                            <a
                                href="https://wa.me/qr/PHVHIOSB6XNQO1  "
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-muted hover:text-accent-primary transition-colors p-2"
                            >
                                <MessageCircle size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;