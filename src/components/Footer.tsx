import { Sparkles, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "API", href: "#api" },
        { label: "Integrations", href: "#integrations" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Blog", href: "#blog" },
        { label: "Press", href: "#press" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#help" },
        { label: "Documentation", href: "#docs" },
        { label: "Contact", href: "#contact" },
        { label: "Status", href: "#status" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Cookie Policy", href: "#cookies" },
        { label: "GDPR", href: "#gdpr" }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "hello@resumerank.ai",
      href: "mailto:hello@resumerank.ai"
    },
    {
      icon: Phone,
      label: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "San Francisco, CA",
      href: "#location"
    }
  ];

  return (
    <footer className="bg-background-soft border-t border-border/20">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold gradient-text">ResumeRank</span>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Transform your hiring process with AI-powered resume analysis and candidate ranking. 
                Find the perfect match for every role in seconds.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 group"
                  >
                    <contact.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{contact.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-semibold text-lg">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground">
              © 2024 ResumeRank. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-sm text-muted-foreground">
                Made with ❤️ for HR professionals
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;