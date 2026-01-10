import { Briefcase, Users, Award, } from 'lucide-react';

const experiences = [
  {
    title: "UI/UX & Frontend Developer Intern",
    organization: "PT Flaz Technology Indonesia (Remote)",
    period: "Okt 2025 – Jan 2026",
    type: "Magang",
    icon: Briefcase,
    tasks: [
      "Menerjemahkan kebutuhan bisnis menjadi user flow, wireframe, dan desain high-fidelity di Figma.",
      "Mengembangkan kode Front-End yang responsif dengan struktur navigasi antarmuka yang dinamis.",
      "Berkoordinasi dengan tim Back-End dan mengelola version control menggunakan GitHub.",
    ],
  },
  {
    title: "Product Manager – GlowTech (AI Skincare Assistant)",
    organization: "Proyek Rekayasa Perangkat Lunak – ITI",
    period: "Maret 2025 – Juni 2025",
    type: "Proyek Akademik",
    icon: Award,
    tasks: [
      "Menyusun visi produk, backlog fitur, dan jadwal pengembangan dengan pendekatan Agile.",
      "Mendistribusikan tugas lintas divisi dan memfasilitasi kolaborasi tim selama siklus pengembangan.",
      "Mempresentasikan prototipe web asisten perawatan kulit berbasis AI kepada dosen.",
    ],
  },
  {
    title: "Mobile App Developer – StudySprint",
    organization: "Proyek Pengembangan Aplikasi Mobile – ITI",
    period: "April 2025 – Juni 2025",
    type: "Proyek Mandiri",
    icon: Briefcase,
    tasks: [
      "Membangun aplikasi produktivitas berbasis Android menggunakan Ionic React.",
      "Mengimplementasikan logika manajemen waktu belajar dan penyimpanan data lokal (local storage).",
      "Mengelola siklus pengembangan penuh: dari perancangan UI hingga deployment file APK.",
    ],
  },
  {
    title: "Project Leader – SpyTech Smart Helmet IoT",
    organization: "Proyek Kewirausahaan Lanjut – ITI",
    period: "Sept 2025 – Sekarang",
    type: "Kepemimpinan & Venture",
    icon: Award,
    tasks: [
      "Memimpin perumusan visi produk, strategi bisnis, dan value proposition untuk solusi helm pintar berbasis IoT.",
      "Mengkoordinasikan pengembangan integrasi ESP32, GPS, dan notifikasi real-time via Telegram Bot.",
      "Mewakili tim dalam sesi pitching dan presentasi Demo Day di hadapan evaluator.",
    ],
  },
    {
    title: "Google Student Ambassador",
    organization: "Institut Teknologi Indonesia",
    period: "2024 – Sekarang",
    type: "Kepemimpinan & Komunitas",
    icon: Users,
    tasks: [
      "Menjadi penghubung antara komunitas kampus dan ekosistem teknologi Google.",
      "Menginisiasi dan membantu menyelenggarakan sesi sharing, workshop, dan kegiatan literasi digital.",
      "Mendorong teman-teman mahasiswa untuk mengeksplorasi teknologi baru dan peluang pengembangan diri di bidang IT.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-card/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Pengalaman <span className="gradient-text">Saya</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Rangkaian magang, proyek, dan organisasi yang mengasah skill teknis dan soft skills
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 z-10">
                  <div className="timeline-dot" />
                </div>

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-card border border-border rounded-xl p-6 card-hover">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl gradient-bg shrink-0">
                        <exp.icon size={20} className="text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs text-primary font-medium">{exp.type}</span>
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-muted-foreground text-sm">{exp.organization}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="mb-4">
                      <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-md">
                        {exp.period}
                      </span>
                    </div>

                    {/* Tasks */}
                    <ul className="space-y-2">
                      {exp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
