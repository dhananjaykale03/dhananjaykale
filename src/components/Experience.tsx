import { Building2, Calendar, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Experience = () => {
    const experienceRef = useScrollReveal();
    const experiences = [
        {
            company: 'Uptricks Services Pvt.Ltd ',
            role: 'Full Stack Developer',
            duration: 'Nov 2025 - Jan 2026  ',
            location: 'Remote',
            description: [
                'Developing and maintaining enterprise-level applications using modern web technologies',
                'Collaborating with cross-functional teams to deliver high-quality software solutions',
                'Implementing responsive user interfaces and optimizing application performance',

            ],
            type: 'Internship'
        }
    ];

    return (
        <section ref={experienceRef} id="experience" className="section-padding relative">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-left mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-text-primary">
                        Experience
                    </h2>
                    <div className="w-16 h-1 bg-accent-primary mb-8"></div>
                    <p className="text-text-secondary leading-relaxed max-w-4xl">
                        Built hands-on experience through personal and academic projects using ⚛️ React, 🌐 Node.js, 🧩 python, and 🍃 MongoDB. Developed responsive web applications, implemented CRUD operations, and practiced deploying projects to cloud platforms. Learned best practices for clean code, UI/UX design, and collaborative development.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary to-accent-secondary"></div>

                    {/* Vertical Text Label */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2">
                        <div className="writing-mode-vertical text-sm font-medium text-accent-tertiary tracking-wider opacity-60" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                            Internship
                        </div>
                    </div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative flex items-start reveal">
                                {/* Timeline Connector */}
                                <div className="absolute left-2 w-4 h-4 bg-accent-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                                {/* Experience Card */}
                                <div className="ml-12 flex-1">
                                    <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-xl relative group hover:bg-surface transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                                        {/* Arrow pointing to timeline */}
                                        <div className="absolute left-0 top-6 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-border -ml-2"></div>

                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-text-primary mb-1">{exp.company}</h3>
                                                <h4 className="text-lg font-semibold text-accent-secondary mb-2">{exp.role}</h4>
                                            </div>
                                            <div className="text-right">
                        <span className="text-sm font-medium text-text-muted italic">
                          {exp.duration}
                        </span>
                                                <div className="mt-1">
                          <span className="text-xs bg-accent-primary text-white px-2 py-1 rounded-full">
                              Intern

                          </span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="space-y-3">
                                            {exp.description.map((point, idx) => (
                                                <li key={idx} className="text-text-secondary flex items-start leading-relaxed">
                                                    <span className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;