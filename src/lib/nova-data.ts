export type SystemId =
  | "satellite"
  | "energy"
  | "emergency"
  | "community"
  | "wellbeing";

export type CommunityId =
  | "aurora-fjord"
  | "lagoon-reef"
  | "ridge-pass"
  | "harbor-spine";

export type SystemState = {
  id: SystemId;
  label: string;
  short: string;
  description: string;
  metricLabel: string;
  unit: string;
};

export type Community = {
  id: CommunityId;
  name: string;
  region: string;
  focus: string;
  population: string;
  challenge: string;
  x: number;
  y: number;
  baselines: Record<SystemId, number>;
  drill: {
    trigger: string;
    steps: string[];
  };
};

export const SYSTEMS: SystemState[] = [
  {
    id: "satellite",
    label: "Satellite Connectivity",
    short: "Satellites",
    description:
      "Low-orbit mesh links bring reliable voice, data, and sensor uplink to places fiber never reached.",
    metricLabel: "Link uptime",
    unit: "%",
  },
  {
    id: "energy",
    label: "Smart Energy Grid",
    short: "Energy",
    description:
      "Renewables, storage, and adaptive load balancing keep clinics, shelters, and transit powered.",
    metricLabel: "Grid resilience",
    unit: "%",
  },
  {
    id: "emergency",
    label: "AI Emergency Response",
    short: "Emergency AI",
    description:
      "Models triage alerts, route responders, and coordinate relief before damage spreads.",
    metricLabel: "Response speed",
    unit: "min",
  },
  {
    id: "community",
    label: "Connected Services",
    short: "Services",
    description:
      "Housing, healthcare, mobility, and public services share a live situational picture.",
    metricLabel: "Service reach",
    unit: "%",
  },
  {
    id: "wellbeing",
    label: "Human Well-being",
    short: "Well-being",
    description:
      "Safety nets and social links reduce isolation and keep people visible when crises hit.",
    metricLabel: "Inclusion index",
    unit: "",
  },
];

export const COMMUNITIES: Community[] = [
  {
    id: "aurora-fjord",
    name: "Aurora Fjord",
    region: "High Arctic",
    focus: "Remote clinics & winter logistics",
    population: "12.4k",
    challenge: "Seasonal darkness and ice roads cut off ground routes for months.",
    x: 28,
    y: 18,
    baselines: {
      satellite: 71,
      energy: 58,
      emergency: 42,
      community: 49,
      wellbeing: 54,
    },
    drill: {
      trigger: "Polar storm severs coastal routes and drops clinic power.",
      steps: [
        "Satellites reopen medical uplink within 90 seconds.",
        "Microgrid isolates the clinic and shifts load to storage.",
        "Emergency AI dispatches aerial med-pods and warming shelters.",
        "Community services notify households with check-in routes.",
        "Well-being network pairs elders with local responders.",
      ],
    },
  },
  {
    id: "lagoon-reef",
    name: "Lagoon Reef",
    region: "Pacific Atoll",
    focus: "Flood readiness & freshwater",
    population: "8.1k",
    challenge: "Rising tides threaten desalination and evacuation corridors.",
    x: 78,
    y: 58,
    baselines: {
      satellite: 76,
      energy: 64,
      emergency: 51,
      community: 62,
      wellbeing: 68,
    },
    drill: {
      trigger: "King tide surge floods the desalination plant approach.",
      steps: [
        "Orbital sensors confirm inundation bands and safe high ground.",
        "Floating solar arrays ramp output for pumping and lighting.",
        "AI ranks evacuation order by vulnerability and mobility needs.",
        "Transit pods reroute families to elevated community hubs.",
        "Inclusion teams keep displaced households connected overnight.",
      ],
    },
  },
  {
    id: "ridge-pass",
    name: "Ridge Pass",
    region: "Andean Corridor",
    focus: "Landslide early warning",
    population: "21.7k",
    challenge: "Steep terrain and sparse roads delay emergency crews.",
    x: 34,
    y: 66,
    baselines: {
      satellite: 69,
      energy: 61,
      emergency: 47,
      community: 55,
      wellbeing: 59,
    },
    drill: {
      trigger: "Seismic tremor destabilizes the upper slope above the pass.",
      steps: [
        "Constellation imagery flags soil movement before collapse.",
        "Grid pre-charges tunnel lighting and refuge shelters.",
        "AI closes the pass and stages airlift staging areas.",
        "Public services push multilingual alerts to every household.",
        "Neighborhood captains confirm headcounts in under 12 minutes.",
      ],
    },
  },
  {
    id: "harbor-spine",
    name: "Harbor Spine",
    region: "Coastal Megacity",
    focus: "Dense mobility & heat resilience",
    population: "4.2M",
    challenge: "Heat waves overload hospitals and transit simultaneously.",
    x: 62,
    y: 34,
    baselines: {
      satellite: 88,
      energy: 73,
      emergency: 63,
      community: 71,
      wellbeing: 66,
    },
    drill: {
      trigger: "Multi-day heat dome spikes ER demand and grid load.",
      steps: [
        "Satellites feed citywide thermal maps every two minutes.",
        "Smart grid sheds noncritical load and cools cooling centers.",
        "Emergency AI balances ambulance routing with clinic capacity.",
        "Mobility corridors prioritize shade routes and water stops.",
        "Well-being outreach reaches isolated residents first.",
      ],
    },
  },
];

export function boostedMetrics(
  community: Community,
  active: Set<SystemId>,
): Record<SystemId, number> {
  const result = { ...community.baselines };
  const boost = active.size * 4.5;

  for (const system of SYSTEMS) {
    const base = community.baselines[system.id];
    if (system.id === "emergency") {
      // Lower minutes is better — active systems cut response time.
      result.emergency = Math.max(
        6,
        Math.round(base - active.size * 5.5 - (active.has("emergency") ? 8 : 0)),
      );
    } else {
      const localBoost = active.has(system.id) ? 14 : boost * 0.35;
      result[system.id] = Math.min(99, Math.round(base + localBoost));
    }
  }

  return result;
}
