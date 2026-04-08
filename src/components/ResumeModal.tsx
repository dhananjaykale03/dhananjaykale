import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, GraduationCap, Briefcase, User } from 'lucide-react';
import experience from "@/components/Experience.tsx";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    const education = [
        {
            institution: "College Of Engineering & Technology, Akola",
            degree: "Engineering Degree - Computer science Engineering",
            period: "2022 — ",
            description: "Pursuing an engineering degree specializing in Information Technology. Developed skills in web development, with a passion sparked by driving enthusiasm for dynamic solutions."
        },
        {
            institution: "Dr. B. R. AMBEDKAR JUNIOR COLLEGE ",
            degree: "Higher Secondary Education",
            period: "2020 — 2022",
            description: "Completed high school with a focus on PCMB, laying a strong foundation in analytical skills and fostering a deep appreciation for the sciences, driving ongoing curiosity in learning."
        }
    ];

    const contact = {
        email: "dhananjaykale095@gmail.com",
        phone: "+91 78219 55919",
        linkedin: "Dhananjay Kale"

    };

    const experience = [
        {
            waiting:"Soon"
        }
    ];

    const projects = [
        {
            name: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
            tech: "React, Node.js, MongoDB, Stripe"
        },
        {
            name: "Task Management System",
            description: "Collaborative task management tool with real-time updates, team collaboration features, and analytics.",
            tech: "React, Django, PostgreSQL, WebSocket"
        }
    ];

    const skills = [
        { name: "Frontend", level: 80 },
        { name: "Python", level: 50 },
        { name: "MongoDB", level: 40 }
    ];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="light max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 border border-gray-200 shadow-2xl text-gray-900">
                <DialogHeader className="pb-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-md">
                            <img
                                src="/src/assets/dhananjay.jpg"  // ✅ path to your image
                                alt="Dhananjay Kale"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <DialogTitle className="text-2xl font-bold">Dhananjay Kale</DialogTitle>
                            <p className="text-muted-foreground text-lg">FullStack Developer</p>
                        </div>
                    </div>
                </DialogHeader>

                <div className="space-y-8">
                    {/* Resume Header */}
                    <div className="border-b border-white/20 pb-6">
                        <h2 className="text-3xl font-bold mb-2">Resume</h2>
                        <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4 bg-white/80 p-6 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <div className="grid gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <a
                                        href={`mailto:${contact.email}`}
                                        className="font-medium text-blue-600 hover:underline"
                                    >
                                        {contact.email}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <a
                                        href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                                        className="font-medium text-blue-600 hover:underline"
                                    >
                                        {contact.phone}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                                    <a
                                        href={`https://www.linkedin.com/in/dhananjaykale/${contact.linkedin}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-medium text-blue-600 hover:underline"
                                    >
                                        {contact.linkedin}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <User className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-semibold">About</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            Passionate full-stack developer with expertise in modern web technologies. I specialize in creating scalable, user-friendly applications using React, Node.js, and various database solutions. With a strong foundation in both frontend and backend development, I enjoy solving complex problems and delivering high-quality software solutions that make a real impact.
                        </p>
                    </div>

                    {/* Education Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <GraduationCap className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-semibold">Education</h3>
                        </div>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                                    <div className="absolute -left-2 top-0 w-3 h-3 bg-primary rounded-full" />
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-lg">{edu.institution}</h4>
                                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                                            <Calendar className="w-4 h-4" />
                                            {edu.period}
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Briefcase className="w-5 h-5 text-primary" />
                            <h3 className="text-xl font-semibold">Experience</h3>
                        </div>

                        <div className="space-y-6">
                            {experience.map((exp, index) => (
                                <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                                    <div className="absolute -left-2 top-0 w-3 h-3 bg-primary rounded-full" />
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-lg">{exp.waiting}</h4>
                                        <p className="text-primary font-medium"></p>
                                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                                            <Calendar className="w-4 h-4" />

                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">

                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                            <h3 className="text-xl font-semibold">Projects</h3>
                        </div>

                        <div className="space-y-4">
                            {projects.map((project, index) => (
                                <div key={index} className="bg-white/80 p-4 rounded-lg border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-2">{project.name}</h4>
                                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.split(', ').map((tech, techIndex) => (
                                            <Badge key={techIndex} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold">My Skills</h3>

                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-[hsl(340_60%_65%)] to-[hsl(280_50%_60%)] rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ResumeModal;