import { MapPin, GraduationCap, Target, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Tentang <span className="gradient-text">Saya</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Mengenal lebih dekat siapa saya dan apa yang saya kejar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar/Image placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl gradient-bg p-1">
                <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                      <span className="text-5xl md:text-6xl">👩‍💻</span>
                    </div>
                    <p className="text-muted-foreground text-sm">Foto Profil</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[hsl(199,89%,48%)]/20 rounded-full blur-xl" />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Hai! Saya <span className="text-foreground font-medium">Revina Agustin Rahma</span>, 
              mahasiswa semester 6 di <span className="text-foreground font-medium">Teknik Informatika, 
              Institut Teknologi Indonesia</span>. Saya memiliki ketertarikan mendalam pada dunia 
              Frontend Development dan UI/UX Design.
            </p>

            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Perjalanan saya di dunia web development dimulai dari tugas kuliah sederhana, 
              dan kini saya terus mengembangkan skill melalui berbagai proyek pribadi dan 
              kolaborasi tim. Saya percaya bahwa antarmuka yang baik adalah yang tidak hanya 
              indah, tetapi juga fungsional dan mudah digunakan.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Lokasi</p>
                  <p className="font-medium">Tangerang, ID</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Semester</p>
                  <p className="font-medium">Semester 6</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tujuan</p>
                  <p className="font-medium">Magang & Freelance</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Heart size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Minat</p>
                  <p className="font-medium">Frontend & UI/UX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
