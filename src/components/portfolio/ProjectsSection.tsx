import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Website Alumni Sekolah dan Donasi (Unit Pengumpulan zakat)',
    category: 'Intern Project - Client Work',
    description:
      'Mengembangkan dan memelihara website klien dari sisi desain hingga implementasi frontend, sekaligus berkolaborasi dengan tim backend.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Git', 'Figma', 'VS Code', 'GitHub',],
    liveUrl: '#',
    sourceUrl: '#',
    image: '💻',
  },
  {
    title: 'Mobile App Developer – StudySprint',
    category: 'College Project',
    description:
      'Membangun aplikasi produktivitas belajar berbasis Android menggunakan Ionic React dengan fitur manajemen waktu dan penyimpanan data lokal.',
    tech: ['IonicReact', 'TypeScript', 'Java', 'CSS', 'JavaScript', 'HTML', 'Android Studio'],
    liveUrl: 'https://drive.google.com/file/d/1JIWWNmCdG5rLUihqh0MQD15SzkXKss0F/view?usp=sharing',
    sourceUrl: 'https://github.com/RevinaAgustin/StudySprint.git',
    image: '📱',
  },
  {
    title: 'Product Manager – GlowTech (AI Skincare Assistant)',
    category: 'College Project',
    description:
      'Memimpin perancangan produk asisten perawatan kulit berbasis AI, mulai dari penyusunan visi, backlog fitur, hingga presentasi prototipe.',
    tech: ['Product Management', 'Team Leadership', 'Agile', 'Teamwork'],
    liveUrl: '#',
    sourceUrl: '#',
    image: '🤖',
  },
  {
    title: 'Project Leader – SpyTech Smart Helmet IoT',
    category: 'College Project',
    description:
      'Memimpin tim pengembangan helm pintar berbasis IoT untuk pencegahan pencurian, membantu integrasi ESP32, GPS, dan notifikasi real-time via Telegram Bot.',
    tech: ['Product Strategy', 'Team Leadership'],
    liveUrl: '#',
    sourceUrl: '#',
    image: '🏍️',
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
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-[hsl(199,89%,48%)]/20 flex items-center justify-center text-6xl relative overflow-hidden">
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/20 text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/30">
                    {project.category}
                  </span>
                </div>
              </div>

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
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.sourceUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
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
