import { useState } from "react";
import { Mail, Phone, Globe, Calendar, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      value: "htssoftech.com",
      href: "https://htssoftech.com"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hts.hyperiontechnologysolutions@gmail.com",
      href: "mailto:hts.hyperiontechnologysolutions@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Contact",
      value: "8883872262",
      href: "tel:8883872262"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Get In 
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology solutions? 
            Let's discuss how we can help you achieve your digital transformation goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Connect with Our Team
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Connect with our experienced professionals to discuss your project requirements 
                and discover how Hyperion Technology Solutions can drive your business forward.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <div className="text-primary">
                          {info.icon}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Info Card */}
            <Card className="bg-gradient-primary border-0 text-primary-foreground">
              <CardContent className="p-8 text-center space-y-4">
                <Calendar className="w-12 h-12 mx-auto opacity-90" />
                <h4 className="text-xl font-semibold">Ready to Transform Your Business?</h4>
                <p className="opacity-90">
                  Connect with us to discuss your project requirements and discover innovative solutions tailored to your business needs.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center space-x-2">
                <Send className="w-6 h-6" />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-primary text-lg py-6"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;