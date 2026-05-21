
export interface TeamMember {
  id: number;
  name: string;
  role?: string;
  bio?: string;
  image: string;
  email?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  websites?: string[];
  detailedBio?: string;
  position?: string;
}

export const administration: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Omamuyovwi M. Ijomone",
    role: "Director & Founder",
    image: "/hero-media/SNV_6267.jpg",
    email: "omijomone@unimed.edu.ng",
  },
  {
    id: 2,
    name: "Dr. Olayemi K. Ijomone",
    role: "Deputy Director, Operations",
    image: "/hero-media/SNV_6304.jpg",
    email: "oolaibi@unimed.edu.ng",
  },
  {
    id: 3,
    name: "Omotosho Omolabake",
    role: "Lab Manager",
    image: "/hero-media/SNV_6325.jpg",
    email: "labakeomotosho@gmail.com",
  },
  {
    id: 4,
    name: "Anadu Victor Ebube",
    role: "Technical Lead",
    image: "/hero-media/SNV_6393.jpg",
    email: "ve.anadu@gmail.com",
  }
];

export const faculty: TeamMember[] = [
  {
    id: 5,
    name: "Dr. Omamuyovwi M. Ijomone",
    role: "Principal Investigator",
    bio: "Research Area: Gene-environment interplay, Neurotoxicity, Microbiota-Gut-Brain Axis, and Brain Disorders like Autism.",
    image: "/hero-media/SNV_6267.jpg",
    email: "omijomone@unimed.edu.ng",
    linkedin: "https://ng.linkedin.com/in/omamuyovwi-mamus-ijomone-1610481b",
    twitter: "https://x.com/godmamusprime",
    websites: [
      "https://www.unimed.edu.ng/staff-profile/omijomone",
      "https://einsteinmed.edu/faculty/14721/omamuyovwi-m-ijomone"
    ]
  },
  {
    id: 6,
    name: "Dr. Kingsley A. Iteire",
    role: "Principal Investigator",
    bio: "Research Area: Metabolic Dysfunctions in Neurodegenerative Diseases, particularly Alzheimer's, Neuroinflammation, and Epigenetic Regulation.",
    image: "/hero-media/DrIteire.jpg",
    email: "aiteire@unimed.edu.ng",
    linkedin: "https://www.linkedin.com/in/kingsley-iteire-6a1a9b10a/",
    websites: [
      "https://www.unimed.edu.ng/staff/profile.php?sid=302"
    ]
  },
  {
    id: 7,
    name: "Dr. Olayemi K. Ijomone",
    role: "Principal Investigator",
    bio: "Research Area: Neurotoxicity, Neuroinflammation, Iron Overload in Brain, and Neurodevelopmental Disorders like Autism.",
    image: "/hero-media/SNV_6304.jpg",
    email: "oolaibi@unimed.edu.ng",
    linkedin: "https://linkedin.com/in/olayemi-ijomone-b6a2a3b9",
    instagram: "https://www.instagram.com/yemimamus/",
    websites: [
      "https://www.unimed.edu.ng/staff-profile/oolaibi"
    ]
  },
  {
    id: 8,
    name: "Dr. Oritoke M. Okeowo",
    role: "Principal Investigator",
    bio: "Research Area: Behavioural Neuroscience, Neuropsychopharmacology, and Stress-related Brain Disorders.",
    image: "/hero-media/dr-oritoke.jpg",
    email: "omokeowo@futa.edu.ng",
    linkedin: "https://ng.linkedin.com/in/dr-oritoke-okeowo-509998107",
    instagram: "https://www.instagram.com/being_oritoke/",
    websites: [
      "https://phs.futa.edu.ng/home/profile/3296"
    ]
  }
];

export const researchAssociatesAndGraduateTrainees: TeamMember[] = [
  {
    id: 9,
    name: "Ukwubile Ileje Inelo",
    role: "PhD Student & Lecturer",
    image: "https://i.postimg.cc/qRKkBS8x/m4.png",
    email: "iukwubile@unimed.edu.ng",
    linkedin: "https://ng.linkedin.com/in/dr-oritoke-okeowo-509998107",
    websites: [
      "https://www.unimed.edu.ng/staff-profile/iukwubile"
    ]
  },
  {
    id: 10,
    name: "Happiness Ochi Inyang",
    role: "PhD Student",
    image: "/hero-media/SNV_6435.jpg",
    email: "happinessinyang22@gmail.com",
    linkedin: "https://www.linkedin.com/in/happiness-inyang-a2a085254/"
  },
  {
    id: 11,
    name: "Oyeniran David Anuoluwapo",
    role: "PhD Student",
    image: "https://i.postimg.cc/pL0VsDWz/m6.png",
    email: "opetydave24@gmail.com",
    linkedin: "https://www.linkedin.com/in/david-oyeniran-764120161/"
  },
  {
    id: 12,
    name: "Anadu Victor Ebube",
    role: "Graduate Student & Technical Lead",
    image: "/hero-media/SNV_6393.jpg",
    email: "ve.anadu@gmail.com",
    linkedin: "https://www.linkedin.com/in/victor-anadu-764120161/"
  },
  {
    id: 13,
    name: "Omotosho Omolabake",
    role: "Graduate Student & Lab Manager",
    image: "/hero-media/SNV_6325.jpg",
    email: "labakeomotosho@gmail.com",
    linkedin: "https://ng.linkedin.com/in/omotomol"
  },
  {
    id: 14,
    name: "Oyerinde Toheeb Olalekan",
    role: "Graduate Student",
    image: "/hero-media/SNV_6381.jpg",
    email: "oyerindetoheeb@gmail.com",
    linkedin: "https://www.linkedin.com/in/oyerindetoheeb/",
    twitter: "https://x.com/alphagold03"
  },
  {
    id: 15,
    name: "Olajide Tobiloba",
    role: "Graduate Student",
    image: "/hero-media/SNV_6372.jpg",
    email: "olajidetobi625@gmail.com",
    linkedin: "https://www.linkedin.com/in/olajidetobiloba625/"
  },
  {
    id: 16,
    name: "Oluoma Vivian Aneke",
    role: "Graduate Student",
    image: "/hero-media/SNV_6294.jpg",
    email: "oluomaaneke@gmail.com",
    linkedin: "https://www.linkedin.com/in/oluoma-vivian-aneke-solution-driven-health-and-wellness-writer-/"
  },
  {
    id: 17,
    name: "Afolabi Omotayo Omolola",
    role: "Graduate Student",
    image: "/hero-media/SNV_6305.jpg",
    email: "",
    linkedin: "https://www.linkedin.com/in/omotayo-afolabi-725343212/"
  },
  {
    id: 18,
    name: "Awoyemi Iretomiwa Lydia",
    role: "Graduate Student",
    image: "/hero-media/SNV_6352.jpg",
    email: "lydiairetomiwa1@gmail.com",
    linkedin: "https://www.linkedin.com/in/awoyemi-iretomiwa-7a721b2a3/"
  },
  {
    id: 19,
    name: "Ogunwale Fawas Abiodun",
    role: "Graduate Student",
    image: "/hero-media/SNV_6281.jpg",
    email: "fawasogunwale@gmail.com",
    linkedin: "https://www.linkedin.com/in/ogunwale-fawas-a3a53b238/"
  },
  {
    id: 20,
    name: "Ayomide Christianah Olukoya",
    role: "Graduate Intern",
    image: "/hero-media/SNV_6339.jpg",
    email: "olukoyachristianah@gmail.com",
    linkedin: "https://www.linkedin.com/in/christianah-olukoya?"
  },
  {
    id: 21,
    name: "Kehinde Akeredolu",
    role: "Graduate Intern",
    image: "/hero-media/SNV_6360.jpg"
  },
  {
    id: 22,
    name: "Oluwayemisi Ogunmakin",
    role: "Graduate Intern",
    image: "/hero-media/SNV_6405.jpg"
  },
  {
    id: 23,
    name: "Idakwo Matthew James",
    role: "Graduate Intern",
    image: "/hero-media/SNV_6367.jpg"
  },
  {
    id: 24,
    name: "Oladele Tolulope Samuel",
    role: "Research Associate & Lecturer",
    image: "/hero-media/SNV_6442.jpg",
    email: "toladele@unimed.edu.ng",
    linkedin: "https://www.linkedin.com/in/tolulanguy/",
    websites: [
      "https://tolulanguy.github.io/",
      "https://www.unimed.edu.ng/staff-profile/toladele"
    ]
  }


  // {
  //   id: 12,
  //   name: "Joy Dubem Iroegbu",
  //   role: "Alumni",
  //   bio: "Former researcher at LETNeu.",
  //   image: "https://i.postimg.cc/g0JjpgSg/m12.png"
  // },
  // {
  //   id: 13,
  //   name: "Comfort Ofure Okoh",
  //   role: "Alumni",
  //   bio: "Former researcher at LETNeu.",
  //   image: "https://i.postimg.cc/zvmGn8JQ/m13.png"
  // },
  // {
  //   id: 14,
  //   name: "Godslove Emmanuel Emeka",
  //   role: "Alumni",
  //   bio: "Former researcher at LETNeu.",
  //   image: "https://i.postimg.cc/N0zMjRZB/m14.png"
  // },
  // {
  //   id: 15,
  //   name: "Grace Akingbade, PhD",
  //   role: "Alumni",
  //   bio: "Former researcher at LETNeu.",
  //   image: "https://i.postimg.cc/g24j1CDw/m15.png"
  // },
  // {
  //   id: 17,
  //   name: "Ayodele Samuel Adewale",
  //   role: "Intern",
  //   bio: "Research intern at LETNeu.",
  //   image: "https://i.postimg.cc/rwqznVSX/m17.png"
  // }
];

export const allTeamMembers = [...administration, ...faculty, ...researchAssociatesAndGraduateTrainees];
