import { MapPin, GraduationCap, Target, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    // MODIFIKASI: Menambah padding-top (pt-32 md:pt-40) agar judul turun ke bawah
    <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tentang <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Saya</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mengenal lebih dekat siapa saya dan apa yang saya kejar
          </p>
        </div>

        {/* Layout Grid: Foto Kiri, Konten Kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-stretch">
          
          {/* FOTO - Dimodifikasi menjadi freeform (tanpa radius/shadow) dan memenuhi section */}
          <div className="relative w-full h-full min-h-[400px] lg:min-h-0 order-2 lg:order-1">
            <img
              src="/foto_diri.png"
              alt="Revina Agustin Rahma"
              className="w-full h-full object-cover object-center block"
            />
          </div>

          {/* KONTEN UTAMA - Struktur teks tidak diubah, hanya margin dihapus */}
          <div className="space-y-6 order-1 lg:order-2 flex flex-col justify-center">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Hai! Saya{" "}
              <span className="text-foreground font-medium text-primary">
                Revina Agustin Rahma
              </span>
              , mahasiswa jurusan{" "}
              <span className="text-foreground font-medium">
                Teknik Informatika
              </span>{" "}
              semester 6 di{" "}
              <span className="text-foreground font-medium">
                Institut Teknologi Indonesia
              </span>{" "}
              yang senang menggabungkan logika{" "}
              <span className="text-foreground font-medium">
                software engineering
              </span>{" "}
              dengan sudut pandang{" "}
              <span className="text-foreground font-medium">
                product & UI/UX
              </span>
              . Saya memiliki ketertarikan mendalam pada dunia Frontend
              Development dan UI/UX Design.
            </p>

            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Saya banyak belajar melalui proyek nyata seperti merancang website
              alumni, aplikasi produktivitas, prototipe produk berbasis AI, hingga
              melalui tugas-tugas matakuliah, di mana saya terlibat dari riset
              kebutuhan hingga tampilan akhir yang siap digunakan. Saya percaya
              antarmuka yang efektif adalah yang membuat pengguna merasa tenang:
              tampilan bersih, interaksi responsif, dan alur yang intuitif.
            </p>

            {/* Info Cards - Struktur tetap sama */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
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
                    Magang (Offline/Online) & Freelance
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
                    Software Engineering & Product Management
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