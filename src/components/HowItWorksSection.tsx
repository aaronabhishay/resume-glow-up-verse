import { Card, CardContent } from "@/components/ui/card";
import { Upload, Brain, BarChart3, Users } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: Upload,
      title: "Upload Resumes",
      description: "Simply connect your Google Drive folder or upload resume files directly to our secure platform.",
      color: "from-primary to-primary-glow"
    },
    {
      step: "02", 
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced AI analyzes each resume, extracting key skills, experience, and qualifications with precision.",
      color: "from-secondary to-purple-400"
    },
    {
      step: "03",
      icon: BarChart3,
      title: "Smart Ranking",
      description: "Get detailed scores and rankings based on job requirements, with explanations for every decision.",
      color: "from-accent to-green-400"
    },
    {
      step: "04",
      icon: Users,
      title: "Hire Confidently",
      description: "Review top candidates with confidence, knowing each has been thoroughly evaluated by our AI.",
      color: "from-orange-500 to-yellow-400"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            How <span className="gradient-text">ResumeRank</span> Works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our streamlined process makes finding the perfect candidate as simple as four easy steps. 
            From upload to hire in minutes, not days.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={step.step}
              className="relative border-0 shadow-card hover:shadow-glow transition-all duration-500 group animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                {/* Step Number */}
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
              
              {/* Connection Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30" />
              )}
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to experience the future of hiring?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of companies already using ResumeRank to find their next great hire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-xl hover:shadow-glow transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-3 glass border-primary/20 hover:border-primary/40 font-semibold rounded-xl transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;