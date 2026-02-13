// Middletown Reviving Plan - DRI (Downtown Revitalization Initiative) Projects

export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface DRIProject {
  id: string;
  name: string;
  cost: number;
  status: ProjectStatus;
  description: string;
  imageAlt: string;
  sourceUrl: string;
}

export const DRI_TOTAL_INVESTMENT = 10_000_000 as const;

export const driProjects: DRIProject[] = [
  {
    id: "erie-way-park",
    name: "Erie Way Park",
    cost: 1_640_000,
    status: "completed",
    description:
      "New urban park transforming an underutilized area into a vibrant community green space with seating, landscaping, and pedestrian pathways connecting downtown to the Heritage Trail.",
    imageAlt: "Erie Way Park with landscaped walkways and seating areas in downtown Middletown",
    sourceUrl: "https://www.ny.gov/programs/downtown-revitalization-initiative",
  },
  {
    id: "rail-trail-commons",
    name: "Rail Trail Commons",
    cost: 2_500_000,
    status: "completed",
    description:
      "Trail connection and public space project linking the Heritage Trail to downtown Middletown, creating a seamless pedestrian corridor with gathering spaces and improved accessibility.",
    imageAlt: "Rail Trail Commons public space connecting Heritage Trail to downtown",
    sourceUrl: "https://www.ny.gov/programs/downtown-revitalization-initiative",
  },
  {
    id: "parking-green-infrastructure",
    name: "Parking & Green Infrastructure",
    cost: 2_000_000,
    status: "completed",
    description:
      "Parking improvements combined with green infrastructure elements including bioswales, permeable paving, and stormwater management to enhance downtown functionality and sustainability.",
    imageAlt: "Improved downtown parking area with green infrastructure and bioswales",
    sourceUrl: "https://www.ny.gov/programs/downtown-revitalization-initiative",
  },
  {
    id: "streetscape-improvements",
    name: "Streetscape Improvements",
    cost: 2_560_000,
    status: "completed",
    description:
      "Comprehensive street beautification including new sidewalks, lighting, street furniture, plantings, and wayfinding signage to improve the downtown pedestrian experience.",
    imageAlt: "Renovated downtown streetscape with new sidewalks, lighting, and plantings",
    sourceUrl: "https://www.ny.gov/programs/downtown-revitalization-initiative",
  },
  {
    id: "facade-improvement",
    name: "Facade Improvement Program",
    cost: 1_000_000,
    status: "completed",
    description:
      "Facade restoration program that renovated 17 buildings in the downtown core, preserving historic character while modernizing storefronts to attract new businesses and customers.",
    imageAlt: "Restored building facades along North Street in downtown Middletown",
    sourceUrl: "https://www.ny.gov/programs/downtown-revitalization-initiative",
  },
];
