
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
  detailedBio?: string;
  position?: string;
}

export const principalInvestigators: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Omamuyovwi M. Ijomone",
    role: "Group Leader and Principal Investigator",
    position: "Associate Professor, Department of Anatomy, UNIMED\nVisiting Assistant Professor, Albert Einstein College of Medicine, USA",
    bio: "Associate Professor at UNIMED and Visiting Assistant Professor at Albert Einstein College of Medicine, USA. Expert in neurotoxicology and neurobiology with numerous fellowships and awards.",
    detailedBio: "Dr. Omamuyovwi Meashack Ijomone (simply known as Mamus Ijomone) obtained a BSc in Human Anatomy (2006) at the University of Port Harcourt, and an MSc and PhD (2011 and 2015 respectively) at the Obafemi Awolowo University. He held an IBRO-ISN Postdoctoral Fellow position at the Albert Einstein College of Medicine, New York, USA (2017 to 2018).\n\nMamus has held numerous fellowships/grants; most notable include, IBRO-ISN Research Fellowship (2017), IBRO Return Home Fellowship (2018), ISN-CAEN 1B Grants (2019 and 2021), Young IBRO Award (2019), Alexander von Humboldt Georg Foster Research Fellowship for Experienced Researchers (2020), IBRO Early Career Award (2021). Furthermore, in 2022 he received the US National Institutes of Health K43 Emerging Global Leader Award and the ISN Career Development Grant. In 2023, he received the Prof James Kimani Memorial Lecture Award from the Society of Neuroscientists of Africa and The Royal Society, UK Colin Blakemore Bursary Award. He is a member of several professional bodies including the Anatomical Society of Nigeria (ASN), Neuroscience Society of Nigeria (NSN), Society of Neuroscientists of Africa (SONA), International Society for Neurochemistry (ISN), Society for Neurosciences (SfN), American Society for Neurochemistry (ASN), European Society for Neurochemistry (ESN), Federation of European Neuroscience Societies (FENS), International Society to Advance Alzheimer's Research and Treatment (ISTAART).\n\nFurther, Mamus holds several academic leadership roles and serves on numerous scientific committees both nationally and internationally. He is a member of the ISN Career Development Committee and has served on the NIH Neurotoxicology and Alcohol Study Section. He has authored over 100 peer-reviewed articles and book chapters in high-impact journals and book series. He is actively involved in the mentorship of undergraduate and postgraduate students, as well as early-career scientists. In his leisure, Mamus likes to watch movies and listen to music.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "omijomone@unimed.edu.ng",
    linkedin: "https://linkedin.com/in/sample"
  }
];

export const researchers: TeamMember[] = [
  {
    id: 2,
    name: "Dr. Olayemi K. Ijomone",
    role: "Senior Research Fellow",
    position: "Lecturer, Department of Anatomy, UNIMED",
    bio: "Lecturer at UNIMED with expertise in Anatomy and Optics and Imaging. Alexander von Humboldt Goerg Forster Postdoctoral Fellow with research focus on environmental toxicants.",
    detailedBio: "Dr. Olayemi K. Ijomone had a BTech at Ladoke Akintola University of Technology (LAUTECH), Ogbomosho Oyo State (2009). Further, she completed her MSc in Anatomy from Obafemi Awolowo University Ile-Ife (2014) and PhD in Optics and Imaging at the University of KwaZulu-Natal (UKZN), Durban, South Africa (2016). She went further to do her post-doctoral fellowship in Bergische Universität Wuppertal, Germany as an Alexander von Humboldt (AvH) Goerg Forster Postdoctoral Fellow (2020). She is currently a Lecturer at the Department of Anatomy, University of Medical Sciences, Ondo, Nigeria.\n\nOlayemi's current research focus includes \"contributing to novel mechanisms on how environmental toxicants could interact with endogenous neurochemical activities and the genome to trigger perturbations at various stages of nervous system development, as well as across the lifespan\". She has authored over 25 articles in peer-reviewed reputable and quality journals including some very high-impact journals. She has received several international grants and awards including the International Society for Neurochemistry- Committee for Aid and Education in Neurochemistry (ISN-CAEN) 2B Grant, IBRO Conference Travel Award, The World Academy of Science/ National Research Fund (TWAS/NRF) Doctoral Fellowship, Alexander von Humboldt Georg Forster Research Fellowship for Postdoctoral Researchers, Alexander von Humboldt Georg Forster Return Home Fellowship amongst others. Yemi's hobbies include traveling, listening to music, and cooking.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "oolaibi@unimed.edu.ng"
  },
  {
    id: 3,
    name: "Dr. Oritoke M. Okeowo",
    role: "Senior Research Fellow (Adjunct)",
    position: "Lecturer, Department of Physiology, Federal University of Technology, Akure, Nigeria",
    bio: "Lecturer at Federal University of Technology, Akure with research interests in neuropharmacology and translational medicine, focusing on natural products and bioactive compounds.",
    detailedBio: "Dr. Oritoke Okeowo holds a B.Sc in Pharmacology from Olabisi Onabanjo University, Ago-Iwoye, Ogun State, Nigeria. She obtained her M.Sc and PhD in Pharmacology (Neuropharmacology) in 2014 and 2021 respectively from the University of Ibadan, Nigeria. She is currently a lecturer at the Department of Physiology, School of Basic Medical Sciences, Federal University of Technology, Akure (FUTA), Nigeria.\n\nOritoke's research interest is a synergy of behavioural neuroscience, neuropharmacology, and translational medicine, with a growing focus on the therapeutic potential of natural products and bioactive compounds. She also studies the intersection between mental health and environmental stressors as well as how societal structures, particularly patriarchal systems, influence the neurobiology of stress and contribute to disparities in mental health outcomes. She is a recipient of several research and travel grants from several organizations such as IBRO, ISN, International Centre for Genetic Engineering and Biotechnology (ICGEB), Tertiary Education Trust Fund (TETFund), African College of Neuropsychopharmacology (AfCNP) amongst others.\n\nBeyond the lab, Oritoke is a passionate advocate for diversity and inclusion in science, particularly advancing female-in-STEM initiatives, and she is actively engaged in mental health advocacy, leading campaigns to raise awareness and reduce stigma within academic institutions and local communities. Oritoke's hobbies are travelling and listening to music.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "omokeowo@futa.edu.ng"
  }
];

export const graduate: TeamMember[] = [
  {
    id: 4,
    name: "Ukwubile Ileje Inelo",
    role: "PhD Student",
    position: "Junior faculty, Department of Anatomy, UNIMED",
    bio: "Junior faculty at UNIMED with research interests in neuroscience and neurodegeneration, focusing on the role of heavy metals in neurotoxicity.",
    detailedBio: "Mr. Ukwubile Ileje Inelo has a strong background in Human Anatomy from the University of Ilorin, Ilorin, Nigeria, where he obtained B.Sc. and M.Sc. degrees in 2009 and 2018, respectively. His research interests are broadly in neuroscience, with a specific focus on neurodegeneration. His current research focuses on the role heavy metals such as manganese, nickel, and iron, among others, play in triggering neurotoxicity that may impact neuronal health and pose significant risks for brain disorders.\n\nHis PhD aims to advance our understanding of multifactorial interactions involving genes, environment, and gut microbiome in the pathogenesis of neurodegenerative diseases such as Parkinson's. Mr. Ileje enjoys reading, scrabbling, directing, and organizing people, of which, above all, he is a passionate lover of God.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "iukwubile@unimed.edu.ng"
  },
  {
    id: 5,
    name: "Happiness Ochi Inyang",
    role: "PhD Student",
    bio: "Researcher in neurotoxicology and neurobiology, focusing on environmental toxins and protective mechanisms in the nervous system.",
    detailedBio: "Happiness O. Inyang obtained a BSc in Human Anatomy at the University of Cross River State (UNICROSS) in 2016 and an MSc at Alex Ekwueme Federal University, Ndufu Alike Ikwo (AE-FUNAI) in 2024. She is currently pursuing a PhD fellow a the Laboratory for Experimental and Translational Neurobiology (LETNeu). Her research interests center on neurotoxicology and neurobiology, with an emphasis on understanding how environmental toxins impact the nervous system and identifying potential protective mechanisms.\n\nHappiness has co-authored a few articles as well as a book chapter discussing blood-brain barrier disruption and the role of nanomedicine in neurodegenerative diseases. Her long-term aspiration is to establish a career as a leading researcher in neurotoxicology, bridging the gap between research and clinical applications. Happiness enjoys hobbies like learning new skills, travelling, cooking",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "happinessinyang22@gmail.com"
  },
  {
    id: 6,
    name: "Oyeniran David Anuoluwapo",
    role: "PhD Student",
    bio: "Specializing in Neuroscience, researching structural, molecular, and genetic mechanisms underlying neurodegenerative and neurodevelopmental disorders.",
    detailedBio: "Oyeniran David Anuoluwapo began his academic journey studying Human Anatomy at Ladoke Akintola University of Technology, Ogbomosho. He further advanced his studies with a Master's degree in Anatomy at the Lagos State University College of Medicine. His passion for advancing knowledge and hands-on techniques in molecular and cellular neurobiology led him to LETNeu, where he is currently pursuing a PhD program specializing in Neuroscience.\n\nDavid's research investigates the structural, molecular, and genetic mechanisms underlying neurodegenerative and neurodevelopmental disorders, focusing on synaptic plasticity, neurotransmitter systems, gut-microbiota-brain axis, and how they are influenced by environment and gene using Caenorhabditis elegans and rodent models. His work also delves into the epigenetic mechanisms through which environmental factors influence transgenerational cognition. He is a researcher with published articles, David is also passionate about writing, listening to music, and playing musical instruments.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "opetydave24@gmail.com"
  },
  {
    id: 7,
    name: "Omotosho Omolabake",
    role: "MSc Student and Research Associate",
    bio: "Lab Manager researching metal neurotoxic perturbation of key synaptic proteins implicated in neurodevelopmental disorders and sexual dimorphism.",
    detailedBio: "Omolabake Ifeoluwa Omotosho is a Research Associate who also doubles as the Lab Manager. She holds a B.Sc. in Human Anatomy (2022) from the Federal University of Technology, Akure, Ondo State, Nigeria.\n\nHer interest in neuroscience was sparked during her graduate internship at NeuroLab, now LETNeu, where she gained invaluable exposure to the use of rodent and C. elegans models, tissue processing, immunohistochemistry, rodent brain microdissection, brightfield microscopic imaging, and biostatistics, providing a solid foundation for her research journey.\n\nCurrently pursuing an MSc in Anatomy with a focus on Neuroscience, her research explores metal neurotoxic perturbation of key synaptic proteins implicated in neurodevelopmental disorders, such as autism spectrum disorder, as well as the involvement of sexual dimorphism.\nOmolabake is a recipient of the cornerstone grant, which supports her MSc program at LETNeu.\nOutside academia, she enjoys reading, cooking, designing, and exploring new things.",
    image: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "labakeomotosho@gmail.com"
  },
  {
    id: 8,
    name: "Anadu Victor Ebube",
    role: "MSc Student",
    bio: "Investigating gene-environment interactions between loss-of-function in autism-risk genes and developmental neurotoxicity of metal exposure in C. elegans.",
    detailedBio: "Victor Anadu holds a B.Sc. degree in Anatomy (2021) from Nnamdi Azikiwe University, Awka. He has interests in heavy metal neurotoxicity and neurodevelopment. His master's project investigates gene-environment interactions between loss-of-function in the autism-risk gene, NRXN, and developmental neurotoxicity of nickel and manganese exposure in C. elegans. He has worked on projects that investigated the neurotoxic impacts of heavy metals and stress co-exposures in adult Wistar rats. Outside academia, He enjoys playing chess and football, listening to music, reading books, travelling, and meeting new people.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "ve.anadu@gmail.com"
  },
  {
    id: 9,
    name: "Oyerinde Toheeb Olalekan",
    role: "MSc Student",
    bio: "Researching neurodevelopmental sequelae of metal neurotoxicity in an NLGN-deficient autism model of C. elegans.",
    detailedBio: "Mr. Oyerinde Toheeb Olalekan earned his B.Tech from Ladoke Akintola University of Technology (LAUTECH), Ogbomosho, Oyo State, in 2022. He is passionate about neurobiology and driven by a deep interest in neurotoxicity and neurodevelopment. His current master's research focuses on unraveling the neurodevelopmental sequelae of metal neurotoxicity in an NLGN-deficient autism model of C. elegans. Toheeb is a recipient of the Genetics Society of America DeLill Nasser Award, which enabled him to undertake an intensive month-long laboratory course on molecular techniques and bioinformatics at the Helix Biogen Institute, Ogbomosho, Nigeria.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "oyerindetoheeb@gmail.com"
  },
  {
    id: 10,
    name: "Olajide Tobiloba",
    role: "MSc Student",
    bio: "Focused on understanding the pathogenesis of neurodegenerative diseases and identifying potential mechanisms to halt their progression.",
    detailedBio: "Tobiloba Olajide is a graduate intern at LETNeu, where he actively contributes to advancing neurobiological research. He holds a B.Sc. degree in Physiology from the University of Ilorin. Tobiloba's research interests have always been centered on understanding the pathogenesis of neurodegenerative diseases and identifying potential mechanisms to halt their progression, particularly in Alzheimer's and Parkinson's diseases.",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "olajidetobi625@gmail.com"
  },
  {
    id: 11,
    name: "Oluoma Vivian Aneke",
    role: "MSc Student",
    bio: "Researching the role of iron overload in the neurexin-neuroligin complex with implications for autism spectrum disorders.",
    detailedBio: "Miss Oluoma earned her bachelor of science degree in human anatomy from Nnamdi Azikiwe University. She is currently a Master's student in the lab. Her current research seeks to unravel the role of iron overload in the neurexin-neuroligin complex- implication for autism spectrum disorders. She is currently skilled in some research procedures like immunohistochemistry, basic tissue processing, photomicrography, C. elegans handling, and rat brain tissue dissection.\nIn her leisure, Oluoma loves to read novels, watch movies, and listen to music.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "oluomaaneke@gmail.com"
  }
];

export const alumni: TeamMember[] = [
  {
    id: 12,
    name: "Joy Dubem Iroegbu",
    role: "Alumni",
    bio: "Former researcher at LETNeu.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    name: "Comfort Ofure Okoh",
    role: "Alumni",
    bio: "Former researcher at LETNeu.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    name: "Godslove Emmanuel Emeka",
    role: "Alumni",
    bio: "Former researcher at LETNeu.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    name: "Grace Akingbade, PhD",
    role: "Alumni",
    bio: "Former researcher at LETNeu.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    name: "Awoyemi Iretomiwa Lydia",
    role: "Intern",
    bio: "Research intern at LETNeu.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17,
    name: "Ayodele Samuel Adewale",
    role: "Intern",
    bio: "Research intern at LETNeu.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const allTeamMembers = [...principalInvestigators, ...researchers, ...graduate, ...alumni];
