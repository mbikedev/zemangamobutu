import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-accent-500 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/ad-majoribus.webp"
            alt="Blason Mobutu Zemanga"
            width={64}
            height={80}
            loading="lazy"
            className="w-16 h-auto mb-4 opacity-80"
          />

          <h3 className="font-heading text-xl font-bold tracking-wide mb-2">
            MOBUTU ZEMANGA
          </h3>

          <p className="font-motto text-primary-500 italic text-sm mb-6">
            &ldquo;Ad majoribus dei auxilio&rdquo;
          </p>

          <Button
            variant="outline"
            asChild
            className="border-primary-100 text-primary-100 hover:bg-primary-500 hover:text-white mb-8"
          >
            <a
              href="https://mobutuzemanga.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              MobutuZemanga.com
            </a>
          </Button>

          <div className="w-full border-t border-white/10 pt-6">
            <p className="text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Mobutu Zemanga. Tous droits
              réservés.
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Conception du site par Mbagnick Gaye
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
