import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  Award, 
  TrendingUp,
  FileText,
  Brain,
  Target,
  Download,
  Eye,
  Filter,
  Search,
  Sparkles
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CandidateResult {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  score: number;
  rank: number;
  title: string;
  experience: string;
  keySkills: string[];
  strengths: string[];
  matchReasons: string[];
  resumeUrl?: string;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("score");
  const [filterBy, setFilterBy] = useState("all");

  // Get data from previous page or use mock data
  const jobData = location.state || {
    jobDescription: "Software Engineer position",
    experienceLevel: "Mid Level (3-5 years)",
    selectedFolder: "Software Engineer Resumes"
  };

  // Mock candidate results
  const candidates: CandidateResult[] = [
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah.chen@email.com", 
      phone: "+1 (555) 234-5678",
      location: "San Francisco, CA",
      score: 94,
      rank: 1,
      title: "Senior Software Engineer",
      experience: "5 years",
      keySkills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      strengths: ["Full-stack expertise", "Team leadership", "System architecture"],
      matchReasons: [
        "Strong React and Node.js experience aligns perfectly with requirements",
        "5 years experience matches mid-level position perfectly", 
        "Previous team lead experience shows leadership potential"
      ]
    },
    {
      id: 2,
      name: "Marcus Johnson",
      email: "marcus.j@email.com",
      phone: "+1 (555) 345-6789", 
      location: "Austin, TX",
      score: 89,
      rank: 2,
      title: "Full Stack Developer",
      experience: "4 years",
      keySkills: ["JavaScript", "React", "Python", "Docker", "MongoDB"],
      strengths: ["Problem solving", "API development", "DevOps skills"],
      matchReasons: [
        "Solid full-stack development background",
        "4 years experience fits mid-level requirements",
        "Strong problem-solving skills evident in project descriptions"
      ]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      phone: "+1 (555) 456-7890",
      location: "New York, NY", 
      score: 86,
      rank: 3,
      title: "Frontend Developer",
      experience: "3 years",
      keySkills: ["React", "Vue.js", "CSS", "JavaScript", "Git"],
      strengths: ["UI/UX focus", "Modern frameworks", "Responsive design"],
      matchReasons: [
        "Excellent frontend skills with React expertise",
        "3 years experience meets minimum requirements",
        "Strong focus on user experience and modern development practices"
      ]
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@email.com",
      phone: "+1 (555) 567-8901",
      location: "Seattle, WA",
      score: 82,
      rank: 4,
      title: "Backend Developer", 
      experience: "4 years",
      keySkills: ["Node.js", "Python", "MySQL", "REST APIs", "Microservices"],
      strengths: ["Backend architecture", "Database design", "API development"],
      matchReasons: [
        "Strong backend development experience",
        "4 years experience aligns with mid-level position",
        "Microservices and API expertise valuable for scalable systems"
      ]
    },
    {
      id: 5,
      name: "Lisa Wang",
      email: "lisa.wang@email.com",
      phone: "+1 (555) 678-9012",
      location: "Denver, CO",
      score: 78,
      rank: 5,
      title: "Software Developer",
      experience: "3 years",
      keySkills: ["Java", "Spring", "React", "SQL", "Jenkins"],
      strengths: ["Java expertise", "CI/CD knowledge", "Testing practices"],
      matchReasons: [
        "Strong Java and Spring framework background",
        "3 years experience meets position requirements",
        "Good understanding of DevOps and testing practices"
      ]
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-accent";
    if (score >= 80) return "text-secondary";
    if (score >= 70) return "text-warning";
    return "text-muted-foreground";
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 90) return "default";
    if (score >= 80) return "secondary"; 
    return "outline";
  };

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.keySkills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filterBy === "top") return candidate.score >= 85 && matchesSearch;
    if (filterBy === "good") return candidate.score >= 75 && candidate.score < 85 && matchesSearch;
    return matchesSearch;
  });

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
                <h1 className="text-2xl font-bold text-foreground">Candidate Results</h1>
                <p className="text-sm text-muted-foreground">AI-Powered Resume Analysis Results</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate("/job-analysis")}>
                ← New Analysis
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export Results
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Job Summary */}
        <Card className="mb-8 shadow-card border-0">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              <div>
                <CardTitle className="font-heading">Analysis Summary</CardTitle>
                <CardDescription>Job requirements and analysis parameters</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Experience Level</Label>
                <p className="text-lg font-semibold">{jobData.experienceLevel}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Source Folder</Label>
                <p className="text-lg font-semibold">{jobData.selectedFolder}</p>
              </div>
              <div>
                <Label className="text-sm font-medium text-muted-foreground">Candidates Found</Label>
                <p className="text-lg font-semibold">{candidates.length} Resumes</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filters and Search */}
        <Card className="mb-6 shadow-card border-0">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name, title, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-11"
                  />
                </div>
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="score">Sort by Score</SelectItem>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="experience">Sort by Experience</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-48 h-11">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Candidates</SelectItem>
                  <SelectItem value="top">Top Matches (85+)</SelectItem>
                  <SelectItem value="good">Good Matches (75-85)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="space-y-6">
          {filteredCandidates.map((candidate) => (
            <Card key={candidate.id} className="shadow-card border-0 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                      #{candidate.rank}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{candidate.name}</h3>
                      <p className="text-lg text-muted-foreground mb-3">{candidate.title}</p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          {candidate.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {candidate.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {candidate.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`text-4xl font-bold mb-2 ${getScoreColor(candidate.score)}`}>
                      {candidate.score}%
                    </div>
                    <Badge variant={getScoreBadgeVariant(candidate.score)} className="px-3 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Match Score
                    </Badge>
                  </div>
                </div>

                <div className="mb-6">
                  <Progress value={candidate.score} className="h-3" />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Key Skills */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-primary" />
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {candidate.keySkills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Strengths */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-secondary" />
                      Strengths
                    </h4>
                    <ul className="space-y-1">
                      {candidate.strengths.map((strength, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <TrendingUp className="w-3 h-3 text-accent" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Match Reasons */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-accent" />
                      Why This Match?
                    </h4>
                    <ul className="space-y-2">
                      {candidate.matchReasons.slice(0, 2).map((reason, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          • {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    {candidate.experience} experience
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Resume
                    </Button>
                    <Button size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Candidate
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <Card className="mt-12 shadow-card border-0">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">{candidates.length}</div>
                <div className="text-sm text-muted-foreground">Total Candidates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {candidates.filter(c => c.score >= 85).length}
                </div>
                <div className="text-sm text-muted-foreground">Top Matches</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {Math.round(candidates.reduce((sum, c) => sum + c.score, 0) / candidates.length)}%
                </div>
                <div className="text-sm text-muted-foreground">Avg Match Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">2.3s</div>
                <div className="text-sm text-muted-foreground">Analysis Time</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;