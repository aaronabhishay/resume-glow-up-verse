import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  const benefits = [
    "No setup fees or hidden costs",
    "Cancel anytime, no questions asked",
    "Full access to all features",
    "Priority customer support"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-secondary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Ready to Transform Your{" "}
              <span className="gradient-text">Hiring Process</span>?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of HR professionals who have already discovered the power of AI-driven recruitment. 
              Start finding the perfect candidates today.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit}
                className="flex items-center gap-3 text-left animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg"
              onClick={() => navigate("/job-analysis")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-bold rounded-2xl shadow-button hover:shadow-glow transition-all duration-300 group animate-glow-pulse"
            >
              Start Free Trial
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary/30 hover:border-primary/50 glass backdrop-blur-xl px-12 py-6 text-xl font-bold rounded-2xl hover:bg-primary/5 transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-sm text-muted-foreground space-y-2">
            <p>✨ 14-day free trial • No credit card required</p>
            <p>🔒 Enterprise-grade security • GDPR compliant</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;