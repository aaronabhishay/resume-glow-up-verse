import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Target } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Resumes Analyzed",
      description: "Successfully processed and ranked",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Clock,
      value: "5 seconds",
      label: "Average Analysis Time",
      description: "Lightning-fast processing speed",
      color: "from-secondary to-purple-400"
    },
    {
      icon: Target,
      value: "98.5%",
      label: "Accuracy Rate",
      description: "Precision in candidate matching",
      color: "from-accent to-green-400"
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Time Saved",
      description: "Reduction in hiring process time",
      color: "from-orange-500 to-yellow-400"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Trusted by <span className="gradient-text">HR Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join thousands of companies who have revolutionized their hiring process with our AI-powered platform.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="glass border-0 shadow-card hover:shadow-glow transition-all duration-500 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                {/* Icon with Gradient Background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>
                
                {/* Value */}
                <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                
                {/* Label */}
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your hiring process?
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary rounded-full text-primary-foreground font-semibold hover:shadow-glow transition-all duration-300 cursor-pointer animate-glow-pulse">
            <span>Start Your Free Trial Today</span>
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;