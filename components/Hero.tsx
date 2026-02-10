import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const titles = [
  "Chef d'Entreprises",
  "Dirigeant d'ONGs",
  "Directeur de Centres de Recherches",
  "Consultant International",
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50/40 -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary-200/30 via-accent-200/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent-200/30 via-primary-200/20 to-transparent rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-300/10 to-accent-300/10 rounded-full blur-2xl -z-10 animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-tl from-accent-300/10 to-primary-300/10 rounded-full blur-2xl -z-10 animate-pulse" style={{ animationDuration: '3.5s' }} />

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Coat of Arms */}
        <div className="relative mb-12 group w-full max-w-md mx-auto lg:max-w-xs">
          <div className="absolute -inset-6 bg-gradient-to-r from-primary-400/30 via-accent-400/30 to-primary-400/30 rounded-3xl blur-3xl group-hover:blur-[60px] transition-all duration-700 opacity-60 group-hover:opacity-80 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="relative bg-white p-6 sm:p-8 rounded-3xl shadow-2xl ring-2 ring-primary-200/50 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] group-hover:scale-[1.03] transition-all duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Image
              src="/images/ad-majoribus.webp"
              alt="Blason Mobutu Zemanga"
              width={400}
              height={500}
              priority
              fetchPriority="high"
              className="relative w-full h-auto mx-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wide mb-8 flex flex-col gap-4">
          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-[0.3em] bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 bg-clip-text text-transparent uppercase animate-fade-in">
            Monsieur
          </div>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 opacity-20 blur-2xl" />
            <div className="relative bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 bg-clip-text text-transparent leading-tight animate-gradient-x">
              MOBUTU ZEMANGA
            </div>
          </div>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 mx-auto rounded-full shadow-lg shadow-primary-300/50 animate-pulse" style={{ animationDuration: '3s' }}></div>
        </h1>

        {/* Motto */}
        <div className="mb-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-300/30 via-accent-300/30 to-primary-300/30 blur-xl rounded-full" />
            <p className="relative font-motto text-xl sm:text-2xl lg:text-3xl italic font-bold text-primary-700 leading-relaxed px-6 py-2">
              &ldquo;Ad majoribus dei auxilio&rdquo;
            </p>
          </div>
          <div className="h-0.5 w-40 bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto mt-4"></div>
        </div>

        {/* Title Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto">
          {titles.map((title, index) => (
            <Badge
              key={title}
              variant="outline"
              className="group relative overflow-hidden px-6 py-3 bg-white/80 backdrop-blur-sm border-2 border-primary-300/50 hover:border-primary-500 text-primary-700 font-bold text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl hover:shadow-primary-300/30 hover:scale-110 transition-all duration-500 cursor-default"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative bg-gradient-to-r from-primary-700 via-accent-600 to-primary-700 bg-clip-text text-transparent group-hover:from-accent-600 group-hover:via-primary-700 group-hover:to-accent-600 transition-all duration-500">
                {title}
              </span>
            </Badge>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group relative overflow-hidden bg-white hover:bg-primary-50 border-2 border-primary-500/50 hover:border-primary-600 text-primary-700 hover:text-primary-800 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-6 text-base font-bold"
          >
            <a href="#contact" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>Me contacter</span>
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-400/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
