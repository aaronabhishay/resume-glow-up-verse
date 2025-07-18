import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  BarChart3, 
  Users,
  Clock,
  Award,
  FileSearch
} from "lucide-react";
import aiMatchingImage from "@/assets/ai-matching.jpg";
import talentScreeningImage from "@/assets/talent-screening.jpg";

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze resumes with human-level comprehension and accuracy.",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Precise Matching",
      description: "Get exact candidate matches based on skills, experience, and job requirements with detailed scoring.",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process hundreds of resumes in seconds. No more manual screening or endless document reviews.",
      color: "text-accent"
    }
  ];

  const additionalFeatures = [
    {
      icon: FileSearch,
      title: "Smart Resume Parsing",
      description: "Extracts key information from any resume format with 99% accuracy."
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "Comprehensive scoring and insights for every candidate evaluation."
    },
    {
      icon: Shield,
      title: "Bias-Free Screening",
      description: "Eliminate unconscious bias with objective, data-driven assessments."
    },
    {
      icon: Clock,
      title: "Real-time Processing",
      description: "Instant results with live updates as new resumes are added."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share results and collaborate on hiring decisions with your team."
    },
    {
      icon: Award,
      title: "Quality Insights",
      description: "Get detailed explanations for every ranking and recommendation."
    }
  ];

  return (
    <section className="py-24 bg-background-soft">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Why Choose <span className="gradient-text">ResumeRank</span>?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our intelligent platform revolutionizes how you discover and evaluate talent, 
            making hiring decisions faster, smarter, and more accurate than ever before.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className="glass border-0 shadow-card hover:shadow-glow transition-all duration-500 group animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-card-glow/10 to-card-glow/5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={aiMatchingImage} 
                alt="AI Matching Process"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-30" />
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Intelligent Resume Analysis
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Our AI doesn't just scan keywords – it understands context, experience relevance, 
                and career progression to give you the most qualified candidates first.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {additionalFeatures.slice(0, 4).map((feature, index) => (
                <div key={feature.title} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Feature Showcase - Reversed */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 lg:order-1 animate-fade-up">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Streamline Your Hiring Process
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                From initial screening to final selection, our platform provides the insights 
                and tools you need to make confident hiring decisions quickly.
              </p>
            </div>
            
            <div className="space-y-6">
              {additionalFeatures.slice(4).map((feature, index) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="relative lg:order-2 animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={talentScreeningImage} 
                alt="Talent Screening Process"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;