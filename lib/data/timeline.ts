// Middletown Reviving Plan - Revitalization Timeline

export type TimelineCategory =
  | "infrastructure"
  | "education"
  | "healthcare"
  | "business"
  | "government";

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: TimelineCategory;
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: 1992,
    title: "Business Improvement District Established",
    description:
      "The Middletown Business Improvement District (BID) was established to manage and promote the downtown area, laying the groundwork for future revitalization efforts.",
    category: "government",
  },
  {
    year: 2008,
    title: "Heritage Trail Opens",
    description:
      "The Heritage Trail, a multi-use recreational path, opened to the public, providing a key infrastructure asset connecting communities and encouraging outdoor activity.",
    category: "infrastructure",
  },
  {
    year: 2016,
    title: "DRI $10M Award from NY State",
    description:
      "Middletown was selected as a recipient of New York State's Downtown Revitalization Initiative, receiving $10 million to fund transformative downtown projects.",
    category: "government",
  },
  {
    year: 2017,
    title: "Touro COM Opens Middletown Campus",
    description:
      "Touro College of Osteopathic Medicine opened its Middletown campus, bringing medical education and hundreds of students to the downtown area.",
    category: "education",
  },
  {
    year: 2018,
    title: "Fei Tian College NECHE Accreditation",
    description:
      "Fei Tian College achieved accreditation from the New England Commission of Higher Education (NECHE), establishing its academic credibility and expanding program offerings.",
    category: "education",
  },
  {
    year: 2019,
    title: "DRI Projects Begin Construction",
    description:
      "Construction commenced on the five DRI-funded projects including Erie Way Park, Rail Trail Commons, streetscape improvements, parking infrastructure, and the facade improvement program.",
    category: "infrastructure",
  },
  {
    year: 2020,
    title: "Race 4 Space Program Launches",
    description:
      "The Race 4 Space program launched to help fill vacant downtown storefronts with new businesses, providing support and incentives for entrepreneurs.",
    category: "business",
  },
  {
    year: 2021,
    title: "DRI Projects Completion Begins",
    description:
      "The first DRI-funded projects reached completion, visibly transforming downtown Middletown's streetscape and public spaces.",
    category: "infrastructure",
  },
  {
    year: 2022,
    title: "Gan Jing World HQ Established",
    description:
      "Gan Jing World, a technology and video platform company, established its headquarters in Middletown, bringing tech-sector jobs and investment to the community.",
    category: "business",
  },
  {
    year: 2023,
    title: "New Middletown Department Store Opens",
    description:
      "A $2.1M investment by Shen Yun brought a new department store to downtown Middletown, filling a major retail gap and attracting foot traffic.",
    category: "business",
  },
  {
    year: 2024,
    title: "State Transfers 33 Acres & BOA Grant Awarded",
    description:
      "New York State transferred 33 acres of land to the City of Middletown for $1, and a Brownfield Opportunity Area (BOA) grant of $250,772 was awarded for redevelopment planning.",
    category: "government",
  },
  {
    year: 2025,
    title: "Northern Medical Center Expands & BOA Planning Begins",
    description:
      "Northern Medical Center expanded its integrative health services, and BOA planning activities commenced to guide the redevelopment of the transferred state land.",
    category: "healthcare",
  },
  {
    year: 2026,
    title: "Community Campus Master Planning",
    description:
      "Master planning begins for the Community Campus on the 33-acre state-transferred land, envisioning a mixed-use development integrating education, healthcare, and community spaces.",
    category: "infrastructure",
  },
  {
    year: 2029,
    title: "BOA Plan Completion Target",
    description:
      "Target year for the completion of the Brownfield Opportunity Area plan, setting the stage for full-scale development of the community campus and surrounding areas.",
    category: "government",
  },
];
