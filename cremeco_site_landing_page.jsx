import React from "react";
import { motion } from "framer-motion";
import { Leaf, Recycle, Factory, ShieldCheck, ArrowRight, FlaskConical, Users, ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stats = [
  { value: "76 %", label: "taux de crémation au Canada" },
  { value: "-16,2 kg", label: "CO₂ estimé par contenant Créméco" },
  { value: "TRL 7", label: "objectif de validation en conditions réelles" },
  { value: "100+", label: "acteurs du milieu sensibilisés" },
];

const pillars = [
  {
    icon: Leaf,
    title: "Écoresponsable par conception",
    text: "Nous revalorisons des pelures de pomme de terre pour créer un contenant de crémation biosourcé, en cohérence avec les principes de l’économie circulaire.",
  },
  {
    icon: ShieldCheck,
    title: "Sécuritaire à manipuler",
    text: "Notre approche vise une alternative plus robuste que le carton, mieux adaptée aux réalités des maisons funéraires, des thanatologues et des crématoriums.",
  },
  {
    icon: Factory,
    title: "Pensé pour les opérations",
    text: "Le produit est développé pour s’intégrer au secteur funéraire avec un bon compromis entre coût, performance mécanique et comportement en crémation.",
  },
  {
    icon: Recycle,
    title: "Impact concret",
    text: "Créméco propose une solution qui réduit la dépendance aux matériaux traditionnels tout en valorisant une matière résiduelle locale.",
  },
];

const process = [
  {
    icon: Recycle,
    title: "Revalorisation",
    text: "Des résidus agroalimentaires sont transformés en matière première utile plutôt qu’éliminés comme déchet.",
  },
  {
    icon: FlaskConical,
    title: "Développement matériau",
    text: "La formulation est optimisée pour obtenir la résistance, la stabilité et le comportement thermique recherchés.",
  },
  {
    icon: Factory,
    title: "Fabrication",
    text: "Le matériau est mis en forme pour produire un contenant de crémation sobre, digne et adapté au secteur.",
  },
  {
    icon: Users,
    title: "Adoption terrain",
    text: "Le produit est validé avec des partenaires de l’écosystème funéraire afin de répondre à de vrais besoins opérationnels.",
  },
];

export default function CremecoLandingPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ec] text-[#1f3527]">
      <section className="relative overflow-hidden border-b border-[#d9e3d2] bg-[radial-gradient(circle_at_top_right,_rgba(115,154,121,0.18),_transparent_35%),linear-gradient(180deg,#f7f4ec_0%,#eef4ea_100%)]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-20 -right-10 h-72 w-72 rounded-full bg-[#9ab79d] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-[#d7c9a6] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-10 md:px-10 lg:grid-cols-2 lg:items-center lg:py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex items-center rounded-full border border-[#b6c8b1] bg-white/70 px-4 py-2 text-sm font-medium text-[#46644a] backdrop-blur">
              Innovation funéraire écoresponsable
            </div>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2e5b3c] text-white shadow-lg">
                <Leaf className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Créméco</h1>
                <p className="text-base text-[#4d6653] md:text-lg">Le contenant de crémation conçu pour l’économie circulaire.</p>
              </div>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#35513c] md:text-xl">
              Nous développons un contenant de crémation biosourcé fabriqué à partir de pelures de pomme de terre revalorisées afin d’offrir au secteur funéraire une alternative plus durable, crédible et alignée avec les enjeux environnementaux d’aujourd’hui.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="rounded-2xl bg-[#2e5b3c] px-6 py-6 text-base hover:bg-[#244a30]">
                Découvrir la solution
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-2xl border-[#9ab79d] bg-white/80 px-6 py-6 text-base text-[#2e5b3c] hover:bg-[#f5fbf3]">
                Nous contacter
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="rounded-2xl border-[#d6e1d0] bg-white/80 shadow-sm backdrop-blur">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-[#2e5b3c]">{stat.value}</div>
                    <div className="mt-1 text-sm leading-5 text-[#607463]">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-[#d6dfce] bg-white/80 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-[#eef4ea] via-[#f7f4ec] to-[#e2eadb] p-6">
                <div className="grid gap-4">
                  <div className="rounded-3xl bg-[#2e5b3c] p-6 text-white shadow-lg">
                    <div className="text-sm uppercase tracking-[0.2em] text-white/75">Mission</div>
                    <div className="mt-2 text-2xl font-semibold">Réinventer le contenant de crémation avec une matière revalorisée.</div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-3xl border border-[#d5e2cf] bg-white p-5">
                      <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#6b826d]">Pourquoi maintenant</div>
                      <p className="text-sm leading-6 text-[#425846]">
                        Le marché de la crémation grandit rapidement, tandis que le secteur cherche des solutions plus responsables, performantes et adaptées à ses opérations.
                      </p>
                    </div>
                    <div className="rounded-3xl border border-[#d5e2cf] bg-white p-5">
                      <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#6b826d]">Notre promesse</div>
                      <p className="text-sm leading-6 text-[#425846]">
                        Offrir une alternative crédible entre le carton et le bois, avec une identité environnementale forte et une logique industrielle réaliste.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-dashed border-[#9ab79d] bg-[#f8fbf6] p-5">
                    <div className="text-sm font-semibold uppercase tracking-wide text-[#57725a]">Positionnement</div>
                    <div className="mt-2 text-lg font-medium text-[#27442d]">
                      Durable. Digne. Fonctionnel.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} className="max-w-3xl">
          <div className="mb-3 inline-flex rounded-full bg-[#e7efe2] px-4 py-2 text-sm font-medium text-[#47614a]">
            Une réponse à un vrai besoin du marché
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Une alternative funéraire alignée avec les enjeux environnementaux.</h2>
          <p className="mt-5 text-lg leading-8 text-[#526855]">
            Créméco développe une solution destinée aux maisons funéraires et aux crématoriums qui souhaitent réduire leur empreinte environnementale sans compromettre la sécurité, la dignité du service et l’efficacité opérationnelle.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full rounded-3xl border-[#d7e1d1] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf5e8] text-[#2e5b3c]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#5a6f5d]">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#dde6d7] bg-[#eef4ea]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
              <div className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-[#46644a] shadow-sm">
                Comment ça fonctionne
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">De la matière résiduelle à un produit à forte valeur.</h2>
              <p className="mt-5 text-lg leading-8 text-[#506653]">
                Notre approche repose sur la revalorisation de coproduits agroalimentaires, le développement d’un matériau biosourcé performant et une validation progressive avec des partenaires du terrain.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="rounded-3xl border border-[#d4e1ce] bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#edf5e8] text-[#2e5b3c]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[#739079]">0{index + 1}</span>
                          <h3 className="text-lg font-semibold text-[#243b29]">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-[#566b59]">{step.text}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <Card className="rounded-[2rem] border-[#d8e2d2] bg-white shadow-sm">
              <CardContent className="p-8">
                <div className="mb-3 inline-flex rounded-full bg-[#edf5e8] px-4 py-2 text-sm font-medium text-[#46644a]">
                  Pour le secteur funéraire
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Une solution pensée pour les maisons funéraires et les crématoriums.</h2>
                <div className="mt-6 space-y-4 text-[#536856]">
                  {[
                    "Alternative biosourcée au carton et au bois",
                    "Approche compatible avec les enjeux de sécurité et de manutention",
                    "Positionnement intermédiaire entre performance et accessibilité",
                    "Démarche structurée de validation technique et terrain",
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-3">
                      <ChevronRight className="mt-1 h-4 w-4 text-[#2e5b3c]" />
                      <span className="leading-7">{line}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.55 }}>
            <Card className="rounded-[2rem] border-[#d8e2d2] bg-[#2e5b3c] text-white shadow-xl">
              <CardContent className="p-8">
                <div className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/85">
                  Vision
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Faire évoluer le secteur funéraire vers des matériaux plus responsables.</h2>
                <p className="mt-5 leading-8 text-white/85">
                  Créméco veut contribuer à une transition concrète du secteur funéraire en proposant des solutions innovantes, utiles et adaptées aux réalités des opérations. Notre ambition est de bâtir une référence québécoise en innovation funéraire écoresponsable.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm">Innovation biosourcée</div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm">Économie circulaire</div>
                  <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm">Validation terrain</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-[#dbe5d5] bg-[linear-gradient(180deg,#f7f4ec_0%,#eef4ea_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }}>
              <div className="mb-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-[#46644a] shadow-sm">
                Parlons de Créméco
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Vous souhaitez suivre le projet, collaborer ou en savoir plus?</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#556b58]">
                Nous travaillons avec des partenaires techniques et des acteurs du secteur funéraire pour faire progresser le développement et la validation de notre solution.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-3">
              <Button className="rounded-2xl bg-[#2e5b3c] px-6 py-6 text-base hover:bg-[#244a30]">Prendre contact</Button>
              <Button variant="outline" className="rounded-2xl border-[#9ab79d] bg-white/80 px-6 py-6 text-base text-[#2e5b3c] hover:bg-[#f5fbf3]">Voir notre mission</Button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="rounded-3xl border-[#d8e2d2] bg-white shadow-sm">
              <CardContent className="flex items-start gap-4 p-6">
                <Mail className="mt-1 h-5 w-5 text-[#2e5b3c]" />
                <div>
                  <div className="font-semibold">Courriel</div>
                  <div className="mt-1 text-sm text-[#5a6f5d]">info@cremeco.ca</div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-[#d8e2d2] bg-white shadow-sm">
              <CardContent className="flex items-start gap-4 p-6">
                <Phone className="mt-1 h-5 w-5 text-[#2e5b3c]" />
                <div>
                  <div className="font-semibold">Téléphone</div>
                  <div className="mt-1 text-sm text-[#5a6f5d]">À ajouter</div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-[#d8e2d2] bg-white shadow-sm">
              <CardContent className="flex items-start gap-4 p-6">
                <MapPin className="mt-1 h-5 w-5 text-[#2e5b3c]" />
                <div>
                  <div className="font-semibold">Localisation</div>
                  <div className="mt-1 text-sm text-[#5a6f5d]">Sherbrooke, Québec</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#dce5d6] bg-[#203326] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <div className="text-lg font-semibold">Créméco</div>
            <div className="text-sm text-white/70">Innovation funéraire écoresponsable à base de matières revalorisées.</div>
          </div>
          <div className="text-sm text-white/70">© 2026 Créméco. Tous droits réservés.</div>
        </div>
      </footer>
    </div>
  );
}
