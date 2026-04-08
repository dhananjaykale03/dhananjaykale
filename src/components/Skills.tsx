import { ChevronDown } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useState, useEffect } from 'react';

const Skills = () => {
    const skillsRef = useScrollReveal();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // 👇 Trigger animation when section enters view
                    setIsVisible(true);
                } else {
                    // 👇 Reset animation when section leaves view
                    setIsVisible(false);
                }
            },
            { threshold: 0.3 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => observer.disconnect();
    }, [skillsRef]);

    const skillCategories = [
        {
            id: 'frontend',
            title: 'Front-End',
            skills: 'HTML, CSS, JavaScript, React.js, Responsive Design, Tailwind CSS, Next.js, TypeScript, UI/UX Design'
        },
        {
            id: 'backend',
            title: 'Back-End',
            skills: 'Node.js, C++, MySQL, Python, PHP, MongoDB'
        },
        {
            id: 'tools',
            title: 'Tools/Platforms',
            skills: 'Git & GitHub, VS Code, WebStorm'
        }
    ];

    const topSkills = [
        { name: 'HTML/CSS', level: 80 },
        { name: 'JavaScript', level: 60 },
        { name: 'React', level: 60 },
        { name: 'Node.js', level: 50 },
        { name: 'Python', level: 50 },
        { name: 'MongoDB', level: 40 }
    ];

    return (
        <section ref={skillsRef} id="skills" className="py-20 relative">
            {/* Minimal overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/10 to-transparent" />

            <div className="section-padding relative z-20">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <div className="inline-block animate-fade-in">
                            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-8">
                                What i'm doing
                            </h2>
                            <div className="w-12 h-1 bg-accent-primary mb-8"></div>
                            <p className="text-text-secondary leading-relaxed max-w-5xl">
                                ⚙️ A blend of creativity, logic, and technology — my skills help me design, build, and deliver modern 🌐 web experiences that are fast, responsive, and user-focused.
                            </p>
                        </div>
                    </div>

                    {/* Skills Categories */}
                    <div className="mb-16 space-y-6 flex flex-col w-full">
                        {skillCategories.map((category, index) => (
                            <details
                                key={category.id}
                                className="group w-full bg-surface-elevated border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent-primary/20 transition-all duration-500 reveal"
                                style={{ transitionDelay: `${index * 150}ms` }}
                                open={category.id === 'frontend'}
                            >
                                <summary className="flex items-center justify-between px-8 py-6 cursor-pointer list-none w-full">
                                    <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                                        {category.title}
                                    </h3>
                                    <ChevronDown className="w-8 h-8 text-text-secondary transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                                </summary>
                                <div className="px-8 pb-6 pt-2 w-full">
                                    <p className="text-accent-primary leading-relaxed text-lg w-full break-words">
                                        {category.skills}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>

                    {/* Skills Section */}
                    <div className="relative mb-16">
                        <div className="relative z-10">
                            <div className="ml-8 pt-8">
                                <h3 className="text-3xl font-bold text-text-primary mb-2">Skills</h3>
                                <div className="w-8 h-1 bg-accent-primary mb-8"></div>
                                <p className="text-text-secondary leading-relaxed max-w-3xl">
                                    ⚡ Skilled in building modern web applications with
                                </p>

                            </div>
                            <br/>

                            {/* Skills Progress */}
                            <div className="space-y-6">
                                {topSkills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-4 reveal" style={{ transitionDelay: `${index * 120}ms` }}>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-text-primary font-medium text-lg">{skill.name}</span>
                                            </div>
                                            <div className="w-full bg-border rounded-full h-2">
                                                <div
                                                    className="bg-accent-primary h-2 rounded-full transition-all duration-1000 ease-out"
                                                    style={{
                                                        width: isVisible ? `${skill.level}%` : '0%',
                                                        transitionDelay: `${index * 200}ms`
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <span className="bg-text-primary text-surface px-4 py-1.5 rounded-md text-base font-bold w-[70px] text-center flex-shrink-0">
                    {skill.level}%
                  </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;