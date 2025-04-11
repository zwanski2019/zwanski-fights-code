
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { MailIcon, PhoneIcon, GithubIcon, MapPinIcon, ArrowRightIcon } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can contribute to your team or project. I'm open to remote opportunities and relocation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <MailIcon className="mr-2 text-hope" size={20} />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:mohaaibb4@proton.me" 
                  className="text-hope hover:text-hope-dark transition-colors"
                >
                  mohaaibb4@proton.me
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  I respond to all messages within 24 hours.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <PhoneIcon className="mr-2 text-hope" size={20} />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+21694934141" 
                  className="text-hope hover:text-hope-dark transition-colors"
                >
                  +216 94 934 141
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Available for calls between 9am - 6pm UTC+1.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <GithubIcon className="mr-2 text-hope" size={20} />
                  GitHub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://github.com/zwanski2019" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hope hover:text-hope-dark transition-colors"
                >
                  github.com/zwanski2019
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Check out my code and contributions.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
              <Card className="bg-desert-light text-night">
                <CardHeader>
                  <CardTitle>Current Location</CardTitle>
                  <CardDescription className="text-night/70">Tunis, Tunisia</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 rounded-md overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80" 
                      alt="Tunis, Tunisia" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-hope text-white px-2 py-1 rounded text-xs flex items-center">
                      <MapPinIcon size={14} className="mr-1" /> Current
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-lg mb-3">Working Preferences</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 text-hope">•</div>
                      <div>Remote work (preferred)</div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-hope">•</div>
                      <div>Open to relocation with visa sponsorship</div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-hope">•</div>
                      <div>Contract or full-time employment</div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 text-hope">•</div>
                      <div>Available for immediate start</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                  <CardDescription>All fields are required</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Job opportunity, project collaboration, etc."
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your opportunity or how I can help with your project..."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-hope hover:bg-hope-dark text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          Sending... <span className="ml-2 animate-spin">◌</span>
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <ArrowRightIcon size={16} className="ml-2" />
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Whether you're looking for a dedicated developer, security consultant, or simply want to discuss a potential collaboration, I'm ready to bring my unique perspective and technical skills to your team.
            </p>
            <p className="text-lg font-medium text-hope">
              #ZwanskiFightsOn
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
