import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
          hover: border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Ollca</h3>
              <p className="text-gray-400 mb-4">
                Développement d’un système de gestion des avis “Ollcavis” pour
                la plateforme de vente de produits alimentaires "Ollca"
              </p>
              <div className="felx flex-wrap gap-2 mb-4">
                {[
                  "Spring Boot",
                  "Angular",
                  "Github",
                  "Docker",
                  "Git",
                  "Figma",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between item-center">
                <a
                  href="https://ollca.fr/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Voir le projet ➜
                </a>
              </div>
            </div>
            {/* Project 2 */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
          hover: border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Instalite</h3>
              <p className="text-gray-400 mb-4">
                Contribution au développement d'un clone d'Instagram au sein
                d'une équipe de quatre personnes.
              </p>
              <div className="felx flex-wrap gap-2 mb-4">
                {["React", "Github", "Git"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between item-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Voir le projet ➜
                </a>
              </div>
            </div>
            {/* Project 1 */}
            <div
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
          hover: border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">Agora</h3>
              <p className="text-gray-400 mb-4">
                Participation au développement et à l'intégration de deux jeux
                de société sur la plateforme AGORA, au sein d'une équipe.
              </p>
              <div className="felx flex-wrap gap-2 mb-4">
                {["Symfony", "Git"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between item-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Voir le projet ➜
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
