import { RevealOnScroll } from "../RevealOnScroll";
export const About = () => {
  const frontendSkills = [
    "Angular",
    "React",
    "tailwindcss",
    "JavaScript",
    "HTML",
    "CSS",
  ];
  const backendSkills = [
    "Java",
    "PHP",
    "Symfony",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            A propos de moi
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Hello! I'm a passionate developer with a love for creating dynamic
              and responsive web applications. With a strong foundation in both
              front-end and back-end technologies, I enjoy bringing ideas to
              life through code. When I'm not coding, you can find me exploring
              new tech trends, contributing to open-source projects, or
              indulging in my hobbies like hiking and photography.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">BackEnd</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                   hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-start">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🎓 Formation</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    Master Informatique - GIL | Génie de l’Informatique
                    Logicielle
                  </strong>
                  - Université de Rouen (2022-2024)
                </li>
                <li>
                  <strong>Licence Informatique </strong> - Université de Rouen
                  (2019-2022)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                💼 Expérience professionnelle
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Développeur Full-Stack — Lukla (2022-2024){" "}
                  </h4>
                  <div>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Conception et implémentation de plusieurs
                        fonctionnalités dans le cadre de la refonte d’une
                        application de recrutement permettant de tester les
                        candidats (SpotSkills).
                      </li>
                      <li>
                        Réalisation d’évolutions du portail assuré Dentwizard
                        pour Dentmaster (portail destiné aux assurés afin de
                        suivre la prise en charge de leur véhicule).
                      </li>
                      <li>
                        Réalisation d’évolutions sur une application métier –
                        outil de gestion de supply chain (Atlantiq).
                      </li>
                      <li>
                        Participation au développement du site vitrine du groupe
                        Lukla.
                      </li>
                      <li>
                        Évolution et corrections des anomalies (Back-end,
                        Front-end).
                      </li>
                      <li>Rédaction de tests unitaires.</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Développeur Java — Laboratoire LITIS, Université de Rouen
                    (Avril 2022 – Juin 2022)
                  </h4>
                  <div>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Conception et développement de nouveaux modules en Java
                        pour un projet existant (Latitude)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
