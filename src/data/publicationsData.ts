
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
    title: "Stress-induced neurodegeneration and behavioral alterations in Caenorhabditis elegans: Insights into the evolutionary conservation of stress-related pathways and implications for human health",
    authors: ["Toheeb O. Oyerinde", "Victor E. Anadu", "Tobiloba S. Olajide", "Olayemi K. Ijomone", "Oritoke M. Okeowo", "Omamuyovwi M. Ijomone"],
    journal: "Neuroscience Research",
    year: 2025,
    abstract: "This study investigates the effects of stress on neurodegeneration and behavior in C. elegans, providing insights into evolutionary conserved stress-response pathways and their implications for human neurological disorders. The findings highlight how stress can trigger neuronal damage and behavioral changes in this model organism.",
    pdfUrl: "https://www.researchgate.net/publication/388797100_Stress-induced_neurodegeneration_and_behavioral_alterations_in_Caenorhabditis_elegans_Insights_into_the_evolutionary_conservation_of_stress-related_pathways_and_implications_for_human_health",
    category: 'neurotoxicology'
  },
  {
    id: 2,
    title: "Targeting gut microbiota as a therapeutic approach for neurodegenerative diseases",
    authors: ["Tobiloba S. Olajide", "Omamuyovwi M. Ijomone"],
    journal: "Frontiers in Cellular Neuroscience",
    year: 2025,
    abstract: "This review examines how modulation of gut microbiota can serve as a therapeutic strategy for neurodegenerative disorders, emphasizing the neuroprotective effects of targeting the gut-brain axis. The paper discusses current research, challenges, and future directions in using microbiome-based therapies for conditions like Alzheimer's and Parkinson's disease.",
    pdfUrl: "https://www.researchgate.net/publication/389401226_Targeting_gut_microbiota_as_a_therapeutic_approach_for_neurodegenerative_diseases",
    category: 'microbiome'
  },
  {
    id: 3,
    title: "Immunohistochemical Investigations of the Thalamic Region in Rats Following Combined Exposure to Metals and Restraint Stress",
    authors: ["Victor Anadu", "Oritoke M. Okeowo", "Olayemi K. Ijomone", "Omamuyovwi M. Ijomone"],
    journal: "Neurotoxicology",
    year: 2025,
    abstract: "This study investigates the effects of combined metal exposure and restraint stress on the thalamic region of rat brains, focusing on apoptotic markers and microglial activation. The findings demonstrate that the combination of stress and metal exposure can exacerbate neurotoxic impacts, providing insights into environmental risk factors for neurological disorders.",
    pdfUrl: "https://www.researchgate.net/publication/376844397_Immunohistochemical_Investigations_of_the_Thalamic_Region_in_Rats_Following_Combined_Exposure_to_Metals_and_Restraint_Stress",
    category: 'neurotoxicology'
  },
  {
    id: 4,
    title: "Combined Restraint Stress and Metal Exposure Paradigms in Rats: Unravelling Behavioural and Neurochemical Perturbations",
    authors: ["Omamuyovwi M. Ijomone", "Oritoke M. Okeowo", "Victor E. Anadu", "Olayemi K. Ijomone"],
    journal: "Neuroscience Letters",
    year: 2024,
    abstract: "This research examines the behavioral and neurochemical effects of combined restraint stress and metal exposure in rats, revealing how these stressors interact to produce more severe neurological impairments than either factor alone. The findings have implications for understanding environmental factors in neuropsychiatric disorders.",
    pdfUrl: "https://www.researchgate.net/publication/385208732_Combined_Restraint_Stress_and_Metal_Exposure_Paradigms_in_Rats_Unravelling_Behavioural_and_Neurochemical_Perturbations",
    category: 'neurotoxicology'
  },
  {
    id: 5,
    title: "Thalamic immunohistochemical assessment in Wistar rats following combined exposure to nickel and vanadium",
    authors: ["Omolabake Omotosho", "Olayemi K. Ijomone", "Omamuyovwi M. Ijomone"],
    journal: "Toxicology Reports",
    year: 2024,
    abstract: "This study evaluates the effects of combined nickel and vanadium exposure on the thalamus of Wistar rats using immunohistochemical markers of brain integrity. The research provides evidence that co-exposure to these metals induces significant neurotoxic responses in the thalamic region, with implications for environmental health.",
    pdfUrl: "https://www.researchgate.net/publication/382188181_Thalamic_immunohistochemical_assessment_in_Wistar_rats_following_combined_exposure_to_nickel_and_vanadium",
    category: 'metals'
  },
  {
    id: 6,
    title: "Dopaminergic Perturbation in the Aetiology of Neurodevelopmental Disorders: Role of Environmental Neurotoxicants",
    authors: ["Olayemi K. Ijomone", "Rademene Sunday Oria", "Omamuyovwi M. Ijomone", "Michael Aschner", "Julia Bornhorst"],
    journal: "Neurotoxicology and Teratology",
    year: 2024,
    abstract: "This review examines how environmental neurotoxicants disrupt dopaminergic systems during development, contributing to neurodevelopmental disorders. The paper highlights the role of dopamine and dopaminergic system perturbations in conditions like autism spectrum disorder, attention deficit hyperactivity disorder, and schizophrenia.",
    doi: "10.1016/j.ntt.2024.107192",
    pdfUrl: "https://pubmed.ncbi.nlm.nih.gov/39110391/",
    category: 'neurotoxicology'
  },
  {
    id: 7,
    title: "p38- and ERK-MAPK Signalling Modulate Developmental Neurotoxicity of Nickel and Vanadium in the Caenorhabditis elegans Model",
    authors: ["Omamuyovwi M. Ijomone", "Victor E. Anadu", "Tobiloba S. Olajide", "Joy D. Iroegbu", "Olayemi K. Ijomone", "Julia Bornhorst", "Michael Aschner"],
    journal: "Toxics",
    year: 2024,
    abstract: "This study investigates how p38 and ERK MAPK signaling pathways modulate the developmental neurotoxicity of nickel and vanadium using the C. elegans model organism. The findings reveal the importance of these pathways in mediating metal-induced neurotoxicity during development.",
    pdfUrl: "https://www.mdpi.com/2813-3757/2/1/3/review_report",
    category: 'neurotoxicology'
  },
  {
    id: 8,
    title: "Effect of Moringa oleifera-supplemented diets on cognition, neurochemicals, and inflammation makers in the Brain diabetic-encephalopathic rats treated with high-fat diet/streptozotocin",
    authors: ["Olayinka O. Aluko", "Modinat O. Adegoke", "Omamuyovwi M. Ijomone", "Olayemi K. Ijomone"],
    journal: "Journal of Ethnopharmacology",
    year: 2023,
    abstract: "This study evaluates the effects of Moringa oleifera-supplemented diets on cognitive function, neurochemicals, and inflammation markers in diabetic encephalopathy induced by high-fat diet and streptozotocin in rats. The findings demonstrate the potential neuroprotective benefits of Moringa oleifera in diabetes-related cognitive impairment.",
    pdfUrl: "https://www.scilit.com/publications/8ba363257af7162a345439ed1f3a79aa",
    category: 'other'
  },
  {
    id: 9,
    title: "Correction to: D‑Ribose‑L‑Cysteine Improves Glutathione Levels, Neuronal and Mitochondrial Ultrastructural Damage, Caspase-3 and GFAP Expressions Following Manganese-Induced Neurotoxicity",
    authors: ["Grace T. Akingbade", "Omamuyovwi M. Ijomone", "Aminu Imam", "Michael Aschner", "Moyosore S. Ajao"],
    journal: "Neurotoxicity Research",
    year: 2023,
    abstract: "This publication is a correction to a previous article on the protective effects of D-Ribose-L-Cysteine against manganese-induced neurotoxicity, addressing errors in the original publication and providing updated information on the study's findings.",
    doi: "10.1007/s12640-023-00659-y",
    pdfUrl: "https://pubmed.ncbi.nlm.nih.gov/37668878/",
    category: 'metals'
  },
  {
    id: 10,
    title: "Blood-Brain Barrier Disruption and Nanomedicine in Neurodegenerative Disorders",
    authors: ["Adejoke Elizabeth Memudu", "Michael Oluwatosin", "Gabriel Victor Ebube Anadu", "Olayemi Kafilat Ijomone", "Omamuyovwi Meashack Ijomone"],
    journal: "Nanomedicine for Neurological Disorders (Book Chapter)",
    year: 2023,
    abstract: "This book chapter examines the role of blood-brain barrier disruption in neurodegenerative disorders and explores how nanomedicine approaches can be used to address these conditions. The authors discuss current research, challenges, and future prospects for using nanoparticles to target the brain in treating neurodegenerative diseases.",
    pdfUrl: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003383376-10/blood-brain-barrier-disruption-nanomedicine-neurodegenerative-disorders",
    category: 'neurodegeneration'
  },
  {
    id: 11,
    title: "Introduction to Nanoparticles as Potential Carriers for Brain Targeting in Neurodegenerative Disorders",
    authors: ["Adejoke Elizabeth Memudu", "Michael Oluwatosin", "Gabriel Victor Ebube Anadu", "Olayemi Kafilat Ijomone", "Omamuyovwi Meashack Ijomone"],
    journal: "Nanomedicine for Neurological Disorders (Book Chapter)",
    year: 2023,
    abstract: "This book chapter introduces nanoparticles as potential carriers for brain-targeted drug delivery in treating neurodegenerative disorders. The authors provide an overview of different types of nanoparticles, their mechanisms for crossing the blood-brain barrier, and their potential applications in neurological conditions.",
    pdfUrl: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003383376-11/introduction-nanoparticles-potential-carriers-brain-targeting-neurodegenerative-disorders",
    category: 'neurodegeneration'
  },
  {
    id: 12,
    title: "λ-cyhalothrin induced sex-specific inflammation, glia activation and GABAergic neurodegeneration in rat prefrontal cortex and striatum",
    authors: ["Olayemi K. Ijomone", "Oritoke M. Okeowo", "Omamuyovwi M. Ijomone"],
    journal: "Neurotoxicology",
    year: 2023,
    abstract: "This study investigates the sex-specific effects of λ-cyhalothrin exposure on inflammation, glial activation, and GABAergic neurodegeneration in the prefrontal cortex and striatum of rats. The findings reveal significant sex differences in neurotoxic responses to this widely used pesticide.",
    pdfUrl: "https://www.researchgate.net/scientific-contributions/Omamuyovwi-Meashack-Ijomone-2299633124",
    category: 'neurotoxicology'
  },
  {
    id: 13,
    title: "D-Ribose-L-Cysteine regulates glutamate-glutamine cycle and improves spatial working memory following manganese exposure",
    authors: ["Grace T. Akingbade", "Omamuyovwi M. Ijomone", "Aminu Imam", "Rademene S. Oria", "Michael Aschner", "Matthew S. Ajao"],
    journal: "Neurotoxicity Research",
    year: 2023,
    abstract: "This study examines how D-Ribose-L-Cysteine regulates the glutamate-glutamine cycle and improves spatial working memory in animals exposed to manganese. The research demonstrates the potential of this compound as a therapeutic agent for manganese-induced neurocognitive impairments.",
    pdfUrl: "https://www.researchgate.net/scientific-contributions/Omamuyovwi-M-Ijomone-2258203633",
    category: 'metals'
  },
  {
    id: 14,
    title: "Methyl Jasmonate: Behavioral and Molecular Implications in Neurological Disorders",
    authors: ["Oritoke M. Aluko", "Joy D. Iroegbu", "Omamuyovwi M. Ijomone", "Solomon Umukoro"],
    journal: "Neurochemical Research",
    year: 2021,
    abstract: "This review examines the behavioral and molecular effects of methyl jasmonate in neurological disorders, discussing its potential as a therapeutic agent. The paper highlights the neuroprotective, anti-inflammatory, and antioxidant properties of this plant-derived compound in various neurological conditions.",
    doi: "10.1007/s11064-021-03328-8",
    pdfUrl: "https://pubmed.ncbi.nlm.nih.gov/33888651/",
    category: 'other'
  },
  {
    id: 15,
    title: "Tackling COVID-19 in Africa: a focus on Nigeria's peculiarities and challenges",
    authors: ["Oritoke M. Aluko", "Snehal A. Lawal", "Muftau M. Falana", "Ayotunde S. Adeagbo", "Omamuyovwi M. Ijomone"],
    journal: "Innovation",
    year: 2021,
    abstract: "This paper discusses the specific challenges and peculiarities of tackling COVID-19 in Nigeria and Africa more broadly. The authors address factors such as healthcare infrastructure, socioeconomic conditions, and policy responses, providing insights into pandemic management in resource-limited settings.",
    doi: "10.1016/j.xinn.2021.100126",
    pdfUrl: "https://pubmed.ncbi.nlm.nih.gov/33426537/",
    category: 'other'
  },
  {
    id: 16,
    title: "Histological and biochemical alterations in the superior colliculus and lateral geniculate nucleus of juvenile rats following prenatal exposure to marijuana smoke",
    authors: ["Grace Akingbade", "Omamuyovwi M. Ijomone", "Samuel Adelakun", "Bernard Enaibe"],
    journal: "Metabolic Brain Disease",
    year: 2020,
    abstract: "This study examines the histological and biochemical changes in the superior colliculus and lateral geniculate nucleus of juvenile rats exposed prenatally to marijuana smoke. The findings reveal significant alterations in these visual processing brain regions, suggesting potential long-term effects of prenatal marijuana exposure on visual function.",
    doi: "10.1007/s11011-020-00639-7",
    pdfUrl: "https://pubmed.ncbi.nlm.nih.gov/34876716/",
    category: 'neurotoxicology'
  },
  {
    id: 17,
    title: "The aging brain: impact of heavy metal neurotoxicity",
    authors: ["Omamuyovwi M. Ijomone", "Chibuzor W. Ifenatuoha", "Oritoke M. Aluko", "Olayemi K. Ijomone", "Michael Aschner"],
    journal: "Critical Reviews in Toxicology",
    year: 2020,
    abstract: "This review examines how heavy metal exposure affects the aging brain, discussing mechanisms of neurotoxicity and their relevance to age-related neurological disorders. The paper highlights how aging processes can increase vulnerability to metal-induced neurodegeneration through oxidative stress, inflammation, and disruption of cellular functions.",
    doi: "10.1080/10408444.2020.1838441",
    pdfUrl: "https://pubmed.ncbi.nlm.nih.gov/33210961/",
    category: 'metals'
  },
  {
    id: 18,
    title: "Environmental influence on neurodevelopmental disorders; potential association of heavy metal exposure and autism",
    authors: ["Omamuyovwi M. Ijomone", "Nnamdi F. Olung", "Grace T. Akingbade", "Chiara O.A. Okoh", "Michael Aschner"],
    journal: "Journal of Trace Elements in Medicine and Biology",
    year: 2020,
    abstract: "This review examines the potential link between heavy metal exposure and autism spectrum disorders, discussing environmental influences on neurodevelopment. The paper synthesizes evidence from epidemiological, animal, and cellular studies to evaluate the role of metals like lead, mercury, and aluminum in autism etiology.",
    doi: "10.1016/j.jtemb.2020.126615",
    pdfUrl: "https://pubmed.ncbi.nlm.nih.gov/32891009/",
    category: 'autism'
  },
  {
    id: 19,
    title: "Epigenetic influence of environmentally neurotoxic metals",
    authors: ["Omamuyovwi M. Ijomone", "Olayemi K. Ijomone", "Joy D. Iroegbu", "Chibuzor W. Ifenatuoha", "Nnamdi F. Olung", "Michael Aschner"],
    journal: "Environmental Toxicology and Pharmacology",
    year: 2020,
    abstract: "This paper investigates how environmentally neurotoxic metals exert their effects through epigenetic mechanisms, including DNA methylation, histone modifications, and non-coding RNAs. The review provides insights into how metal exposure can lead to long-lasting neurological effects without altering the underlying genetic code.",
    doi: "10.1016/j.etap.2020.103455",
    pdfUrl: "https://pubmed.ncbi.nlm.nih.gov/32882300/",
    category: 'metals'
  },
  {
    id: 20,
    title: "Metal-induced neurotoxicity in a RAGE-expressing C. elegans model",
    authors: ["Michael Lawes", "Avram Pinkas", "Benjamin A. Frohlich", "Joy D. Iroegbu", "Omamuyovwi M. Ijomone", "Michael Aschner"],
    journal: "Neurotoxicology",
    year: 2020,
    abstract: "This study examines metal-induced neurotoxicity using a C. elegans model expressing the receptor for advanced glycation end products (RAGE). The research provides insights into how RAGE signaling contributes to neuronal damage following exposure to neurotoxic metals, with implications for neurodegenerative diseases.",
    doi: "10.1016/j.neuro.2020.06.006",
    pdfUrl: "https://pubmed.ncbi.nlm.nih.gov/32621835/",
    category: 'neurotoxicology'
  }
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
