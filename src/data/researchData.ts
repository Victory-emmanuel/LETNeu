
export interface ResearchArea {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageUrls?: string[];
  videoUrl?: string;
  videoUrls?: string[];
  leadResearcher: string;
  researcherIds: number[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: 1,
    title: "Gene-Environment Interactions in Autism",
    description: "Understanding gene-environment interactions between mutations in autism risks genes and neurodevelopmental sequelae of metals exposures.",
    imageUrl: undefined,
    imageUrls: undefined,
    videoUrl: "/hero-media/elegans-1.mp4",
    videoUrls: undefined,
    leadResearcher: "Dr. Omamuyovwi M. Ijomone",
    researcherIds: [1, 3, 6, 7, 9]
  },
  {
    id: 2,
    title: "Gut Microbiome in Brain Disorders",
    description: "Elucidating multifactorial interactions of gut microbiome, genes, and environment in brain disorders.",
    imageUrl: undefined,
    imageUrls: [
      "/hero-media/SNV_6483.jpg",
      "/hero-media/SNV_6471.jpg"
    ],
    videoUrl: undefined,
    videoUrls: undefined,
    leadResearcher: "Dr. Olayemi K. Ijomone",
    researcherIds: [2, 4, 8]
  },
  {
    id: 3,
    title: "Iron Overload and Autism",
    description: "Unravelling the role of iron overload on the neurexin-neuroligin complex – Implication for autism spectrum disorder.",
    imageUrl: undefined,
    imageUrls: [
      "/hero-media/researcher-on-microscope.jpeg",
      "/hero-media/glovedhand-zoom.jpeg"
    ],
    videoUrl: undefined,
    videoUrls: undefined,
    leadResearcher: "Dr. Omamuyovwi M. Ijomone",
    researcherIds: [1, 5, 6, 8]
  },
  // {
  //   id: 4,
  //   title: "Methylmercury Neurotoxicity",
  //   description: "Investigating Synaptic Dynamics in Methylmercury Neurotoxicity: Potential Involvement of Sexual Dimorphic Patterns.",
  //   imageUrl: "https://images.unsplash.com/photo-1624378515195-8057a8404945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  //   leadResearcher: "Dr. Oritoke M. Okeowo",
  //   researcherIds: [3, 5, 6, 10]
  // },
  {
    id: 4,
    title: "Stress and Environmental Factors",
    description: "Understanding the impact of chronic stress and environmental factors events on mental health.",
    imageUrl: undefined,
    imageUrls: undefined,
    videoUrl: "/hero-media/glovehand-video.mp4",
    videoUrls: undefined,
    leadResearcher: "Dr. Oritoke M. Okeowo",
    researcherIds: [3, 5, 6, 10]
  }
];
