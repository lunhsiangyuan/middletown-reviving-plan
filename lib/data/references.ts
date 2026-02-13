// Middletown Reviving Plan - Master Reference List

export type ReferenceType = "government" | "news" | "academic" | "organization";

export interface Reference {
  id: string;
  title: string;
  url: string;
  type: ReferenceType;
  description: string;
  dateAccessed: string;
}

export const references: Reference[] = [
  {
    id: "ny-dri-middletown",
    title: "New York State Downtown Revitalization Initiative - Middletown",
    url: "https://www.ny.gov/programs/downtown-revitalization-initiative",
    type: "government",
    description:
      "Official NY State page for the Downtown Revitalization Initiative, documenting Middletown's $10M award and funded projects.",
    dateAccessed: "2026-02-01",
  },
  {
    id: "ny-boa-program",
    title: "New York State Brownfield Opportunity Areas Program",
    url: "https://dos.ny.gov/brownfield-opportunity-areas-program",
    type: "government",
    description:
      "Official program page for the BOA initiative, under which Middletown received a $250,772 planning grant.",
    dateAccessed: "2026-02-01",
  },
  {
    id: "census-middletown",
    title: "U.S. Census Bureau - Middletown City, New York",
    url: "https://www.census.gov/quickfacts/middletowncitynewyork",
    type: "government",
    description:
      "Census QuickFacts page providing population, demographics, and economic data for the City of Middletown.",
    dateAccessed: "2026-02-01",
  },
  {
    id: "northern-medical-center",
    title: "Northern Medical Center - Official Website",
    url: "https://northernmedicalcenter.com",
    type: "organization",
    description:
      "Official website for Northern Medical Center, detailing services, physicians, and integrative medicine programs.",
    dateAccessed: "2026-02-01",
  },
  {
    id: "fei-tian-college",
    title: "Fei Tian College - Official Website",
    url: "https://feitian.edu",
    type: "organization",
    description:
      "Official website for Fei Tian College, including accreditation details, academic programs, and campus information.",
    dateAccessed: "2026-02-01",
  },
  {
    id: "fei-tian-academy",
    title: "Fei Tian Academy of the Arts - Official Website",
    url: "https://feitianacademy.org",
    type: "organization",
    description:
      "Official website for Fei Tian Academy of the Arts, a K-12 performing arts school.",
    dateAccessed: "2026-02-01",
  },
  {
    id: "touro-com",
    title: "Touro College of Osteopathic Medicine - Middletown Campus",
    url: "https://tourocom.touro.edu",
    type: "academic",
    description:
      "Official page for Touro COM's Middletown campus, with program details and campus information.",
    dateAccessed: "2026-02-01",
  },
  {
    id: "suny-orange",
    title: "SUNY Orange - Official Website",
    url: "https://sunyorange.edu",
    type: "academic",
    description:
      "Official website for SUNY Orange, a community college serving Orange County, NY.",
    dateAccessed: "2026-02-01",
  },
  {
    id: "gan-jing-world",
    title: "Gan Jing World - Official Website",
    url: "https://ganjingworld.com",
    type: "organization",
    description:
      "Official website for Gan Jing World, a technology and video platform headquartered in Middletown.",
    dateAccessed: "2026-02-01",
  },
  {
    id: "garnet-health",
    title: "Garnet Health Medical Center - Official Website",
    url: "https://garnethealth.org",
    type: "organization",
    description:
      "Official website for Garnet Health Medical Center, a full-service community hospital in Middletown.",
    dateAccessed: "2026-02-01",
  },
  {
    id: "middletown-bid",
    title: "Middletown Business Improvement District",
    url: "https://middletownbid.com",
    type: "organization",
    description:
      "Official website for the Middletown BID, managing downtown revitalization and business promotion since 1992.",
    dateAccessed: "2026-02-01",
  },
  {
    id: "record-online-revitalization",
    title: "Times Herald-Record - Middletown Revitalization Coverage",
    url: "https://www.recordonline.com",
    type: "news",
    description:
      "Local news coverage of Middletown's downtown revitalization progress, DRI projects, and community development.",
    dateAccessed: "2026-02-01",
  },
  {
    id: "middletown-ny-gov",
    title: "City of Middletown, NY - Official Website",
    url: "https://middletown-ny.com",
    type: "government",
    description:
      "Official municipal website for the City of Middletown, New York.",
    dateAccessed: "2026-02-01",
  },
];
