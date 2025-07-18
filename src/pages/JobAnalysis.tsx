import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  FileText, 
  Upload, 
  Settings, 
  Sparkles, 
  Target,
  ArrowRight,
  FolderOpen,
  Zap,
  CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const JobAnalysis = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [experienceLevel, setExperienceLevel] = useState("Mid Level (3-5 years)");
  const [jobDescription, setJobDescription] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [folderLink, setFolderLink] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const jobTemplates = [
    { id: "data-scientist", title: "Data Scientist", description: "Analytics and ML specialist" },
    { id: "software-engineer", title: "Software Engineer", description: "Full-stack development role" },
    { id: "product-manager", title: "Product Manager", description: "Product strategy and execution" },
    { id: "ui-ux-designer", title: "UI/UX Designer", description: "User experience design" }
  ];

  const experienceLevels = [
    "Entry Level (0-2 years)",
    "Mid Level (3-5 years)", 
    "Senior Level (5-8 years)",
    "Lead/Principal (8+ years)"
  ];

  const folders = [
    "Resume Analysis Folders",
    "Data Analyst Resumes", 
    "Software Engineer Resumes",
    "Marketing Resumes",
    "Sales Resumes"
  ];

  const dataScientistTemplate = `Data Scientist

Responsibilities:
- Develop and implement machine learning models and algorithms
- Analyze large datasets to extract meaningful insights
- Create data-driven solutions for business problems
- Collaborate with cross-functional teams to identify opportunities
- Present findings and recommendations to stakeholders

Requirements:
- Master's degree in Data Science, Statistics, or related field
- 3+ years of experience in data analysis and machine learning
- Proficiency in Python, R, SQL, and machine learning frameworks
- Strong statistical analysis and data visualization skills
- Experience with big data technologies (Hadoop, Spark)
- Excellent communication and presentation skills`;

  const softwareEngineerTemplate = `Software Engineer

Responsibilities:
- Design, develop, and maintain scalable web applications
- Write clean, efficient, and well-documented code
- Collaborate with product managers and designers
- Participate in code reviews and technical discussions
- Troubleshoot and debug applications

Requirements:
- Bachelor's degree in Computer Science or related field
- 3+ years of software development experience
- Proficiency in JavaScript, React, Node.js, and databases
- Experience with version control systems (Git)
- Understanding of software development best practices
- Strong problem-solving and analytical skills`;

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    if (templateId === "data-scientist") {
      setJobDescription(dataScientistTemplate);
    } else if (templateId === "software-engineer") {
      setJobDescription(softwareEngineerTemplate);
    }
  };

  const handleAnalyzeResumes = async () => {
    if (!jobDescription.trim()) {
      toast({
        title: "Job Description Required",
        description: "Please enter a job description before analyzing resumes.",
        variant: "destructive"
      });
      return;
    }

    if (!selectedFolder && !folderLink.trim()) {
      toast({
        title: "Resume Source Required", 
        description: "Please select a folder or provide a Google Drive link.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Analysis Complete!",
        description: "Successfully analyzed resumes. Redirecting to results...",
        variant: "default"
      });
      
      navigate("/results", { 
        state: { 
          jobDescription, 
          experienceLevel, 
          selectedFolder,
          folderLink 
        } 
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background-soft">
      {/* Header */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">ResumeRank</h1>
                <p className="text-sm text-muted-foreground">AI-Powered Resume Analysis</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate("/")}>
                ← Back to Home
              </Button>
              <Badge variant="secondary" className="px-3 py-1">
                <Brain className="w-4 h-4 mr-2" />
                AI Powered
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
              currentStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              1
            </div>
            <div className={`w-16 h-0.5 ${currentStep >= 2 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
              currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            }`}>
              2
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: Job Analysis */}
          <Card className="mb-8 shadow-card border-0">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                <div>
                  <CardTitle className="text-2xl font-heading">Analyze New Job</CardTitle>
                  <CardDescription className="text-lg">
                    Enter job details to find the best matching candidates
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Experience Level */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Experience Level</Label>
                <Select value={experienceLevel} onValueChange={setExperienceLevel}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Scoring Logic */}
              <div className="flex items-center justify-between p-4 bg-background-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-primary" />
                  <span className="font-medium">Edit Scoring Logic</span>
                </div>
                <Button variant="outline" size="sm">
                  Customize
                </Button>
              </div>

              {/* Job Description */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-semibold">Job Description</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Use Template</span>
                    <span className="text-muted-foreground">|</span>
                    <span className="text-sm text-muted-foreground">Custom Job Description</span>
                  </div>
                </div>

                {/* Job Templates */}
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  {jobTemplates.slice(0, 2).map((template) => (
                    <Button
                      key={template.id}
                      variant={selectedTemplate === template.id ? "default" : "outline"}
                      className="h-auto p-4 justify-start"
                      onClick={() => handleTemplateSelect(template.id)}
                    >
                      <div className="text-left">
                        <div className="font-semibold">{template.title}</div>
                        <div className="text-sm opacity-75">{template.description}</div>
                      </div>
                    </Button>
                  ))}
                </div>

                <Textarea
                  placeholder="Enter detailed job description including responsibilities, requirements, and qualifications..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="min-h-[200px] text-base"
                />
              </div>
            </CardContent>
          </Card>

          {/* Step 2: Resume Source */}
          <Card className="mb-8 shadow-card border-0">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3">
                <FolderOpen className="w-6 h-6 text-secondary" />
                <div>
                  <CardTitle className="text-xl font-heading">Google Drive Folder Link</CardTitle>
                  <CardDescription>
                    Select from folders or provide a custom link
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Folder Selection */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Select from folders</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-sm text-muted-foreground">Custom link</span>
                </div>
                
                <Select value={selectedFolder} onValueChange={setSelectedFolder}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select a folder..." />
                  </SelectTrigger>
                  <SelectContent>
                    {folders.map((folder) => (
                      <SelectItem key={folder} value={folder}>
                        {folder}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Custom Link */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Or provide custom Google Drive link</Label>
                <Input
                  placeholder="https://drive.google.com/..."
                  value={folderLink}
                  onChange={(e) => setFolderLink(e.target.value)}
                  className="h-12"
                />
              </div>

              {/* Info Banner */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Upload className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-blue-900 mb-1">
                      Make sure the folder is shared with the service account email
                    </p>
                    <p className="text-blue-700">
                      Supported formats: PDF, DOCX, TXT
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analyze Button */}
          <div className="text-center">
            <Button
              onClick={handleAnalyzeResumes}
              disabled={isAnalyzing}
              size="lg"
              className="px-12 py-4 text-lg font-semibold rounded-xl shadow-button hover:shadow-glow"
            >
              {isAnalyzing ? (
                <>
                  <Zap className="w-5 h-5 mr-3 animate-spin" />
                  Analyzing Resumes...
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5 mr-3" />
                  Analyze Resumes
                  <ArrowRight className="w-5 h-5 ml-3" />
                </>
              )}
            </Button>
            
            {isAnalyzing && (
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm">Processing resumes with AI...</span>
                </div>
                <div className="w-64 mx-auto bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-pulse" style={{ width: '60%' }} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAnalysis;