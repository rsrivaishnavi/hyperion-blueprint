import { Users, Lightbulb, TrendingUp, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement in cutting-edge technologies"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Team",
      description: "Work with experienced professionals in a supportive environment"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Be part of innovative projects that shape the future of technology"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and comprehensive benefits package"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="careers" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Join Our 
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of technology. 
            We're always looking for talented individuals who are passionate about innovation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group text-center"
            >
              <CardHeader className="space-y-4">
                <div className="mx-auto p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 w-fit">
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-primary border-0 text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="p-12 space-y-6">
              <h3 className="text-3xl font-bold">Ready to Shape the Future?</h3>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                We're currently expanding our team across various roles including software developers, 
                AI specialists, project managers, and solution architects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6"
                >
                  Send Your Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToContact}
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Careers;