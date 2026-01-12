import { ArrowDown, Download } from 'lucide-react';

const HeroSection = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 md:pt-20 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[hsl(199,89%,48%)]/20 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-primary font-medium mb-4 animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Hello There! I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <span className="gradient-text">Muhammad Faris Ajmi</span>
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium mb-8 animate-fade-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            Informatics Student focused on {' '}
            <span className="text-foreground"> Fullstack Development</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Mahasiswa yang memadukan logika kode dengan estetika desain untuk membangun produk digital yang fungsional. 
            Berkomitmen menciptakan antarmuka web yang fungsional, responsif, dan berpusat pada pengguna
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <button
              onClick={handleScrollToProjects}
              className="btn-primary flex items-center gap-2"
            >
              Lihat Proyek
              <ArrowDown size={18} />
            </button>

            <a
              href="/MuhammadFarisAjmi_CV.pdf"
              download="Muhammad-Faris-Ajmi_CV.pdf"
              className="btn-outline flex items-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
