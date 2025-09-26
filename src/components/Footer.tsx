import { Mail, Phone, Globe, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import htsLogo from "@/assets/hts-logo.png";

const Footer = () => {
  const services = [
    "Artificial Intelligence",
    "Software Development", 
    "Mobile App Development",
    "Web Development",
    "Digital Transformation",
    "API Integration",
    "CRM Solutions",
    "ERP Solutions"
  ];

  const industries = [
    "Banking & Finance",
    "Capital Markets",
    "Communications & Media",
    "Education",
    "Energy & Utilities",
    "Manufacturing",
    "Retail",
    "Travel & Logistics"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-hero border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img src={htsLogo} alt="HTS Logo" className="h-8 w-8" />
              <span className="text-lg font-bold text-foreground">
                Hyperion Technology Solutions
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A team of experienced professionals providing comprehensive software products 
              and end-to-end solutions that drive success across all stages of your digital journey.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Globe className="w-4 h-4 text-primary" />
                <a href="https://htssoftech.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  htssoftech.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hts.hyperiontechnologysolutions@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                  hts.hyperiontechnologysolutions@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:8883872262" className="text-muted-foreground hover:text-foreground transition-colors">
                  8883872262
                </a>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.linkedin.com/company/hyperion-technology-solutions/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/hyperiontechnologysolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Instagram className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.facebook.com/people/Hyperion-Technology-Solutions/61551585942320/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Facebook className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("#industries")}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {industry}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#services")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#industries")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Industries We Serve
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#insights")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#careers")}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Hyperion Technology Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;