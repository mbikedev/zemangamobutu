import { Target, Lightbulb, Handshake, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Conseil Stratégique",
    description:
      "Accompagnement des entreprises et institutions dans la définition et la mise en oeuvre de stratégies de développement adaptées aux enjeux contemporains.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Recherche",
    description:
      "Pilotage de projets de recherche appliquée et promotion de l'innovation au service du progrès économique et social.",
  },
  {
    icon: Handshake,
    title: "Partenariats Internationaux",
    description:
      "Facilitation de partenariats stratégiques entre acteurs publics, privés et associatifs à l'échelle internationale.",
  },
  {
    icon: TrendingUp,
    title: "Développement & Croissance",
    description:
      "Expertise en structuration d'entreprises, levée de fonds et stratégies de croissance pour les marchés émergents et internationaux.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4 bg-gradient-to-br from-primary-50/30 via-white to-accent-50/20 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-100/30 to-transparent rounded-full blur-3xl -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-600 via-primary-600 to-accent-500 bg-clip-text text-transparent">
            Domaines d&apos;expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Des compétences éprouvées au service de projets ambitieux et porteurs
            de sens.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center shrink-0 group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary-600 group-hover:text-accent-600 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
