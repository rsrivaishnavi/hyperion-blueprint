import { Cpu, Recycle, Target, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Insights = () => {
  const insights = [
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Technology",
      description: "Technology refers to the tools, processes, and systems that are developed and utilized to solve problems, accomplish tasks, and enhance various aspects of human life. It encompasses communication, transportation, entertainment, healthcare, education, and more.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Recycle className="w-10 h-10" />,
      title: "Sustainability",
      description: "Sustainability refers to practices that aim to meet the needs of the present without compromising the ability of future generations to meet their own needs. It involves economic, environmental, and social factors for long-term well-being.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Strategy",
      description: "Strategy is crucial for achieving goals with limited resources. It involves setting priorities, identifying required actions, and mobilizing resources for execution. Strategic planning specifies how resources will be used to achieve desired goals.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Long Term Value",
      description: "Long-term value (LTV) is a metric used to assess the value of a company or product over an extended period. This helps organizations categorize their customer base and influence marketing strategies like CRM and customer service.",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="insights" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our 
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our perspectives on technology, strategy, and sustainable business practices 
            that drive meaningful transformation and long-term value creation.
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${insight.color}`}></div>
              
              <CardHeader className="space-y-4 pt-8">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${insight.color} bg-opacity-10`}>
                    <div className="text-white">
                      {insight.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {insight.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {insight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border">
            <span className="text-muted-foreground">
              Ready to transform your business with strategic technology solutions?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;