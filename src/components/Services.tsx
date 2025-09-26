import { 
  Brain, 
  Code, 
  Smartphone, 
  Globe, 
  Zap, 
  Database, 
  Link,
  Users,
  Building2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial Intelligence",
      description: "AI solutions focused on creating intelligent machines and software systems capable of performing tasks that typically require human intelligence. We develop systems that can learn, reason, understand natural language, recognize patterns, and make decisions.",
      category: "AI Solutions"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development", 
      description: "We provide innovative and reliable information technology services to companies of all sizes. Our team is here to simplify your IT needs quickly so you can focus on running a successful business.",
      category: "Development"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Application Development",
      description: "Dynamic mobile app development considering platform choice, user interface design, features, and functionality. We create apps that engage users and drive business growth.",
      category: "Mobile"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Application Development",
      description: "Creating software applications accessed through web browsers, involving front-end development, back-end development, database management, and user experience design.",
      category: "Web Development"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digital Business Transformation",
      description: "Helping businesses transform digitally with modern solutions that improve efficiency, reduce costs, and enhance customer experiences.",
      category: "Transformation"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Website Development",
      description: "Comprehensive website development from planning and requirements gathering to design, development, cross-browser compatibility, and responsive design.",
      category: "Web Solutions"
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "API Integration/Testing",
      description: "Connecting different software systems by utilizing APIs. We define methods and protocols that allow different software systems to communicate and exchange data seamlessly.",
      category: "Integration"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CRM Development/Integration",
      description: "Building and connecting software systems that facilitate managing and analyzing customer data to improve customer relationships and business growth.",
      category: "CRM Solutions"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "ERP Solution Provider",
      description: "Specialized ERP software systems that integrate various aspects of company operations including finance, HR, inventory management, supply chain, manufacturing, and more.",
      category: "Enterprise Solutions"
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What We Do 
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}@HTS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology services designed to drive your business forward 
            with innovative solutions and expert implementation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group hover:scale-105"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;