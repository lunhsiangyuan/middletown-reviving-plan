// Middletown Reviving Plan - Comparable Revitalization Case Studies

export interface CaseStudy {
  id: string;
  name: string;
  state: string;
  population: number;
  keyStrategy: string;
  outcomes: string[];
  lessonsForMiddletown: string;
  sourceUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "beacon-ny",
    name: "Beacon",
    state: "NY",
    population: 13769,
    keyStrategy: "Art-focused revitalization anchored by the Dia:Beacon museum",
    outcomes: [
      "Dia:Beacon attracted 130,000+ annual visitors, catalyzing downtown transformation",
      "Main Street vacancy rates dropped from 30% to under 5%",
      "Property values increased significantly, attracting new restaurants and galleries",
      "Became a nationally recognized model for arts-driven small city revival",
    ],
    lessonsForMiddletown:
      "A single cultural anchor institution can catalyze broader economic development. Middletown's growing arts and educational institutions (Fei Tian, Shen Yun) could serve a similar catalyst role.",
    sourceUrl: "https://www.cityofbeacon.org",
  },
  {
    id: "newburgh-ny",
    name: "Newburgh",
    state: "NY",
    population: 28856,
    keyStrategy: "Waterfront revitalization combined with historic preservation",
    outcomes: [
      "Waterfront redevelopment attracted new businesses and residential investment",
      "Historic district designation preserved architectural character",
      "Land bank program addressed vacant and abandoned properties",
      "Growing arts community emerged in affordable commercial spaces",
    ],
    lessonsForMiddletown:
      "Historic preservation and strategic public land use can attract private investment. Middletown's 33-acre state land transfer and DRI facade program mirror Newburgh's approach to leveraging public assets.",
    sourceUrl: "https://www.cityofnewburgh-ny.gov",
  },
  {
    id: "hudson-ny",
    name: "Hudson",
    state: "NY",
    population: 6042,
    keyStrategy: "Small city revival through arts, antiques, and creative economy",
    outcomes: [
      "Warren Street transformed into a destination antiques and gallery corridor",
      "Tourism became a major economic driver for the city",
      "Young entrepreneurs and artists attracted by affordable real estate",
      "Restaurant and hospitality sector grew substantially",
    ],
    lessonsForMiddletown:
      "A distinct identity and niche market can drive revival even in very small cities. Middletown's unique cultural assets (Chinese arts, integrative medicine) could define a similarly distinctive brand.",
    sourceUrl: "https://www.cityofhudson.org",
  },
  {
    id: "kingston-ny",
    name: "Kingston",
    state: "NY",
    population: 23266,
    keyStrategy: "Emerging tech hub with Uptown-Midtown connection strategy",
    outcomes: [
      "Tech companies and remote workers relocated from NYC metro area",
      "Uptown Stockade District revitalized with new businesses",
      "Public investment in connecting historic districts boosted foot traffic",
      "Named one of America's coolest small cities by multiple publications",
    ],
    lessonsForMiddletown:
      "Connecting distinct districts (like Middletown's downtown and campus areas) and attracting tech investment (Gan Jing World) can create a virtuous cycle of growth and innovation.",
    sourceUrl: "https://www.kingston-ny.gov",
  },
  {
    id: "poughkeepsie-ny",
    name: "Poughkeepsie",
    state: "NY",
    population: 30515,
    keyStrategy: "Education-driven revitalization with iconic infrastructure (Walkway Over the Hudson)",
    outcomes: [
      "Walkway Over the Hudson attracted 500,000+ annual visitors",
      "Vassar College and Marist College partnerships strengthened downtown",
      "DRI funding supported streetscape and public space improvements",
      "Growing restaurant and entertainment scene on Main Street",
    ],
    lessonsForMiddletown:
      "Education institutions as anchor partners and signature public infrastructure investments drive sustained revitalization. Middletown's three higher-ed institutions and Heritage Trail parallel Poughkeepsie's assets.",
    sourceUrl: "https://www.cityofpoughkeepsie.com",
  },
];
