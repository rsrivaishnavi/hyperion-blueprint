import { 
  Building, 
  TrendingUp, 
  Radio, 
  BookOpen, 
  Zap, 
  Cog, 
  ShoppingBag,
  Truck
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Industries = () => {
  const industries = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Banking & Finance",
      description: "Efficient operations through automation, transaction processing, data management, risk analysis, and regulatory compliance solutions.",
      services: ["Trading & Execution", "Market Data Analysis", "Risk Management", "Blockchain Technology"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Capital Markets",
      description: "Advanced solutions for trading platforms, market analysis, and compliance reporting in capital markets.",
      services: ["Trading Systems", "Market Analytics", "Compliance Reporting", "Distributed Ledger"]
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Communications & Media",
      description: "Digital publishing platforms and content distribution solutions that democratize access to information globally.",
      services: ["Digital Publishing", "Content Distribution", "Media Analytics", "Communication Tools"]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education",
      description: "Revolutionary educational technology including online learning platforms, digital resources, and learning management systems.",
      services: ["Online Learning", "Digital Resources", "LMS Solutions", "Educational Apps"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energy & Utilities",
      description: "Smart grid management, energy monitoring, renewable energy integration, and environmental compliance solutions.",
      services: ["Smart Grid", "Energy Monitoring", "Renewable Integration", "Environmental Compliance"]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Manufacturing",
      description: "ERP systems, IoT integration, predictive maintenance, and process optimization for modern manufacturing.",
      services: ["ERP Systems", "IoT Integration", "Predictive Maintenance", "Process Optimization"]
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Retail",
      description: "POS systems, e-commerce platforms, inventory management, and omni-channel integration for retail success.",
      services: ["POS Systems", "E-commerce", "Inventory Management", "Omni-channel"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Travel & Logistics",
      description: "Reservation systems, fleet management, supply chain visibility, and route optimization solutions.",
      services: ["Booking Systems", "Fleet Management", "Supply Chain", "Route Optimization"]
    }
  ];

  return (
    <section id="industries" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Industries We 
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Serve
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering specialized technology solutions across diverse industries, 
            helping businesses transform and thrive in the digital age.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 group hover:scale-105"
            >
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 w-fit">
                  <div className="text-primary">
                    {industry.icon}
                  </div>
                </div>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {industry.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Services:</h4>
                  <ul className="space-y-1">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-xs text-muted-foreground flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;