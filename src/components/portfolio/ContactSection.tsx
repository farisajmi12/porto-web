import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:revina.agustin@example.com',
    label: 'revina.agustin@example.com',
    color: 'hover:text-red-400',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com',
    label: '@revinaagustin',
    color: 'hover:text-gray-300',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'Revina Agustin Rahma',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com',
    label: '@revina.dev',
    color: 'hover:text-pink-400',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Hubungi <span className="gradient-text">Saya</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Tertarik untuk berkolaborasi atau punya kesempatan menarik? Mari terhubung!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Mari Berbicara!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Saya selalu terbuka untuk diskusi tentang peluang magang, proyek freelance, 
                  atau sekadar ngobrol tentang teknologi dan pengembangan web. Jangan ragu 
                  untuk menghubungi saya melalui platform berikut:
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 bg-card border border-border rounded-xl transition-all duration-300 hover:border-primary/50 hover:-translate-x-1 ${link.color}`}
                  >
                    <div className="p-3 rounded-lg bg-secondary">
                      <link.icon size={20} />
                    </div>
                    <div>
                      <p className="font-medium">{link.name}</p>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Quick Contact Form */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Send size={20} className="text-primary" />
                Kirim Pesan
              </h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="email@contoh.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                  onClick={() => alert('Fitur form akan segera aktif!')}
                >
                  <Send size={18} />
                  Kirim Pesan
                </button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  * Form ini masih dalam pengembangan. Silakan hubungi melalui email atau sosial media.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
