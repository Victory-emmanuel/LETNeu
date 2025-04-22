export interface Collaborator {
  id: number;
  name: string;
  institution: string;
  country: string;
  imageUrl?: string;
  website?: string;
}

export interface Funder {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  website?: string;
}

export const collaborators: Collaborator[] = [
  {
    id: 1,
    name: "Prof. Michael Aschner",
    institution: "Albert Einstein College of Medicine",
    country: "USA",
    imageUrl: "https://i.postimg.cc/tR1dcyQb/user.png",
    website: "#"
  },
  {
    id: 2,
    name: "Prof. Julia Bornhorst",
    institution: "University of Wuppertal",
    country: "Germany",
    imageUrl: "https://i.postimg.cc/tR1dcyQb/user.png",
    website: "#"
  },
  {
    id: 3,
    name: "Prof. Felix AA Soares",
    institution: "Federal University of Santa Maria",
    country: "Brazil",
    imageUrl: "https://i.postimg.cc/tR1dcyQb/user.png",
    website: "#"
  },
  {
    id: 4,
    name: "Dr. Alexander Bennedetto",
    institution: "Lancaster University",
    country: "UK",
    imageUrl: "https://i.postimg.cc/tR1dcyQb/user.png",
    website: "#"
  },
  {
    id: 5,
    name: "Prof. James Olopade",
    institution: "University of Ibadan",
    country: "Nigeria",
    imageUrl: "https://i.postimg.cc/tR1dcyQb/user.png",
    website: "#"
  }
];

export const funders: Funder[] = [
  {
    id: 1,
    name: "National Institutes of Health (NIH) - Fogarty International Center (FIC)",
    description: "Supporting global health research and training programs.",
    imageUrl: "https://i.postimg.cc/HnNPJKWB/sponsors1.png",
    website: "https://www.fic.nih.gov/"
  },
  {
    id: 2,
    name: "International Society for Neurochemistry (ISN)",
    description: "Promoting neurochemistry and related neuroscience research worldwide.",
    imageUrl: "https://i.postimg.cc/h4ZY3J8T/sponsors2.png",
    website: "https://www.neurochemistry.org/"
  },
  {
    id: 3,
    name: "International Brain Research Organization (IBRO)",
    description: "Supporting neuroscience research and education globally.",
    imageUrl: "https://i.postimg.cc/X7Tz4Tzv/sponsors3.png",
    website: "https://ibro.org/"
  },
  {
    id: 4,
    name: "Alexander von Humboldt Foundation (AvH)",
    description: "Promoting academic cooperation between scientists and scholars internationally.",
    imageUrl: "https://i.postimg.cc/TYys8RQS/sponsors4.png",
    website: "https://www.humboldt-foundation.de/en/"
  }
];
