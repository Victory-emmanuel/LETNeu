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
    imageUrl: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "#"
  },
  {
    id: 2,
    name: "Prof. Julia Bornhorst",
    institution: "University of Wuppertal",
    country: "Germany",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "#"
  },
  {
    id: 3,
    name: "Prof. Felix AA Soares",
    institution: "Federal University of Santa Maria",
    country: "Brazil",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "#"
  },
  {
    id: 4,
    name: "Dr. Alexander Bennedetto",
    institution: "Lancaster University",
    country: "UK",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    website: "#"
  },
  {
    id: 5,
    name: "Prof. James Olopade",
    institution: "University of Ibadan",
    country: "Nigeria",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
