import { CheckCircle, Users, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced and dedicated professionals committed to excellence"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "End-to-End Solutions",
      description: "Comprehensive services from development through deployment and beyond"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Enterprise Focus",
      description: "Specialized in providing solutions to enterprise organizations"
    }
  ];

  const services = [
    "Custom Software Solutions",
    "Application Integration", 
    "Cloud Computing",
    "Data Migration/Optimization",
    "Security & Compliance",
    "Maintenance Support Services"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                About 
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {" "}Hyperion Technology Solutions
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                IT Software is a team of experienced and dedicated individuals who are committed 
                to providing clients with comprehensive software products. They offer a powerful 
                set of solutions that help customers drive success across all stages in the 
                product life-cycle—from development through deployment and beyond.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hyperion Technology Solution is an organization that specializes in providing 
                end-to-end solutions to enterprise organizations. They provide a range of services 
                including consulting, software engineering, system integration, and implementation support.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Our Core Services:</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <div className="text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;