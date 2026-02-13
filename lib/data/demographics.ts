// Middletown Reviving Plan - Demographics & Key Statistics

export interface DemographicStat {
  id: string;
  label: string;
  value: string | number;
  unit?: string;
  description?: string;
  sourceUrl: string;
}

export interface DemographicProfile {
  city: string;
  county: string;
  state: string;
  zip: string;
  area: string;
  stats: DemographicStat[];
}

export const demographics: DemographicProfile = {
  city: "Middletown",
  county: "Orange County",
  state: "New York",
  zip: "10940",
  area: "5.2 sq mi",
  stats: [
    {
      id: "population",
      label: "Population",
      value: 30345,
      description: "Total population as of the 2020 U.S. Census.",
      sourceUrl: "https://www.census.gov/quickfacts/middletowncitynewyork",
    },
    {
      id: "hispanic-latino",
      label: "Hispanic/Latino Population",
      value: "40%+",
      description: "Percentage of the population identifying as Hispanic or Latino.",
      sourceUrl: "https://www.census.gov/quickfacts/middletowncitynewyork",
    },
    {
      id: "median-income",
      label: "Median Household Income",
      value: 52000,
      unit: "USD",
      description: "Approximate median household income.",
      sourceUrl: "https://www.census.gov/quickfacts/middletowncitynewyork",
    },
    {
      id: "avg-home-price",
      label: "Average Home Price",
      value: 395000,
      unit: "USD",
      description: "Average home sale price, representing a 63% increase since 2019.",
      sourceUrl: "https://www.realtor.com/realestateandhomes-search/Middletown_NY",
    },
    {
      id: "dri-investment",
      label: "DRI Investment",
      value: 10000000,
      unit: "USD",
      description:
        "Total Downtown Revitalization Initiative funding awarded by New York State.",
      sourceUrl: "https://www.ny.gov/programs/downtown-revitalization-initiative",
    },
    {
      id: "campus-size",
      label: "Community Campus Size",
      value: 270,
      unit: "acres",
      description:
        "Total acreage of the planned community campus, including the 33 acres transferred by the state.",
      sourceUrl: "https://www.ny.gov",
    },
    {
      id: "boa-grant",
      label: "BOA Grant",
      value: 250772,
      unit: "USD",
      description:
        "Brownfield Opportunity Area grant awarded for redevelopment planning.",
      sourceUrl: "https://www.ny.gov",
    },
  ],
} satisfies DemographicProfile;
