import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import athkarLogo from "@/assets/athkar-logo.png";
import { 
  BookOpen, 
  Clock, 
  Globe, 
  MessageCircle, 
  Bell, 
  Users,
  Calendar,
  Mic,
  Star,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: "Prayer Times",
      titleAr: "أوقات الصلاة",
      description: "Accurate prayer times with automatic reminders for your location",
      descriptionAr: "أوقات صلاة دقيقة مع تذكيرات تلقائية لموقعك"
    },
    {
      icon: BookOpen,
      title: "Quran Reading",
      titleAr: "قراءة القرآن",
      description: "Read Quran by page, surah, or juz with beautiful Arabic calligraphy",
      descriptionAr: "اقرأ القرآن بالصفحة أو السورة أو الجزء مع خط عربي جميل"
    },
    {
      icon: MessageCircle,
      title: "Daily Athkar",
      titleAr: "الأذكار اليومية",
      description: "Morning and evening Islamic remembrance automatically delivered",
      descriptionAr: "أذكار الصباح والمساء تصلك تلقائياً"
    },
    {
      icon: Mic,
      title: "Quran Recitation",
      titleAr: "تلاوة القرآن",
      description: "Voice playback with multiple renowned reciters",
      descriptionAr: "تشغيل صوتي مع العديد من القراء المشهورين"
    },
    {
      icon: Calendar,
      title: "Islamic Events",
      titleAr: "المناسبات الإسلامية",
      description: "Track important Islamic dates and celebrations",
      descriptionAr: "تتبع التواريخ والمناسبات الإسلامية المهمة"
    },
    {
      icon: Globe,
      title: "Multi-Language",
      titleAr: "متعدد اللغات",
      description: "Full support for Arabic and English languages",
      descriptionAr: "دعم كامل للغتين العربية والإنجليزية"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      titleAr: "تذكيرات ذكية",
      description: "Personalized reminders for prayers and Islamic practices",
      descriptionAr: "تذكيرات شخصية للصلاة والممارسات الإسلامية"
    },
    {
      icon: Star,
      title: "Hadith Collection",
      titleAr: "مجموعة الأحاديث",
      description: "Daily authentic hadiths from trusted sources",
      descriptionAr: "أحاديث صحيحة يومية من مصادر موثوقة"
    }
  ];

  const stats = [
    { value: "100+", label: "Active Servers", labelAr: "سيرفر نشط" },
    { value: "12k+", label: "Total Users", labelAr: "مستخدم" },
    { value: "1M+", label: "Daily Prayers", labelAr: "صلاة يومية" },
    { value: "24/7", label: "Always Online", labelAr: "متاح دائماً" }
  ];

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const inviteBot = () => {
    window.open('https://discord.com/api/oauth2/authorize?client_id=1399336621987467335&permissions=549756004352&scope=bot', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-cream to-background">
      {/* Decorative Background Pattern */}
      <div className="fixed inset-0 pattern-islamic opacity-30 pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50 shadow-soft">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={athkarLogo} alt="Athkar Bot" className="w-10 h-10 rounded-full shadow-soft" />
            <span className="text-2xl font-bold bg-gradient-to-r from-islamic-green to-islamic-green-dark bg-clip-text text-transparent">
              Athkar
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-smooth">Features</a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
            <a href="https://discord.gg/jajcq9Fz" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-smooth">Support</a>
          </div>
          <Button onClick={inviteBot} className="gradient-primary hover:opacity-90 transition-smooth shadow-soft">
            Invite Bot
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left animate-fade-in">
              <Badge className="mb-4 bg-islamic-gold/20 text-islamic-gold border-islamic-gold/30 hover:bg-islamic-gold/30">
                ✨ Trusted by most of our users
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-islamic-green via-islamic-green-light to-islamic-green bg-clip-text text-transparent">
                  Your Islamic
                </span>
                <br />
                <span className="text-foreground">Companion on</span>
                <br />
                <span className="text-islamic-gold">Discord</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Bring prayer times, Quran recitation, daily athkar, and Islamic reminders directly to your Discord server. 
                Built with love for the Muslim community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={inviteBot}
                  className="gradient-primary hover:opacity-90 transition-smooth shadow-elevated text-lg px-8 group"
                >
                  Add to Discord
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={scrollToFeatures}
                  className="border-2 border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white transition-smooth text-lg px-8"
                >
                  Explore Features
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-islamic-green/20 rounded-full blur-3xl animate-glow" />
                <img 
                  src={athkarLogo} 
                  alt="Athkar Bot Logo" 
                  className="relative w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-islamic-green to-islamic-green-light relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
                <div className="text-white/70 text-sm mt-1 font-arabic">
                  {stat.labelAr}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-islamic-green/10 text-islamic-green border-islamic-green/20">
              <Sparkles className="w-4 h-4 mr-1" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need for
              <span className="text-islamic-green"> Islamic Practice</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to enhance your spiritual journey and keep your community connected
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 gradient-card border-border/50 hover:shadow-elevated transition-smooth hover:-translate-y-2 cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-islamic-green/10 flex items-center justify-center mb-4 group-hover:bg-islamic-green group-hover:shadow-glow transition-smooth">
                  <feature.icon className="w-6 h-6 text-islamic-green group-hover:text-white transition-smooth" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-islamic-green transition-smooth">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {feature.description}
                </p>
                <p className="text-sm text-islamic-gold font-arabic" dir="rtl">
                  {feature.descriptionAr}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-islamic-green/10 text-islamic-green border-islamic-green/20">
                <Shield className="w-4 h-4 mr-1" />
                Trusted & Reliable
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Built for the
                <span className="text-islamic-green"> Muslim Community</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Athkar Bot was created to help Muslim communities stay connected to their faith through technology. 
                With precise prayer times, authentic Islamic content, and easy-to-use features, we make it simple 
                to integrate Islamic practices into your daily Discord experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-islamic-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Authentic Islamic Content</h4>
                    <p className="text-muted-foreground">All content verified from trusted Islamic sources</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-islamic-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Privacy Focused</h4>
                    <p className="text-muted-foreground">Your data is secure and never shared with third parties</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-islamic-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Always Improving</h4>
                    <p className="text-muted-foreground">Regular updates with new features based on community feedback</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <Card className="p-8 gradient-card shadow-elevated">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-islamic-green/5 border border-islamic-green/10">
                    <Users className="w-8 h-8 text-islamic-green" />
                    <div>
                      <div className="font-bold text-xl">500,000+</div>
                      <div className="text-sm text-muted-foreground">Active Users</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-islamic-gold/5 border border-islamic-gold/10">
                    <Clock className="w-8 h-8 text-islamic-gold" />
                    <div>
                      <div className="font-bold text-xl">24/7 Uptime</div>
                      <div className="text-sm text-muted-foreground">Always Available</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-islamic-green/5 border border-islamic-green/10">
                    <Star className="w-8 h-8 text-islamic-green" />
                    <div>
                      <div className="font-bold text-xl">4.9/5 Rating</div>
                      <div className="text-sm text-muted-foreground">From Our Users</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="gradient-primary p-12 text-center shadow-elevated relative overflow-hidden">
            <div className="absolute inset-0 pattern-dots opacity-20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of Muslim communities already using Athkar Bot to strengthen their faith
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={inviteBot}
                  className="bg-white text-islamic-green hover:bg-white/90 shadow-elevated text-lg px-8 group"
                >
                  Add to Discord Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open('https://discord.gg/jajcq9Fz', '_blank')}
                  className="border-2 border-white text-white hover:bg-white hover:text-islamic-green transition-smooth text-lg px-8"
                >
                  Join Support Server
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={athkarLogo} alt="Athkar Bot" className="w-10 h-10 rounded-full" />
                <span className="text-2xl font-bold bg-gradient-to-r from-islamic-green to-islamic-green-dark bg-clip-text text-transparent">
                  Athkar
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Bringing Islamic practices and community together on Discord
              </p>
              <p className="text-sm text-muted-foreground" dir="rtl">
                نجمع بين الممارسات الإسلامية والمجتمع على Discord
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-islamic-green transition-smooth">Features</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-islamic-green transition-smooth">About</a></li>
                <li><a href="https://discord.gg/jajcq9Fz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-islamic-green transition-smooth">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-islamic-green transition-smooth">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-islamic-green transition-smooth">Commands</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-islamic-green transition-smooth">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2026 Athkar Bot. Made with ❤️ for the Muslim community</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
