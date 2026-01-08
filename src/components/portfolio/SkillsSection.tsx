import { Code2, Wrench, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    description: 'Teknologi yang saya gunakan untuk membangun antarmuka web',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript (ES6+)', level: 80 },
      { name: 'React.js', level: 70 },
      { name: 'Next.js', level: 60 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    title: 'Tools & Platform',
    icon: Wrench,
    description: 'Alat dan platform yang mendukung workflow saya',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'Figma', level: 75 },
      { name: 'VS Code', level: 90 },
      { name: 'Vercel/Netlify', level: 75 },
      { name: 'npm/yarn', level: 80 },
      { name: 'Chrome DevTools', level: 85 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    description: 'Kemampuan non-teknis yang saya kembangkan',
    skills: [
      { name: 'Kerja Tim', level: 90 },
      { name: 'Komunikasi', level: 85 },
      { name: 'Problem Solving', level: 80 },
      { name: 'Manajemen Waktu', level: 75 },
      { name: 'Adaptabilitas', level: 85 },
      { name: 'Kreativitas', level: 80 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-card/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Skills & <span className="gradient-text">Keahlian</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Kemampuan teknis dan non-teknis yang terus saya asah
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="skill-card">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl gradient-bg">
                  <category.icon size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4 mt-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
