
export interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract?: string;
  doi?: string;
  pdfUrl?: string;
  category: 'neurotoxicology' | 'neurodegeneration' | 'autism' | 'metals' | 'microbiome' | 'other';
}

export const publications: Publication[] = [
  {
    id: 1,
    title: "Stress-induced neurodegeneration and behavioral alterations in Caenorhabditis elegans.",
    authors: ["Oyerinde TO, Anadu VE, Olajide TS, Ijomone OK, Okeowo OM, Ijomone OM."],
    journal: "...",
    year: 2025,
    abstract: "Insights into the evolutionary conservation of stress-related pathways and implications for human health. In: Moradikor N, Orish C (Eds). Stress and the Brain: Evidence from Molecular Mechanisms to Interventions and Therapies. Progress in Brain Research Series Vol 291 (Online first). Elsevier B.V., Cambridge, MA; 2025. ",
    pdfUrl: "https://doi.org/10.1016/bs.pbr.2025.01.001",
    category: 'neurodegeneration'
  },
  {
    id: 2,
    title: "λ-cyhalothrin induced sex-specific inflammation, glia activation and GABAergic interneuron disruption in the hippocampus of rats.",
    authors: ["Imam A, Oyegbola C, Busari M, Gbemisola AM, Abubakar L, Odunayo AT, Attai AG, Iyiola AM, Imam WA, Akorede AA, Ijomone OM, Ajao MS. "],
    journal: "...",
    year: 2025,
    abstract: "λ-cyhalothrin induced sex-specific inflammation, glia activation and GABAergic interneuron disruption in the hippocampus of rats. BMC Pharmacology & Toxicology, 2025; 26(1):22. PubMed ID: 39881343.",
    pdfUrl: "https://doi.org/10.1186/s40360-025-00860-z",
    category: 'other'
  },
  {
    id: 3,
    title: "Glial Perturbation in Metal Neurotoxicity",
    authors: ["Ijomone OK, Ukwubile II, Aneke VO, Olajide TS, Inyang HO, Omotosho OI, Oyerinde TO, Anadu VE, Gbayisomore TJ, Okeowo OM, Oyeniran DA, Ogundahunsi OAT, Ijomone OM."],
    journal: "...",
    year: 2025,
    abstract: "Implications for Brain Disorders. Neuroglia. 2025; 6:4",
    pdfUrl: "https://doi.org/10.3390/neuroglia6010004",
    category: 'other'
  },
  {
    id: 4,
    title: " Combined Restraint Stress and Metal Exposure Paradigms in Rats:",
    authors: ["Okeowo OM, Anadu VE, Ijomone OK, Aschner M, Ijomone OM."],
    journal: "...",
    year: 2024,
    abstract: "Unravelling Behavioural and Neurochemical Perturbations. Molecular Neurobiology, 2024 (online first). PubMed ID: 39443350.",
    pdfUrl: " https://doi.org/10.1007/s12035-024-04570-1",
    category: 'other'
  },
  {
    id: 5,
    title: "Microglial senescence in neurodegeneration:",
    authors: ["Olajide TS, Oyerinde TO, Omotosho OI, Okeowo OM, Olajide OJ, Ijomone OM. "],
    journal: "...",
    year: 2024,
    abstract: "insights, implications, and therapeutic opportunities. Neuroprotection, 2024; 2:182-195.",
    pdfUrl: "https://doi.org/10.1002/nep3.56",
    category: 'neurodegeneration'
  },
  
  {
    id: 6,
    title: "Perturbation in the Aetiology of Neurodevelopmental Disorders",
    authors: ["Ijomone OK, Oria RS, Ijomone OM, Aschner M, Bornhorst J. Dopaminergic "],
    journal: "...",
    year: 2025,
    abstract: "Molecular Neurobiology, 2025; 62:2420–2434. PubMed ID: 39110391. ",
    doi: "10.1007/s12035-024-04418-8",
    pdfUrl: "https://doi.org/10.1007/s12035-024-04418-8",
    category: 'other'
  },
  {
    id: 7,
    title: "Thalamic immunohistochemical assessment in wistar rats following combined exposure to nickel and vanadium.",
    authors: ["Emmanuel GE, Omotosho OI, Etti-Balogun HO, Ijomone OK, Ijomone OM. Thalamic "],
    journal: "Experimental and Clinical Anatomy",
    year: 2024,
    abstract: "Journal of Experimental and Clinical Anatomy, 2024; 21(1):50-58 ",
    pdfUrl: "https://www.ajol.info/index.php/jeca/article/view/272861",
    category: 'other'
  },
  {
    id: 8,
    title: "Immunohistochemical assessment of thalamic region in rat brain following Bonny Light crude oil administration.",
    authors: ["Iroegbu JD, Ijomone OK, Adebayo OS, Aneke OV, Adelusi HD, Ijomone OM. "],
    journal: "Journal of Anatomical Sciences",
    year: 2024,
    abstract: "Journal of Anatomical Sciences, 2024; 15(1):1-13. ",
    pdfUrl: "https://www.asn-ng.com/journal/article/1715538997",
    category: 'other'
  },
  {
    id: 9,
    title: "p38- and ERK-MAPK Signalling Modulate Developmental Neurotoxicity of Nickel and Vanadium in the Caenorhabditis elegans Model.",
    authors: ["Ijomone OM, Weishaupt AK, Michaelis V, Ijomone OK, Bornhorst J."],
    journal: "Neurotoxicity Research",
    year: 2024,
    abstract: " Kinases and Phosphatases, 2024; 2:28-42. ",
    doi: "10.3390/kinasesphosphatases2010003",
    pdfUrl: "https://doi.org/10.3390/kinasesphosphatases2010003",
    category: 'neurotoxicology'
  },
  {
    id: 10,
    title: "Caffeine Administration Mitigates Chronic Stress-Induced Behavioral Deficits, Neurochemical Alterations, and Glial Disruptions in Rats.",
    authors: ["Okeowo OM, Oke OO, David GO, Ijomone OM."],
    journal: "...",
    year: 2023,
    abstract: "Brain Sciences, 2023; 13(12):1663. PubMed ID: 38137111.",
    doi: "10.3390/brainsci13121663",
    pdfUrl: "https://doi.org/10.3390/brainsci13121663",
    category: 'other'
  },
 
];

export const publicationsByYear = publications.reduce((acc, publication) => {
  const year = publication.year.toString();
  if (!acc[year]) {
    acc[year] = [];
  }
  acc[year].push(publication);
  return acc;
}, {} as Record<string, Publication[]>);

export const publicationCategories = [
  { label: 'All', value: 'all' },
  { label: 'Neurotoxicology', value: 'neurotoxicology' },
  { label: 'Neurodegeneration', value: 'neurodegeneration' },
  { label: 'Autism', value: 'autism' },
  { label: 'Metals', value: 'metals' },
  { label: 'Gut Microbiome', value: 'microbiome' },
  { label: 'Other', value: 'other' }
];

// Get the latest publications for the homepage
export const recentPublications = publications
  .sort((a, b) => b.year - a.year || b.id - a.id)
  .slice(0, 3);
