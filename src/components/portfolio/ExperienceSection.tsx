import { Briefcase, Users, Award } from 'lucide-react';

const experiences = [
  {
    title: 'Staff Divisi IT',
    organization: 'Himpunan Mahasiswa Teknik Informatika (HMTI)',
    period: '2024 - Sekarang',
    type: 'Organisasi',
    icon: Users,
    tasks: [
      'Mengelola dan memelihara website resmi himpunan',
      'Membuat desain publikasi digital untuk event kampus',
      'Berkolaborasi dengan divisi lain untuk kebutuhan teknologi',
    ],
  },
  {
    title: 'Web Developer Volunteer',
    organization: 'Panitia Dies Natalis ITI ke-40',
    period: 'September 2023',
    type: 'Kepanitiaan',
    icon: Briefcase,
    tasks: [
      'Membangun landing page untuk event Dies Natalis',
      'Mengimplementasikan fitur countdown dan registrasi',
      'Bekerja dalam tim dengan deadline yang ketat',
    ],
  },
  {
    title: 'Peserta Bootcamp',
    organization: 'Dicoding Indonesia - Frontend Developer Path',
    period: 'Juli - Agustus 2024',
    type: 'Sertifikasi',
    icon: Award,
    tasks: [
      'Mempelajari fundamental web development',
      'Membangun proyek akhir berupa web app interaktif',
      'Mendapatkan sertifikasi resmi dari Dicoding',
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
            Perjalanan organisasi, kepanitiaan, dan pengembangan diri
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
