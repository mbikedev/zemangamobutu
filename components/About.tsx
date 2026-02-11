import { Briefcase, Globe, BookOpen, Users } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Chef d'Entreprises",
    description:
      "Fondateur et dirigeant de plusieurs entreprises dans des secteurs variés, alliant vision stratégique et excellence opérationnelle.",
  },
  {
    icon: Users,
    title: "Dirigeant d'ONGs",
    description:
      "Engagé dans le développement social et humanitaire à travers la direction d'organisations non gouvernementales d'envergure internationale.",
  },
  {
    icon: BookOpen,
    title: "Directeur de Centres de Recherches",
    description:
      "À la tête de centres de recherches dédiés à l'innovation et au progrès scientifique au service du développement.",
  },
  {
    icon: Globe,
    title: "Consultant International",
    description:
      "Conseiller stratégique auprès d'institutions et d'entreprises à travers le monde, apportant une expertise multisectorielle reconnue.",
  },
];

export default function About() {
  return (
    <section
      id="a-propos"
      className="py-20 px-4 bg-gradient-to-br from-white via-primary-50/20 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full blur-3xl -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-600 via-primary-600 to-accent-500 bg-clip-text text-transparent">
            À propos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Mobutu Zemanga est un entrepreneur, dirigeant et consultant
            international de renom. Fort d&apos;une carrière riche et diversifiée, il
            met son expertise au service du développement économique, social et
            scientifique à l&apos;échelle mondiale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-4 mx-auto group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary-600 group-hover:text-accent-600 transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
