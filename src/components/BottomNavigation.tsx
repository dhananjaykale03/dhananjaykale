import { useState } from 'react';
import { Home, User, Menu, Moon, Sun, X, Briefcase, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';

const BottomNavigation = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [isNavOpen, setIsNavOpen] = useState(true);
    const { theme, setTheme } = useTheme();

    const navItems = [
        { id: 'home', icon: Home, label: 'Home', href: '#home' },
        { id: 'about', icon: User, label: 'About', href: '#about' },
        { id: 'theme', icon: theme === 'dark' ? Sun : Moon, label: 'Theme', isTheme: true },
        { id: 'projects', icon: Briefcase, label: 'Projects', href: '#projects' },
        { id: 'contact', icon: Mail, label: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (href, id) => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
        setActiveItem(id);
    };

    const handleItemClick = (item) => {
        if (item.isTheme) {
            setTheme(theme === 'dark' ? 'light' : 'dark');
            setActiveItem(item.id);
        } else {
            scrollToSection(item.href, item.id);
        }
    };

    return (
        <>
            {/* Hamburger (Menu) Button - Bottom Left */}
            {!isNavOpen && (
                <button
                    onClick={() => setIsNavOpen(true)}
                    className="fixed bottom-8 left-8 z-50 bg-surface/90 backdrop-blur-xl rounded-full p-3 shadow-lg border border-border
          hover:bg-surface transition-all duration-500 ease-out transform hover:scale-110 animate-fade-in-left"
                >
                    <Menu size={22} className="text-text-primary" />
                </button>
            )}

            {/* Bottom Navigation Bar */}
            <div
                className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 
        transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isNavOpen ? 'opacity-100 animate-swipe-in-center' : 'opacity-0 animate-swipe-out-left'}`}
            >
                <nav className="bg-surface/90 backdrop-blur-xl rounded-3xl px-6 py-2 shadow-lg border border-border">
                    <div className="flex items-center justify-between space-x-8">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsNavOpen(false)}
                            className="text-text-muted hover:text-text-primary transition-transform duration-500 ease-in-out transform hover:rotate-90 hover:scale-110"
                        >
                            <X size={18} strokeWidth={1.5} />
                        </button>

                        {/* Navigation Items */}
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeItem === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleItemClick(item)}
                                    className={`relative flex flex-col items-center transition-all duration-300 ${
                                        isActive
                                            ? 'text-accent-primary scale-110'
                                            : 'text-text-muted hover:text-text-primary'
                                    }`}
                                >
                                    <Icon size={20} strokeWidth={1.5} />
                                    {isActive && (
                                        <>
                      <span className="text-xs font-medium mt-1 text-accent-primary animate-fade-in">
                        {item.label}
                      </span>
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent-primary rounded-full animate-pulse"></div>
                                        </>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </nav>
            </div>

            {/* ✨ Custom Animations */}
            <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.5s ease-out;
        }

        @keyframes swipeInCenter {
          from {
            opacity: 0;
            transform: translateX(-200%) translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        .animate-swipe-in-center {
          animation: swipeInCenter 0.7s ease-in-out;
        }

        @keyframes swipeOutLeft {
          from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          to {
            opacity: 0;
            transform: translateX(-200%) translateY(30px);
          }
        }
        .animate-swipe-out-left {
          animation: swipeOutLeft 0.6s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
        </>
    );
};

export default BottomNavigation;
