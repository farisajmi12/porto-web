import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Website Alumni Sekolah dan Donasi (Unit Pengumpulan zakat)',
    category: 'Intern Project - Client Work',
    description:
      'Mengembangkan dan memelihara website klien dari sisi desain hingga implementasi frontend, sekaligus berkolaborasi dengan tim backend.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Git', 'Figma', 'VS Code', 'GitHub'],
    liveUrl: 'https://dezis.zyrex.win',
    sourceUrl: 'https://github.com/farisajmi12',
    figmaUrl: 'https://www.figma.com/proto/uy6AkneK8fJj6AuEsphQXY/JAROS?node-id=267-63&t=qySG9G9AaCf7hLEf-1',
    // Menggunakan sertif1.jpg dari folder public
    image: '/jaros.png',
  },
  {
    title: 'Mobile App Developer – MoneyMate',
    category: 'College Project',
    description:
      'Membangun aplikasi produktivitas belajar berbasis Android menggunakan Ionic React dengan fitur mengantur uang, dan bisa menyimpan uang.',
    tech: ['IonicReact', 'TypeScript', 'Java', 'CSS', 'JavaScript', 'HTML', 'Android Studio'],
    liveUrl: 'https://drive.google.com/file/d/1JIWWNmCdG5rLUihqh0MQD15SzkXKss0F/view?usp=sharing',
    sourceUrl: '',
    // Menggunakan sertif2.jpg dari folder public
    image: '/moneymate.png',
  },
  {
    title: 'SIMNU – Website Relawan Santri NU',
    category: 'College Project',
    description:
      'Membangun sistem manajemen data penerima manfaat (anak yatim, dhuafa, dll) dengan fitur CRUD dan validasi real-time',
    tech: ['Product Management', 'Team Leadership', 'Agile', 'Teamwork'],
    liveUrl: 'https://relawansantrinu.dezis.id',
    sourceUrl: 'https://github.com/farisajmi12',
    // Jika belum ada gambar khusus, gunakan placeholder.svg atau icon.png
    image: '/SIMNU.png',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Proyek <span className="gradient-text">Saya</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Koleksi proyek kuliah dan side project yang telah saya kerjakan
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card group">
              
              {/* === BAGIAN INI DIUBAH UNTUK MENAMPILKAN GAMBAR === */}
              <div className="h-48 bg-muted relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Gelap (Opsional: agar tulisan di atas gambar terbaca jika ada, atau untuk estetika) */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-background/80 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/30">
                    {project.category}
                  </span>
                </div>
              </div>
              {/* ================================================= */}

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}

                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}

                  {project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Figma Prototype
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/RevinaAgustin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Folder size={18} />
            Lihat proyek di GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;