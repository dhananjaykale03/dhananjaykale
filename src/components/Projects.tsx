import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';

const Projects = () => {
    const [showAll, setShowAll] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);
    const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        projectRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
            projectRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, [showAll]);

    const projects = [
        {
            title: 'Radiant - Components Library ',
            description: 'Radiant is a premium AI-powered web platform 🤖 that showcases modern, reusable UI components 🧩, secure authentication 🔐, and responsive design 📱 to help developers build elegant ✨ and scalable 🚀 applications..',
            tech: ['React.js', 'Shadcn/UI', 'TypeScript', 'tailwind CSS', 'React Hooks', 'Clark', 'SupaBase', 'Vite + ESLint', 'All screens responsive'],
            demoUrl: 'https://radiant-ai-connect.vercel.app/',
            number: '01'
        },
        {
            title: 'Food Scan AI',
            description: 'Food Scan AI 🍔📸 is an AI-powered web app that scans food images and instantly provides details like calories, nutrition, and ingredients. It helps users track their diet, make healthier choices, and understand food better through a fast, simple, and smart interface. 🤖🥗⚡',
            tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Api Integration', 'SupaBase - Database', 'Vite + ESLint', 'Node.js', 'Express js', 'Loveable cloud storage'],
            demoUrl: 'https://modernui.example.com',
            number: '02'
        },
        {
            title: 'Ai Interviewer',
            description: 'AI Interviewer 🤖🎤 is an AI-powered mock interview web app that simulates real interview experiences with smart questions and instant feedback. It helps users improve communication skills, confidence, and job readiness through a modern, interactive, and professional interface. 🚀',
            tech: ['React.js', 'PostgreSQL', 'Node.js', 'Express js', 'Tailwind CSS', 'TypeScript', 'SupaBase - Database', 'API Integration', 'Ai Agent','All Screens Responsive'],
            demoUrl: 'https://ai-interviewer003.vercel.app/',
            number: '03'
        },
        {
            title: 'Shra-Lax – Modern Task Manager',
            description: 'Shralax is a sleek, feature-rich task management web app built with React, TypeScript, and Tailwind CSS ⚡. It features smart task scheduling ⏰, priority-based organization 🎯, and a Pomodoro-style Focus Mode 🍅 for deep work. Users can drag & drop tasks 🖱️, track progress 📊, and enjoy motivational quotes 💬. With dark/light themes 🌙☀️, responsive design 📱, and smooth animations 🎨, Shralax delivers a clean, modern, and accessible productivity experience.',
            tech: ['React', 'Shadcn/UI', 'TypeScript', 'tailwind CSS', 'React Hooks', 'Vite + ESLint', 'Responsive & mobile-first design',],
            demoUrl: 'https://shralax.netlify.app/',
            number: '04'
        }
    ];

    const displayedProjects = showAll ? projects : projects.slice(0, 2);

    return (
        <section id="projects" className="section-padding relative">

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div ref={headerRef} className="text-left mb-16 opacity-0 translate-y-10 transition-all duration-700">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-text-primary">
                        Projects
                    </h2>
                    <div className="w-16 h-1 bg-accent-primary mb-8"></div>
                    <p className="text-text-secondary leading-relaxed max-w-5xl">
                        Learning by building 👨‍💻 is my favorite way to truly understand concepts.
                        Whenever I explore something new, I dive into creating 📱 an app to grasp its
                        significance and learn how to configure it effectively. Here are some of the
                        personal projects I've worked on in the past 🚀, each one reflecting a step
                        forward in my journey as a developer.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="space-y-6">
                    {displayedProjects.map((project, index) => (
                        <div
                            key={index}
                            ref={(el) => (projectRefs.current[index] = el)}
                            className="relative bg-surface/80 backdrop-blur-sm border border-border rounded-2xl p-8 cursor-pointer hover:scale-[1.02] transition-all duration-700 group opacity-0 translate-y-10"
                        >
                            {/* Corner Badge */}
                            <div className="absolute top-4 right-4 bg-accent-primary text-white text-sm font-bold px-2 py-1 rounded">
                                {project.number}
                            </div>

                            {/* Project Title */}
                            <div className="flex items-center gap-2 mb-4">
                                <h3 className="text-2xl font-bold text-text-primary">
                                    {project.title}
                                </h3>
                                <ExternalLink
                                    className="w-5 h-5 text-text-secondary hover:text-accent-primary cursor-pointer"
                                    onClick={() => window.open(project.demoUrl, '_blank')}
                                />
                            </div>

                            {/* Description */}
                            <p className="text-text-secondary leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full text-sm font-medium"
                                    >
                    {tech}
                  </span>
                                ))}

                                {/* Decorative Elements */}
                                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More/Less Button */}
                {projects.length > 2 && (
                    <div className="text-center mt-8">
                        <Button
                            onClick={() => setShowAll(!showAll)}
                            variant="outline"
                            className="border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white"
                        >
                            {showAll ? 'Show Less' : 'Show More Projects'}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;