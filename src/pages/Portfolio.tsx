
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ExternalLinkIcon, CodeIcon, ShieldIcon, ServerIcon } from 'lucide-react';
import SkillBadge from '@/components/SkillBadge';

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that demonstrate my technical expertise and problem-solving approach.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="tools">Tools & Extensions</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="space-y-8">
              {/* Zwansave Dashboard */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Zwansave Dashboard</CardTitle>
                      <CardDescription>System Resource Optimizer</CardDescription>
                    </div>
                    <Badge variant="outline" className="bg-desert-light">Featured</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="mb-4">
                        A comprehensive system monitoring and optimization tool that reduces CPU load by intelligently managing processes and resources. Built with a focus on performance and minimal overhead.
                      </p>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Real-time CPU and memory optimization</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Custom process prioritization framework</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Resource usage analytics and reporting</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Automated system maintenance routines</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <SkillBadge name="PHP" />
                        <SkillBadge name="JavaScript" />
                        <SkillBadge name="System Architecture" />
                      </div>
                    </div>
                    <div className="bg-desert-light/30 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
                        alt="Zwansave Dashboard Interface" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium mb-2">Results:</h4>
                        <p className="text-sm">Reduced CPU load by 45% on average across test systems</p>
                        <p className="text-sm mt-1">Implemented by 3 European tech companies</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CodeIcon size={16} className="mr-1" /> 
                    <span>12,500+ lines of code</span>
                  </div>
                  <a 
                    href="https://github.com/zwanski2019" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hope hover:text-hope-dark flex items-center"
                  >
                    View Code <ExternalLinkIcon size={16} className="ml-1" />
                  </a>
                </CardFooter>
              </Card>
              
              {/* EurOrbit Weather */}
              <Card>
                <CardHeader>
                  <CardTitle>EurOrbit Weather</CardTitle>
                  <CardDescription>Predictive Weather Application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="mb-4">
                        A weather forecasting application that uses machine learning to improve prediction accuracy, especially in regions with volatile weather patterns. Designed with refugees and travelers in mind.
                      </p>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>ML-enhanced forecast models for increased accuracy</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Offline mode for areas with limited connectivity</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Travel safety warnings based on weather conditions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Low-bandwidth mode for data-restricted users</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <SkillBadge name="React" />
                        <SkillBadge name="Python" />
                        <SkillBadge name="Machine Learning" />
                      </div>
                    </div>
                    <div className="bg-desert-light/30 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"
                        alt="EurOrbit Weather App" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium mb-2">Impact:</h4>
                        <p className="text-sm">Used by 1,200+ travelers across North Africa</p>
                        <p className="text-sm mt-1">17% more accurate than standard forecasts</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CodeIcon size={16} className="mr-1" /> 
                    <span>8,300+ lines of code</span>
                  </div>
                  <a 
                    href="https://github.com/zwanski2019" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hope hover:text-hope-dark flex items-center"
                  >
                    View Code <ExternalLinkIcon size={16} className="ml-1" />
                  </a>
                </CardFooter>
              </Card>
              
              {/* Security Architecture */}
              <Card>
                <CardHeader>
                  <CardTitle>Wazuh Security Implementation</CardTitle>
                  <CardDescription>Enterprise Security Architecture</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="mb-4">
                        A comprehensive security architecture implementation using Wazuh for threat detection, vulnerability assessment, and compliance monitoring. Designed for organizations with limited security resources.
                      </p>
                      <h4 className="font-semibold mb-2">Key Components:</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Custom threat detection rules tailored to specific attack vectors</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Automated vulnerability assessment pipeline</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Integration with existing IT infrastructure</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Security compliance reporting for regulatory requirements</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <SkillBadge name="Wazuh" />
                        <SkillBadge name="Kali Linux" />
                        <SkillBadge name="Security Architecture" />
                      </div>
                    </div>
                    <div className="bg-desert-light/30 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                        alt="Security Architecture" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium mb-2">Results:</h4>
                        <p className="text-sm">65% reduction in undetected vulnerabilities</p>
                        <p className="text-sm mt-1">Decreased incident response time by 73%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <ShieldIcon size={16} className="mr-1" /> 
                    <span>ISC2 Certified Implementation</span>
                  </div>
                  <a 
                    href="https://github.com/zwanski2019" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hope hover:text-hope-dark flex items-center"
                  >
                    Case Study <ExternalLinkIcon size={16} className="ml-1" />
                  </a>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="web" className="space-y-8">
              {/* Web Development projects - Add specific projects here */}
              <Card>
                <CardHeader>
                  <CardTitle>WordPress/GitHub Integration</CardTitle>
                  <CardDescription>Version Control System for Content Management</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="mb-4">
                        A seamless integration system between WordPress and GitHub that enables version control for content, theme customizations, and plugin development. Ideal for teams managing multiple sites.
                      </p>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Two-way sync between WordPress database and Git repository</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Automated deployment pipeline for content updates</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Content versioning with rollback capabilities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Conflict resolution system for collaborative editing</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <SkillBadge name="PHP" />
                        <SkillBadge name="WordPress" />
                        <SkillBadge name="Git" />
                      </div>
                    </div>
                    <div className="bg-desert-light/30 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
                        alt="WordPress GitHub Integration" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium mb-2">Impact:</h4>
                        <p className="text-sm">Deployed across 7 client websites</p>
                        <p className="text-sm mt-1">Reduced content deployment errors by 92%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CodeIcon size={16} className="mr-1" /> 
                    <span>5,800+ lines of code</span>
                  </div>
                  <a 
                    href="https://github.com/zwanski2019" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hope hover:text-hope-dark flex items-center"
                  >
                    View Code <ExternalLinkIcon size={16} className="ml-1" />
                  </a>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-8">
              {/* Security projects - Add specific projects here */}
              <Card>
                <CardHeader>
                  <CardTitle>Network Intrusion Detection System</CardTitle>
                  <CardDescription>Custom Security Monitoring Solution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="mb-4">
                        A lightweight but powerful network intrusion detection system designed specifically for resource-constrained environments. Optimized for performance without sacrificing security.
                      </p>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Low-resource footprint for deployment on limited hardware</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Real-time traffic analysis and pattern detection</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Custom rule creation interface for specific threats</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Automated alert system with severity classification</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <SkillBadge name="Python" />
                        <SkillBadge name="Network Security" />
                        <SkillBadge name="Kali Linux" />
                      </div>
                    </div>
                    <div className="bg-desert-light/30 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                        alt="Network Security" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium mb-2">Results:</h4>
                        <p className="text-sm">Detected 43 zero-day attacks in first month</p>
                        <p className="text-sm mt-1">85% lower resource usage than commercial solutions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <ShieldIcon size={16} className="mr-1" /> 
                    <span>Penetration tested by security professionals</span>
                  </div>
                  <a 
                    href="https://github.com/zwanski2019" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hope hover:text-hope-dark flex items-center"
                  >
                    View Documentation <ExternalLinkIcon size={16} className="ml-1" />
                  </a>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="tools" className="space-y-8">
              {/* Tools & Extensions projects - Add specific projects here */}
              <Card>
                <CardHeader>
                  <CardTitle>MemOptimize Chrome Extension</CardTitle>
                  <CardDescription>Browser Memory Management Tool</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="mb-4">
                        A Chrome extension that intelligently manages browser memory usage, particularly useful for users with limited system resources or older hardware. Designed for seamless background operation.
                      </p>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Smart tab suspension based on usage patterns</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Memory leak detection and mitigation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Resource usage visualization and reporting</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-hope">•</span>
                          <span>Customizable optimization settings</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <SkillBadge name="JavaScript" />
                        <SkillBadge name="Chrome API" />
                        <SkillBadge name="Performance Optimization" />
                      </div>
                    </div>
                    <div className="bg-desert-light/30 rounded-lg overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                        alt="Chrome Extension" 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium mb-2">Impact:</h4>
                        <p className="text-sm">3,200+ active users</p>
                        <p className="text-sm mt-1">Memory usage reduced by up to 60%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <ServerIcon size={16} className="mr-1" /> 
                    <span>Chrome Web Store Verified</span>
                  </div>
                  <a 
                    href="https://github.com/zwanski2019" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hope hover:text-hope-dark flex items-center"
                  >
                    Install Extension <ExternalLinkIcon size={16} className="ml-1" />
                  </a>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="bg-night text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to work together?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              I'm currently available for remote work and open to relocation opportunities. Let's create something amazing together.
            </p>
            <a href="/contact" className="btn-primary inline-block">
              Get in Touch
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
