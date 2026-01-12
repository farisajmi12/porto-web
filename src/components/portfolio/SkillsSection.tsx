import { Sparkles, BookOpenCheck, Compass } from "lucide-react";

const skillCategories = [
  {
    title: "Comfortable",
    icon: Sparkles,
    description:
      "Skill yang sering saya gunakan dalam proyek dan merasa cukup percaya diri.",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "CodeIgniter", level: 85 },
    ],
  },
  {
    title: "Learning",
    icon: BookOpenCheck,
    description:
      "Skill yang sedang aktif saya pelajari dan terapkan di beberapa proyek.",
    skills: [
      { name: "TypeScript", level: 65 },
      { name: "Ionic React / React", level: 60 },
      { name: "Tailwind CSS", level: 70 },
      { name: "Vercel / Netlify", level: 70 },
      { name: "npm / yarn", level: 70 },
    ],
  },
  {
    title: "Exploring",
    icon: Compass,
    description:
      "Bidang yang sedang saya eksplor lebih jauh melalui proyek dan pengalaman organisasi.",
    skills: [
      { name: "Product Management", level: 60 },
      { name: "Agile & Team Leadership", level: 65 },
      { name: "Public Speaking & Teaching", level: 55 },
      { name: "Problem Solving & Critical Thinking", level: 68 },
      { name: "Adaptabilitas & Kreativitas", level: 70 },
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
            Gambaran kemampuan yang saat ini paling sering saya gunakan,
            pelajari, dan eksplor.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl gradient-bg">
                  <category.icon
                    size={24}
                    className="text-primary-foreground"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4 mt-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      {/* tidak menampilkan angka persentase */}
                      <span className="text-xs text-muted-foreground">
                        {/* label kecil opsional, misal "level" visual saja */}
                      </span>
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
