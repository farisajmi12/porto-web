import { MapPin, GraduationCap, Target, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="pt-28 pb-20 md:pt-32 md:pb-24 relative overflow-hidden bg-background"
    >
      {/* JANGAN pakai class kustom lain, pakai container standar */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Tentang{" "}
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Saya
            </span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat siapa saya dan apa yang saya kejar
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-center">
          {/* FOTO */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="w-full lg:w-[100%] xl:w-[100%] min-h-[480px]">
              <img
                src="/foto_diri.png"
                alt="Revina Agustin Rahma"
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </div>
          </div>

          {/* KONTEN */}
          <div className="order-1 lg:order-2 space-y-5">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Hai! Saya{" "}
              <span className="text-foreground font-medium text-primary">
                Muhammad Faris Ajmi
              </span>
              , mahasiswa jurusan{" "}
              <span className="text-foreground font-medium">
                Teknik Informatika
              </span>{" "}di{" "}
              <span className="text-foreground font-medium">
                Institut Teknologi Indonesia.
              </span>{" "}
              Saya adalah seorang{" "}
              <span className="text-foreground font-medium">
              software engineering
              </span>{" "}
              dengan keahlian{" "}
              <span className="text-foreground font-medium">
              Web &amp; Mobile Development.
              </span>
            </p>

            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
             Fokus utama saya adalah <span className="text-foreground font-medium">Backend Development</span> dan pengembangan arsitektur sistem yang handal.
             Saya telah membuktikan keahlian ini melalui berbagai proyek nyata, mulai dari merancang logika server-side berbasis MVC, 
             mengelola struktur database yang kompleks, hingga membangun integrasi API untuk otomatisasi sistem. 
             Saya tidak hanya menulis kode, tetapi fokus pada keamanan, efisiensi query, dan performa data, {''}
              <span className="text-foreground font-medium">siap berkontribusi</span> dalam tim Product & Technology untuk menghadirkan solusi digital yang kokoh dan skalabel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3 hover:border-primary/50 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Lokasi</p>
                  <p className="font-medium">Tangerang, ID</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3 hover:border-primary/50 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Semester</p>
                  <p className="font-medium">Semester 6</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3 hover:border-primary/50 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tujuan</p>
                  <p className="font-medium">
                    Magang (Offline/Online) &amp; Freelance
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 flex items-start gap-3 hover:border-primary/50 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Heart size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Minat</p>
                  <p className="font-medium">
                     Web &amp; Mobile Development.
                  </p>
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