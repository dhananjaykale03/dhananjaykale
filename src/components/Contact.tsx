import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import emailjs from "emailjs-com";

const Contact = () => {
    const contactRef = useScrollReveal();
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // ✉️ Handle EmailJS Submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.send(
                "service_dndcslj",   // ✅ Replace with your actual Service ID
                "template_k3y7m23",  // ✅ Replace with your actual Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                "1uQ0r8jtTvMzUtpwZ"  // ✅ Replace with your Public Key
            );

            console.log("✅ Email sent:", result.text);
            toast({
                title: "✅ Message Sent!",
                description: "Thanks for reaching out 💗. I’ll get back to you soon!",
            });

            // Clear form
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("❌ EmailJS Error:", error);
            toast({
                title: "❌ Failed!",
                description: "Something went wrong. Try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section ref={contactRef} id="contact" className="py-20 px-6 relative">
            <div className="max-w-6xl mx-auto relative">
                <div className="relative z-10">
                    <div className="mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Contact
                        </h2>
                        <div className="w-16 h-1 bg-emerald-400 mb-8"></div>
                        <p className="text-lg text-muted-foreground max-w-5xl leading-relaxed">
                            I’m always excited to connect and collaborate.
                            Whether it’s building innovative web solutions ⚛️, solving challenging problems 🧩, or sharing insights 📚, every message is a chance to turn ideas into reality 🌍.
                            I’m 💯 ready to collaborate. Send a message and let’s build something 🤩 amazing 👬 together!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 relative">
                        <div className="reveal" style={{ transitionDelay: '0ms' }}>
                            <Input
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Name"
                                className="w-full border-0 border-b-2 border-border rounded- bg-transparent px-0 py-4 text-lg focus:border-emerald-400 focus:ring-0 focus-visible:outline-none placeholder:text-muted-foreground text-foreground transition-all duration-500"
                            />
                        </div>

                        <div className="reveal" style={{ transitionDelay: '120ms' }}>
                            <Input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Email"
                                className="w-full border-0 border-b-2 border-border rounded- bg-transparent px-0 py-4 text-lg focus:border-emerald-400 focus:ring-0 focus-visible:outline-none placeholder:text-muted-foreground text-foreground transition-all duration-500"
                            />
                        </div>

                        <div className="reveal" style={{ transitionDelay: '240ms' }}>
                            <Textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                                placeholder="Message"
                                rows={4}
                                className="w-full border-0 border-b-2 border-border rounded- bg-transparent px-0 py-4 text-lg focus:border-emerald-400 focus:ring-0 focus-visible:outline-none placeholder:text-muted-foreground resize-none text-foreground transition-all duration-500"
                            />
                        </div>

                        <div className="flex justify-end relative reveal" style={{ transitionDelay: '360ms' }}>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-16 h-16 bg-emerald-400 hover:bg-emerald-500 text-white rounded-full p-0 flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110"
                            >
                                <ArrowRight className="w-6 h-6" />
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;