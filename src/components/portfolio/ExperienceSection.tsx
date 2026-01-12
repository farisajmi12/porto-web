import { Briefcase, Users, Award, } from 'lucide-react';

const experiences = [
  {
    title: "Back-End Developer Intern",
    organization: "PT Flaz Technology Indonesia (Remote)",
    period: "Okt 2025 – Jan 2026",
    type: "Magang",
    icon: Briefcase,
    tasks: [
    "Merancang logika server-side berbasis arsitektur MVC serta sistem validasi data yang efisien.",
    "Mengelola struktur database, query, dan fitur otentikasi untuk optimalisasi keamanan sistem.",
    "Membangun integrasi API dengan layanan pihak ketiga untuk otomatisasi pengiriman data.",
    "Melakukan unit testing dan mengelola version control via GitHub untuk menjaga stabilitas kode.",
    ],
  },
  {
    title: "SIMNU – Website Relawan Santri NU",
    organization: "Proyek Pengembangan Web Nahdlatul Ulama",
    period: "April 2025 – Juli 2025",
    type: "Proyek Akademik",
    icon: Award,
    tasks: [
      "Merancang UI/UX intuitif dengan pendekatan user-centered design",
      "Membangun sistem manajemen data penerima manfaat (anak yatim, dhuafa, dll) dengan fitur CRUD dan validasi real-time",
      "Mengembangkan dashboard visualisasi data untuk monitoring distribusi bantuan",
      "Menerapkan keamanan form (sanitasi data, CSRF protection)",
      "Berkolaborasi menggunakan Git dan melakukan user testing dengan stakeholder"
    ],
  },
  {
    title: "Mobile App Developer – MoneyMate",
    organization: "Proyek Pengembangan Aplikasi Mobile – ITI",
    period: "April 2025 – Juni 2025",
    type: "Proyek Mandiri",
    icon: Briefcase,
    tasks: [
    "Merancang konsep dan UI/UX aplikasi mobile dengan Ionic (React)",
    "Mengembangkan fitur untuk mengantur uang, dan bisa menyimpan uang",
    "Mendokumentasikan kode dan membuat aplikasi berjalan di Android",
    "Direncanakan pengembangan lanjutan fitur dan UI improvement"
    ],
  },
  {
    title: "JAROS - Website",
    organization: "PT Flaz Technology Indonesia (Remote)",
    period: "Okt 2025 – Jan 2026",
    type: "Magang",
    icon: Award,
    tasks: [
     "Merancang dan membangun platform berbasis web untuk manajemen data sosial kemasyarakatan dan jejaring alumni secara terintegrasi.",
     "Mengembangkan fitur database untuk pengelolaan, validasi, dan penyaluran bantuan bagi Anak Yatim, Kaum Dhuafa, dan Janda Jompo agar data tersentralisasi dan akurat.",
     "Mengimplementasikan fitur pendataan dan pencarian alumni khusus untuk lulusan Pondok Pesantren Daar El-Qolam dan La Tansa, guna mempererat konektivitas antar-lulusan."
    ],
  },
    {
    title: "Desain Spanduk untuk Acara Pertemuan Kelas ",
    organization: "Institut Teknologi Indonesia",
    period: "Januari 2025",
    type: "Desain Grafis",
    icon: Users,
    tasks: [
      "Merancang spanduk untuk acara bersama anggota tim.",
      "Menetapkan tema, palet warna, dan elemen desain melalui diskusi kelompok yang kolaboratif.",
      "Menciptakan visual yang menggambarkan kebersamaan dan melambangkan identitas klien."
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
