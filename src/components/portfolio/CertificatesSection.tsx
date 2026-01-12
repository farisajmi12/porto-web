// src/sections/CertificatesSection.tsx
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Website Development: Front End",
    issuer: "MySkill Indonesia",
    date: "September 2025",
    link: "https://www.dicoding.com/certificates/XXXX",
  },
  {
    title: "Front-End Web Development",
    issuer: "Coursera",
    date: "Agustus 2023",
    link: "https://coursera.org/verify/YYYY",
  },
];

// src/sections/CertificatesSection.tsx
const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 md:py-24">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="section-title">
            Galeri <span className="gradient-text">Sertifikat</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Beberapa sertifikat yang pernah saya raih selama perjalanan belajar
          </p>
        </div>

        {/* 2 sertifikat sebagai gambar */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group rounded-xl border border-border bg-card/60 overflow-hidden hover:border-primary/60 hover:bg-primary/5 transition-colors">
            <img
              src="/sertif1.jpg"
              alt="Sertifikat 1 -  short class UI/UX Research and Desain by MySkill"
              className="w-full h-full object-contain bg-background/80"
            />
          </div>

          <div className="group rounded-xl border border-border bg-card/60 overflow-hidden hover:border-primary/60 hover:bg-primary/5 transition-colors">
            <img
              src="/sertif2.jpg"
              alt="Sertifikat 2 - Belajar Dasar Ai by Dicoding"
              className="w-full h-full object-contain bg-background/80"
            />
          </div>
        </div>

        {/* Link ke sertifikat lain */}
        <div className="mt-8 text-center">
          <a
            href="https://drive.google.com/drive/folders/1xXbzr-q2sKV9UnaO4IQ-1sSGiY2C6rmm?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-sm md:text-base text-primary hover:text-primary/80 underline underline-offset-4"
          >
            Lihat sertifikat lainnya
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;