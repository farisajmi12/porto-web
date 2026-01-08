import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Landing Page Perusahaan Fiktif',
    category: 'Proyek Kuliah – Pemrograman Web',
    description:
      'Website company profile untuk perusahaan startup fiktif. Proyek ini mengajarkan saya tentang struktur layout yang baik dan responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    sourceUrl: '#',
    image: '🏢',
  },
  {
    title: 'TaskMaster - To-Do List App',
    category: 'Side Project',
    description:
      'Aplikasi manajemen tugas dengan fitur CRUD lengkap dan penyimpanan lokal. Proyek pertama saya menggunakan React dan state management.',
    tech: ['React', 'Tailwind CSS', 'LocalStorage'],
    liveUrl: '#',
    sourceUrl: '#',
    image: '✅',
  },
  {
    title: 'Spotify UI Clone',
    category: 'Side Project',
    description:
      'Cloning tampilan Spotify Web Player untuk melatih kemampuan CSS dan memahami layout kompleks dari aplikasi nyata.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    sourceUrl: '#',
    image: '🎵',
  },
  {
    title: 'Personal Blog',
    category: 'Proyek Kuliah – Web Lanjutan',
    description:
      'Blog sederhana dengan sistem artikel dan kategori. Fokus pada semantic HTML dan aksesibilitas dasar.',
    tech: ['Next.js', 'Tailwind CSS', 'Markdown'],
    liveUrl: '#',
    sourceUrl: '#',
    image: '📝',
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Folder size={18} />
            Lihat lebih banyak proyek di GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
