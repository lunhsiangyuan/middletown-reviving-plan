// Middletown Reviving Plan - Local Businesses Data

export type BusinessType =
  | "restaurant"
  | "shop"
  | "media"
  | "brewery"
  | "bakery"
  | "cafe"
  | "department-store"
  | "art";

export interface Business {
  id: string;
  name: string;
  type: BusinessType;
  address?: string;
  description: string;
  specialties: string[];
  website?: string;
  sourceUrl: string;
}

export const businesses: Business[] = [
  {
    id: "taiwan-way",
    name: "Taiwan Way",
    type: "restaurant",
    address: "26 South St, Middletown, NY 10940",
    description:
      "Authentic Taiwanese eatery bringing traditional flavors to downtown Middletown, popular for bubble tea and classic Taiwanese comfort food.",
    specialties: ["Bubble Tea", "Beef Noodle Soup", "Braised Pork Rice"],
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "mister-croissant",
    name: "Mister Croissant",
    type: "bakery",
    address: "28 North St, Middletown, NY 10940",
    description:
      "French-style bakery offering freshly baked croissants, pastries, and artisan breads in the heart of downtown.",
    specialties: ["Croissants", "French Pastries", "Artisan Breads"],
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "mon-tea",
    name: "Mon Tea",
    type: "cafe",
    address: "102 North St, Middletown, NY 10940",
    description:
      "Tea house and dessert shop specializing in premium teas and Asian-inspired desserts.",
    specialties: ["Premium Teas", "Asian Desserts", "Specialty Drinks"],
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "oak-and-reed",
    name: "Oak & Reed",
    type: "restaurant",
    address: "45-53 North St, Middletown, NY 10940",
    description:
      "American restaurant offering a refined dining experience with locally sourced ingredients and craft cocktails.",
    specialties: ["American Cuisine", "Craft Cocktails", "Locally Sourced Ingredients"],
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "dayes-coffee",
    name: "Daye's Coffee",
    type: "cafe",
    address: "32-34 North St, Middletown, NY 10940",
    description:
      "Specialty coffee shop known for its unique enzyme coffee and cozy atmosphere in downtown Middletown.",
    specialties: ["Enzyme Coffee", "Specialty Brews", "Light Bites"],
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "clemson-bros-brewery",
    name: "Clemson Bros. Brewery",
    type: "brewery",
    description:
      "Local craft brewery producing a rotating selection of beers, contributing to Middletown's growing food and beverage scene.",
    specialties: ["Craft Beer", "IPAs", "Seasonal Brews"],
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "new-middletown-dept-store",
    name: "New Middletown Department Store",
    type: "department-store",
    address: "Middletown, NY 10940",
    description:
      "Major retail investment of $2.1M by Shen Yun, revitalizing a downtown commercial space into a full-service department store.",
    specialties: ["Retail", "Fashion", "Home Goods"],
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "artvicki-creations",
    name: "ArtVicki Creations",
    type: "art",
    address: "10 North St, Middletown, NY 10940",
    description:
      "Art gift shop featuring unique handcrafted items and artistic creations from local and regional artists.",
    specialties: ["Art Gifts", "Handcrafted Items", "Local Art"],
    sourceUrl: "https://www.middletownbid.com",
  },
  {
    id: "monte-pastries",
    name: "Monte Pastries",
    type: "bakery",
    address: "North St, Middletown, NY 10940",
    description:
      "Artisan pastry shop bringing European-style baked goods to downtown Middletown as part of the North Street revitalization.",
    specialties: ["European Pastries", "Cakes", "Artisan Baked Goods"],
    sourceUrl: "https://www.middletownbid.com",
  },
];
