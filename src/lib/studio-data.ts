export const LOVABLE_STUDIO_URL =
  "https://suds-and-sunshine-studio.lovable.app/";

export const STUDIO_PILLARS = [
  {
    name: "NovaCore Fusion",
    desc: "Compact aneutronic fusion micro-reactors powering habitats and deep-space propulsion.",
    specs: ["50 MWe per module", "D–He³ fuel cycle", "Mass: 12 t"],
    trl: 9,
    impact: "40× energy density vs. 2026 fission",
  },
  {
    name: "BioLoop ECLSS",
    desc: "Bio-regenerative life support blending engineered algae, microbes and smart membranes.",
    specs: ["99.4% water recovery", "O₂ from photobioreactors", "Food 80% in-situ"],
    trl: 8,
    impact: "Resupply needs cut by 95%",
  },
  {
    name: "Synapse AI Mesh",
    desc: "Distributed, explainable AI managing habitat systems and crew wellbeing autonomously.",
    specs: ["Edge neuromorphic chips", "Self-healing network", "Human-in-loop ethics"],
    trl: 8,
    impact: "99.999% autonomous uptime",
  },
  {
    name: "Forge Swarm ISRU",
    desc: "Robotic swarms 3D-printing structures from regolith and asteroid feedstock.",
    specs: ["Regolith sintering", "1,000 m² / week build", "Swarm of 200 units"],
    trl: 7,
    impact: "Habitats built before crews arrive",
  },
] as const;

export const STUDIO_VISION = [
  {
    icon: "◎",
    title: "Autonomous Space Habitats",
    text: "Self-governing orbital and lunar settlements that maintain life support, repair and expansion with minimal Earth dependency.",
  },
  {
    icon: "♻",
    title: "Closed-Loop Resource Sustainability",
    text: "Near-100% recovery of water, oxygen, nutrients and materials — technology that also regenerates life on Earth.",
  },
  {
    icon: "⟁",
    title: "Human-AI Symbiosis",
    text: "Trusted AI co-pilots that augment crews' cognition, health and decisions across light-minute communication delays.",
  },
] as const;

export const STUDIO_ROADMAP = [
  {
    year: "2026",
    title: "Concept & Simulation",
    text: "Digital twins, system modeling and NASA TTT submission.",
  },
  {
    year: "2040",
    title: "Orbital Prototyping",
    text: "LEO demonstrator station validating BioLoop and Synapse AI.",
  },
  {
    year: "2060",
    title: "Deep-Space Deployment",
    text: "Lunar & Mars outposts built by Forge Swarms, fusion-powered.",
  },
  {
    year: "2075",
    title: "Full Autonomous Ecosystem",
    text: "Self-sustaining human presence across cislunar space and beyond.",
  },
] as const;
