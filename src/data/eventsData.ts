
export interface Event {
  id: number;
  title: string;
  theme?: string;
  date: string;
  time: string;
  location: string;
  description: { 
    subheading: string;
    body: string;
  }[];
  imageUrl?: string;
  registrationUrl?: string;
  fees?: string[];
  speakers?: {
    name: string;
    position: string;
    affiliation: string;
    role?: string;
    // imageUrl?: string;
  }[];
  schedule?: {
    day: string;
    items: {
      time: string;
      activity: string;
    }[];
  }[];
  organizers?: {
    name: string;
    position: string;
    email: string;
  }[];
  abstractSubmission?: {
    deadline?: string;
    guidelines?: string[];
    email?: string;
    note?: string;
  };
  flyerUrl?: string;
  gallery?: string[];
  isPast?: boolean;
  category: 'seminar' | 'conference' | 'workshop' | 'symposium' | 'other';
}

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "GSA Mini Workshop on the C. elegans Model in Nigeria",
    theme: "Theme: C. elegans as a Model for Neuroscience Research in Resource-Limited Settings",
    date: "August 5 - 8, 2026",
    time: "From 07:00 AM (UTC+1) Daily",
    location: "Multidisciplinary Laboratory Building, University of Medical Sciences, Ondo, Medical Village, Laje Road, Ondo State, Nigeria",
    description: [
      {
        subheading: undefined,
        body: "The workshop aims to provide a scholarly and contemporary update on the use of Caenorhabditis elegans as a powerful and cost-effective model organism for genetic and neuroscience research. Lectures will be delivered by distinguished international and local scholars. The theoretical knowledge will be fully enhanced with hands-on research techniques incuding C. elegans husbandry, behavioral assays, host-microbe biology, RNAi procedures for gene silencing and in vivo fluorescent imaging. Participants will also gain practical experience in genetic mutant selection and phenotypic scoring to support innovate genetics research in low-resource settings.\nSelected participants will have their registration fully waived, meals and workshop materials covered."
      },
      {
        subheading: "Who Should apply?",
        body: "Graduate students (Masters and Doctoral), postdocs, and young faculties who are pursuing careers in the biomedical sciences and with demonstrated interest in neurosciences as evidenced by previous publications, and/or presentations at conferences.\nOnly Applicants from Nigerian institutions will be accepted."
      },
      {
        subheading: "Only Applicants from Nigerian institutions will be accepted.",
        body: undefined
      }
    ],
    imageUrl: "/hero-media/c-elegans-toheeb.webp",
    registrationUrl: "https://forms.gle/wcZB9Wjz2W1TU9J27",
    fees: [
      "REGISTRATION IS FREE"
    ],
    organizers: [
      {
        name: "Dr Omamuyovwi M. Ijomone",
        position: "Group Leader, LETNeu, UNIMED",
        email: "omijomone@unimed.edu.ng"
      },
      {
        name: "Tobiloba S. Olajide",
        position: "Graduate Student, LETNeu, UNIMED",
        email: "olajidetobi625@gmail.com"
      },
      {
        name: "Toheeb O. Oyerinde",
        position: "Graduate Student, LETNeu, UNIMED",
        email: "oyerindetoheeb@gmail.com"
      }
    ],
    schedule: [
      {
        day: "Day 1",
        items: [
          { time: "13:00 – 17:00", activity: "Arrivals and registration" },
          { time: "07:00 – 18:00", activity: "Meet and greet/welcome cocktail" },
          { time: "18:00 – 20:00", activity: "Dinner" }
        ]
      },
      {
        day: "Day 2",
        items: [
          { time: "07:30 – 09:00", activity: "Breakfast & Registration" },
          { time: "09:00 – 09:30", activity: "Welcome and Introduction" },
          { time: "09:30 – 10:30", activity: "Lecture 1: Introduction of C. elegans biology: Mitigating Ethical Issues for Vertebrate Models – Dr Omamuyovwi Ijomone" },
          { time: "10:30 – 11:00", activity: "Tea Break" },
          { time: "11:00 – 12:00", activity: "Lecture 2: Genetic Screening in C. elegans: Uncovering Novel Pathways in Synaptic Resilience Upon Neurotoxicity – Dr Daiana Avila (virtual)" },
          { time: "12:00 – 13:00", activity: "Launch" },
          { time: "13:00 – 17:00", activity: "Practical/Hands-on Session 1: Basic C. elegans Husbandry and Behavioural Assays – Instructors" },
          { time: "17:00 – 17:30", activity: "Short Break" },
          { time: "17:00 – 18:30", activity: "Student Presentations" },
          { time: "18:15 – 20:00", activity: "Dinner" }
        ]
      },
      {
        day: "Day 3",
        items: [
          { time: "07:30 – 09:00", activity: "Registration and networking" },
          { time: "09:00 – 10:30", activity: "Lecture 3: How Gene and Environment Interplay Alters the Nervous System and Induces Brain Aging – Prof Felix Soares (virtual)" },
          { time: "10:30 – 10:45", activity: "Tea Break" },
          { time: "10:45 – 12:15", activity: "Forum: Grantsmanship – Strategies for Writing Successful Neuroscience Grants and Overcoming Funding Challenges in LMICs – Dr. Omamuyovwi Ijomone" },
          { time: "12:15 – 13:30", activity: "Launch" },
          { time: "13:30 – 16:30", activity: "Practical/Hands-on Session 2: Working with C. elegans Genetic Mutants (Mutant Selection, Phenotypic Scoring, Fluorescence Microscopy, RNAi procedures, CeMBio Resource) – Instructors" },
          { time: "16:30 – 17:00", activity: "Short Break" },
          { time: "17:00 – 18:15", activity: "Student Presentations and Open Discussion" },
          { time: "18:15 – 20:00", activity: "Dinner and Closing formalities" }
        ]
      },
      {
        day: "Day 4",
        items: [
          { time: "08:30", activity: "Breakfast and Departure" }
        ]
      }
    ],
    speakers: [
      {
        name: "Prof Felix AA Soares",
        position: "Professor of Biochemistry",
        affiliation: "Centre of Natural and Exact Sciences (CCNE), Federal University of Santa Maria, Brazil",
        role: "Speaker (Virtually)",
        // imageUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg"
      },
      {
        name: "Prof. Daiana Silva Avila (F), Associate Professor and Leader",
        position: "Global Health Policy Consultant",
        affiliation: "Laboratory of Biochemistry and Toxicology in Caenorhabditis elegans (GBToxCe), Federal University of Pampa, Brazil.",
        role: "Speaker (Virtually)",
        // imageUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg"
      },
      {
        name: "Dr Omamuyovwi M. Ijomone",
        position: "Associate Professor and Group Leader",
        affiliation: "LETNeu, and Department of Anatomy, FBMS, UNIMED",
        role: "Speaker and Organizer",
        // imageUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg"
      },
      {
        name: "Dr Olayemi K. Ijomone",
        position: "Lecturer and Researcher",
        affiliation: "LETNeu and Department of Anatomy, FBMS, UNIMED",
        role: "Instructor (In person)",
        // imageUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg"
      },
      {
        name: "Ms. Inyang Happiness",
        position: "Doctoral Student, LETNeu, UNIMED",
        affiliation: "LETNeu and Department of Anatomy, FBMS, UNIMED",
        role: "Instructor (In person)",
        // imageUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg"
      },
      {
        name: "Ms. Omolabake Omotoso",
        position: "Graduate Student",
        affiliation: "LETNeu and Department of Anatomy, FBMS, UNIMED",
        role: "Instructor (In person)",
        // imageUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg"
      },
      {
        name: "Mr Victor Anadu",
        position: "Graduate Student",
        affiliation: "LETNeu and Department of Anatomy, FBMS, UNIMED",
        role: "Instructor (In person)",
        // imageUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg"
      },
      {
        name: "Mr Tobiloba Olajide",
        position: "Graduate Student and Co-Organizer",
        affiliation: "LETNeu and Department of Anatomy, FBMS, UNIMED",
        role: "Instructor (In person)",
        // imageUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg"
      },
      {
        name: "Mr Toheeb Oyerinde",
        position: "Graduate Student and Co-Organizer",
        affiliation: "LETNeu and Department of Anatomy, FBMS, UNIMED",
        role: "Instructor (In person)",
        // imageUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg"
      }
    ],
    flyerUrl: "/hero-media/C-elegans_Workshop-flyer.jpeg",
    category: 'workshop'
  }
];





export const pastEvents: Event[] = [
  {
    id: 2,
    title: "FBMS International Conference and Symposiums",
    date: "Tuesday, 30th June 2025",
    time: "11:59 PM (UTC+1)",
    location: "University of Nigeria, Enugu Campus, Enugu State",
    description: [
      {
        subheading: "Conference Overview",
        body: "LETNeu will provide partial support for up to 17 aspiring/young neuroscientists to participate in the annual Neuroscience Society of Nigeria (NSN) 2025 Conference at University of Nigeria, Enugu Campus, Enugu State from 2nd – 6th September 2025."
      }
    ],
    imageUrl: "https://i.postimg.cc/mkSwJr3p/Whats-App-Image-2025-04-28-at-16-49-43.jpg",
    registrationUrl: undefined,
    fees: [
      "Early bird registration: 25,000 NGN",
      "Standard registration: 30,000 NGN",
      "Virtual participation: 20,000 NGN"
    ],
    organizers: [
      {
        name: "Prof Isaac Adewale",
        position: "Dean, FBMS, UNIMED",
        email: "iadewale@unimed.edu.ng"
      },
      {
        name: "Dr Omamuyovwi M. Ijomone",
        position: "Chair, Local Organizing Committee & Group Leader, LETNeu, UNIMED",
        email: "omijomone@unimed.edu.ng"
      }
    ],
    abstractSubmission: {
      deadline: "30 April 2025",
      guidelines: [
        "Include title, authors, affiliations, and corresponding author email.",
        "Limit abstracts to 300 words.",
        "Use Arial font size 10-11 with single spacing.",
        "Upload as a one-page MS Word document."
      ],
      email: "ana@unimed.edu.ng",
      note: "Submit abstracts with proof of registration payment."
    },
    schedule: [
      {
        day: "Day 1",
        items: [
          { time: "15:00 – 17:00", activity: "Arrivals and registration" },
          { time: "17:00 – 18:00", activity: "Meet and greet/welcome cocktail" },
          { time: "18:00 – 20:00", activity: "Dinner" }
        ]
      },
      {
        day: "Day 2",
        items: [
          { time: "09:00 – 10:00", activity: "Registration and networking" },
          { time: "10:00 – 10:25", activity: "Opening Ceremony" },
          { time: "10:50 – 12:30", activity: "Plenary 1" },
          { time: "12:30 – 13:30", activity: "Lunch Break" },
          { time: "13:30 – 15:00", activity: "Symposium Session 1" },
          { time: "15:00 – 15:30", activity: "Break" },
          { time: "15:30 – 16:30", activity: "Poster Session 1" },
          { time: "16:30 – 17:00", activity: "Closing and networking" }
        ]
      }
    ],
    speakers: [
      {
        name: "Prof Felix AA Soares",
        position: "Professor of Biochemistry",
        affiliation: "Centre of Natural and Exact Sciences (CCNE), Federal University of Santa Maria, Brazil",
        role: "Speaker (Virtually)",
        // imageUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg"
      },
      {
        name: "Prof. Daiana Silva Avila (F), Associate Professor and Leader",
        position: "Global Health Policy Consultant",
        affiliation: "Laboratory of Biochemistry and Toxicology in Caenorhabditis elegans (GBToxCe), Federal University of Pampa, Brazil.",
        role: "Speaker (Virtually)",
        // imageUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg"
      },
      {
        name: "Dr Omamuyovwi M. Ijomone",
        position: "Associate Professor and Group Leader",
        affiliation: "LETNeu, and Department of Anatomy, FBMS, UNIMED",
        role: "Speaker and Organizer",
        // imageUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg"
      }
    ],
    gallery: [
      "https://i.postimg.cc/mkSwJr3p/Whats-App-Image-2025-04-28-at-16-49-43.jpg"
    ],
    isPast: true,
    flyerUrl: "https://i.postimg.cc/mkSwJr3p/Whats-App-Image-2025-04-28-at-16-49-43.jpg",
    category: 'conference'
  },
  {
    id: 3,
    title: "LETNeu NSN 2025 Conference Travel Support",
    theme: "Supporting young neuroscientists through travel grants",
    date: "Monday, March 10, 2025 ( Deadline )",
    time: "10:00 AM (UTC+1) Daily",
    location: "TETfund Building, UNIMED Laje Campus",
    description: [
      {
        subheading: "Conference Overview",
        body: "NSN Coal City 2025 is the 22nd Scientific Conference and Annual General Meeting of the Neuroscience Society of Nigeria (NSN), which took place from September 2 to September 6, 2025\nLETNeu provided travel support for 17 aspiring/young neuroscientists to participate in the annual Neuroscience Society of Nigeria (NSN) 2025 Conference at University of Nigeria, Enugu Campus, Enugu State from 2nd – 6th September 2025.\nThe conference featured a rich program of plenary lectures, symposia, workshops, and poster sessions covering a wide range of neuroscience topics. It provided an excellent platform for networking, knowledge exchange, and showcasing cutting-edge research in the field of neuroscience in Nigeria and beyond.\nLETNeu's support enabled these young neuroscientists to present their research, engage with leading experts, and foster collaborations that will contribute to the advancement of neuroscience in Nigeria.\nHosted at the University of Nigeria, Enugu Campus (UNEC), the conference was centered around the theme: Advancing Neuroscience in Nigeria: Bridging the Gap in Research, Innovation and Clinical Practice."
      }
    ],
    imageUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg",
    organizers: [
      {
        name: "Neuroscience Society of Nigeria",
        position: "NSN COAL CITY 2025",
        email: undefined
      }
    ],
    gallery: [
      "/hero-media/nsn-1.jfif",
      "/hero-media/nsn-2.jfif",
      "/hero-media/nsn-3.jfif",
      "/hero-media/nsn-4.jfif",
      "/hero-media/nsn-5.jfif",
      "/hero-media/nsn-6.jfif"
    ],
    isPast: true,
    flyerUrl: "https://i.postimg.cc/3NY3PDSJ/LETNeu-ISN-2025.jpg",
    category: 'workshop'
  },
  {
    id: 4,
    title: "ISN NEUROSCIENCE School",
    date: "August 11-12, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "UNIMED, Ondo",
    description: [
      {
        subheading: "School Overview",
        body: "The ISN NEUROSCIENCE School, UNIMED, Ondo, began on 11th August, 2024 (Day 1) as the participants and invited speakers arrive from various destinations. On the 12th, the school kicked off grandly which was graciously opened by the Vice Chancellor of the University of Medical Sciences (UNIMED) and a brief talk from the host Omamuyovwi (Mamus) Ijomone. The first lecture was given by Prof Michael Aschner, from Albert Einstein College of Medicine. International Society for Neurochemistry (ISN)"
      }
    ],
    imageUrl: "https://i.postimg.cc/brWttQKx/e3.png",
    gallery: [
      "/hero-media/ISN-43.jpg",
      "/hero-media/ISN-44.jpg",
      "/hero-media/ISN-86.jpg",
      "/hero-media/ISN-88.jpg",
      "/hero-media/ISN-89.jpg",
      "/hero-media/ISN-50.jpg",
      "/hero-media/ISN-55.jpg",
      "/hero-media/ISN-70.jpg",
      "/hero-media/ISN-101.jpg",
      "/hero-media/ISN-110.jpg",
      "/hero-media/ISN-126.jpg",
      "/hero-media/ISN-150.jpg",
      "/hero-media/ISN-165.jpg",
      "/hero-media/ISN-178.jpg",
      "/hero-media/ISN-Dy02-3.jpg",
      "/hero-media/ISN-Dy02-4.jpg",
      "/hero-media/ISN-Dy02-5.jpg",
      "/hero-media/ISN-Dy02-61.jpg",
      "/hero-media/ISN-Dy02-71.jpg",
      "/hero-media/ISN-Dy02-84.jpg",
      "/hero-media/ISN-Dy02-108.jpg",
      "/hero-media/ISN-Dy02-116.jpg",
      "/hero-media/ISN-Dy02-117.jpg",
      "/hero-media/ISN-Dy02-119.jpg",
      "/hero-media/ISN-98.jpg",
      "/hero-media/ISN-Dy02-123.jpg",
      "/hero-media/ISN-Dy02-146.jpg",
      "/hero-media/ISN-Dy02-150.jpg",
      "/hero-media/ISN-85.jpg",
      "/hero-media/ISN-61.jpg",
      "/hero-media/ISN-199.jpg",
      "/hero-media/ISN-30.jpg"
    ],
    isPast: true,
    category: 'symposium'
  }
];

export const allEvents = [...upcomingEvents, ...pastEvents];

export const eventCategories = [
  { label: 'All Events', value: 'all' },
  { label: 'Seminars', value: 'seminar' },
  { label: 'Conferences', value: 'conference' },
  { label: 'Workshops', value: 'workshop' },
  { label: 'Symposia', value: 'symposium' },
  { label: 'Other', value: 'other' }
];
