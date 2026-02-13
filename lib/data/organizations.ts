// Middletown Reviving Plan - Organizations Data

export type OrganizationType =
  | "healthcare"
  | "education"
  | "media"
  | "government"
  | "cultural"
  | "technology";

export interface Organization {
  id: string;
  name: string;
  type: OrganizationType;
  address?: string;
  phone?: string;
  website: string;
  description: string;
  sourceUrl: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  additionalInfo?: Record<string, unknown>;
}

export const organizations: Organization[] = [
  {
    id: "northern-medical-center",
    name: "Northern Medical Center",
    type: "healthcare",
    address: "14 Jason Place Suite 201, Middletown, NY 10940",
    website: "https://northernmedicalcenter.com",
    description:
      "Integrative medical center led by CEO Dr. Jingduan Yang, offering Primary Care, Chinese Medicine, Mental Health, TMS, Physical Therapy, and Integrative Medicine. Physicians include Dr. Lisa Pathak, Dr. Alison Zhou, and Dr. James Chao.",
    sourceUrl: "https://northernmedicalcenter.com",
    coordinates: { lat: 41.4459, lng: -74.4229 },
    additionalInfo: {
      ceo: "Dr. Jingduan Yang",
      services: [
        "Primary Care",
        "Chinese Medicine",
        "Mental Health",
        "TMS",
        "Physical Therapy",
        "Integrative Medicine",
      ],
      doctors: ["Dr. Lisa Pathak", "Dr. Alison Zhou", "Dr. James Chao"],
      insurance: [
        "Medicare",
        "Medicaid",
        "Aetna",
        "Cigna",
        "UHC",
        "MVP",
        "Empire BCBS",
        "Fidelis",
        "Humana",
      ],
    },
  },
  {
    id: "fei-tian-college",
    name: "Fei Tian College",
    type: "education",
    address: "14 Jason Place, Middletown, NY 10940",
    website: "https://feitian.edu",
    description:
      "NECHE-accredited college offering programs in Dance, Fine Arts, Data Science, Biomedical Sciences, Quantum Computing, and Biostatistics.",
    sourceUrl: "https://feitian.edu",
    coordinates: { lat: 41.4459, lng: -74.4229 },
    additionalInfo: {
      accreditation: "NECHE",
      programs: [
        "Dance",
        "Fine Arts",
        "Data Science",
        "Biomedical Sciences",
        "Quantum Computing",
        "Biostatistics",
      ],
    },
  },
  {
    id: "fei-tian-academy",
    name: "Fei Tian Academy of the Arts",
    type: "education",
    address: "140 Galley Hill Rd, Cuddebackville, NY 12729",
    website: "https://feitianacademy.org",
    description:
      "K-12 arts school providing rigorous academic and performing arts education.",
    sourceUrl: "https://feitianacademy.org",
    coordinates: { lat: 41.4827, lng: -74.5969 },
  },
  {
    id: "touro-com",
    name: "Touro College of Osteopathic Medicine",
    type: "education",
    address: "60 Prospect Ave, Middletown, NY 10940",
    website: "https://tourocom.touro.edu",
    description:
      "Osteopathic medical school with a campus in Middletown, training future physicians and contributing to the local healthcare ecosystem.",
    sourceUrl: "https://tourocom.touro.edu",
    coordinates: { lat: 41.4467, lng: -74.4187 },
  },
  {
    id: "suny-orange",
    name: "SUNY Orange",
    type: "education",
    address: "115 South St, Middletown, NY 10940",
    website: "https://sunyorange.edu",
    description:
      "Community college serving Orange County with a wide range of associate degree and certificate programs.",
    sourceUrl: "https://sunyorange.edu",
    coordinates: { lat: 41.4413, lng: -74.4244 },
  },
  {
    id: "gan-jing-world",
    name: "Gan Jing World",
    type: "technology",
    address: "Middletown, NY 10940",
    website: "https://ganjingworld.com",
    description:
      "Technology and video platform headquartered in Middletown, focused on clean, family-friendly content.",
    sourceUrl: "https://ganjingworld.com",
    coordinates: { lat: 41.446, lng: -74.422 },
  },
  {
    id: "ntd-television",
    name: "NTD Television",
    type: "media",
    website: "https://ntd.com",
    description:
      "Independent media organization providing news and cultural programming with a presence in the Middletown area.",
    sourceUrl: "https://ntd.com",
  },
  {
    id: "epoch-times",
    name: "The Epoch Times",
    type: "media",
    website: "https://theepochtimes.com",
    description:
      "Multi-language media organization with operations connected to the Middletown community.",
    sourceUrl: "https://theepochtimes.com",
  },
  {
    id: "garnet-health",
    name: "Garnet Health Medical Center",
    type: "healthcare",
    address: "707 East Main St, Middletown, NY 10940",
    website: "https://garnethealth.org",
    description:
      "Full-service community hospital providing comprehensive healthcare services to the greater Middletown area.",
    sourceUrl: "https://garnethealth.org",
    coordinates: { lat: 41.4478, lng: -74.4069 },
  },
  {
    id: "middletown-bid",
    name: "Middletown Business Improvement District",
    type: "government",
    address: "Middletown, NY 10940",
    website: "https://middletownbid.com",
    description:
      "Established in 1992, the BID manages downtown Middletown's business district, coordinating improvements and promotional activities.",
    sourceUrl: "https://middletownbid.com",
  },
  {
    id: "sound-of-hope",
    name: "Sound of Hope Radio",
    type: "media",
    website: "https://soundofhope.org",
    description:
      "International Chinese-language radio network with operations in the Middletown area, broadcasting news and cultural programming.",
    sourceUrl: "https://soundofhope.org",
  },
];
