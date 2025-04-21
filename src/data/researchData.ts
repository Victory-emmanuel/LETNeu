
export interface ResearchArea {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  leadResearcher: string;
  researcherIds: number[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: 1,
    title: "Gene-Environment Interactions in Autism",
    description: "Understanding gene-environment interactions between mutations in autism risks genes and neurodevelopmental sequelae of metals exposures.",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    leadResearcher: "Dr. Omamuyovwi M. Ijomone",
    researcherIds: [1, 3, 6, 7, 9]
  },
  {
    id: 2,
    title: "Gut Microbiome in Neurodegenerative Diseases",
    description: "Elucidating multifactorial interactions of gut microbiome, genes, and environment in neurodegenerative diseases.",
    imageUrl: "https://images.unsplash.com/photo-1607000975571-8b5f746fe761?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    leadResearcher: "Dr. Olayemi K. Ijomone",
    researcherIds: [2, 4, 8]
  },
  {
    id: 3,
    title: "Iron Overload and Autism",
    description: "Unravelling the role of iron overload on the neurexin-neuroligin complex – Implication for autism spectrum disorder.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    leadResearcher: "Dr. Omamuyovwi M. Ijomone",
    researcherIds: [1, 5, 6, 8]
  },
  {
    id: 4,
    title: "Methylmercury Neurotoxicity",
    description: "Investigating Synaptic Dynamics in Methylmercury Neurotoxicity: Potential Involvement of Sexual Dimorphic Patterns.",
    imageUrl: "https://images.unsplash.com/photo-1624378515195-8057a8404945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    leadResearcher: "Dr. Oritoke M. Okeowo",
    researcherIds: [3, 5, 6, 10]
  },
  {
    id: 5,
    title: "Stress and Environmental Factors",
    description: "Understanding the impact of chronic stress and environmental factors events on mental health.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    leadResearcher: "Dr. Oritoke M. Okeowo",
    researcherIds: [3, 5, 6, 10]
  }
];
