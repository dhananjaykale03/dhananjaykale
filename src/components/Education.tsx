import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Education = () => {
    const educationRef = useScrollReveal();
    const education = [
        {
            institution: 'College Of Engineering & Technology, Akola',
            degree: 'Bachelor of Engineering in Computer Science',
            duration: '2022 - 2026',
            description: 'Pursuing my Bachelor\'s degree (B.E) in Computer Science from Sant Gadge Baba University Amravati. During my time there, I gained a strong foundation in programming,web development, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, python,  Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at University of Mumbai has been instrumental in shaping my technical abilities and professional growth.',
            logo: '🎓'
        },
        {
            institution: 'Dr. B. R. AMBEDKAR JUNIOR COLLEGE',
            degree: 'Higher Secondary Certificate (HSC)',
            duration: ' June 2020 - March 2022',
            grade: '71.67%',
            description: 'Completed Higher Secondary Certificate with a focus on the Science stream, building a strong academic foundation in Mathematics, Physics, and Computer Science. This period strengthened my analytical thinking, logical reasoning, and problem-solving skills, which later shaped my journey into software development.\n' +
                'Actively engaged in science fairs, academic competitions, and extracurricular activities, fostering teamwork, creativity, and communication. Early exposure to programming and emerging technologies during this time sparked my passion for engineering and innovation, inspiring me to pursue a career in technology.',
            logo: '📚'
        }
    ];

    return (
        <section ref={educationRef} id="education" className="section-padding bg-transparent relative">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-left mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-text-primary">
                        Education
                    </h2>
                    <div className="w-16 h-1 bg-accent-primary mb-8"></div>
                    <p className="text-text-secondary leading-relaxed max-w-4xl">
                        My 📚 journey has strengthened my analytical thinking, technical knowledge, and passion for solving real-world problems through technology.
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div key={index} className="relative reveal" style={{ transitionDelay: `${index * 150}ms` }}>
                                {/* Connecting Line */}
                                {index < education.length - 1 && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-accent-primary to-accent-secondary z-5"></div>
                                )}

                                {/* Education Card */}
                                <div className="relative bg-surface/80 backdrop-blur-sm border border-border rounded-2xl p-6 group  transition-all duration-500 hover:scale-[1.02] hover:shadow-xl relative">
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                                            {edu.logo}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-xl font-bold text-text-primary mb-1 leading-tight">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-accent-primary font-semibold text-base mb-2">
                                                {edu.institution}
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-text-secondary">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                            {edu.duration}
                        </span>
                                                <span className="bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full font-medium">
                          Grade: {edu.grade}
                        </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {edu.description}
                                    </p>

                                    {/* Decorative Elements */}
                                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;