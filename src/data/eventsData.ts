
export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl?: string;
  registrationUrl?: string;
  isPast?: boolean;
  category: 'seminar' | 'conference' | 'workshop' | 'symposium' | 'other';
}

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "FBMS International Conference and Symposiums",
    date: "March 10, 2025 ( Deadline )",
    time: "10:00 AM daily",
    location: "TETfund Building, UNIMED Laje Campus",
    description: "Theme: Innovating Biomedical Research for Transformative National Policies. Featuring plenary speakers Prof. Olumide A.T. Ogundahunsi and Prof. Samuel O. Oluwafemi. Subthemes include advances in molecular biomedicine, neuroscience and neuro-technologies, innovative approaches in phytomedicine, endocrinology and reproductive physiology, anatomical bioanthropology, computational biology and bioinformatics, and artificial intelligence in biomedical research.",
    imageUrl: "https://i.postimg.cc/mkSwJr3p/Whats-App-Image-2025-04-28-at-16-49-43.jpg",
    registrationUrl: "https://forms.gle/byvJ45Z1MFWvi11E9",
    category: 'conference'
  }
];

export const pastEvents: Event[] = [
  {
    id: 2,
    title: "New Research Publication",
    date: "March 15, 2024",
    time: "Published",
    location: "Scientific Journal",
    description: "We are excited to share our recently published paper with you. A big congratulations to the LETNeu team for doing an amazing work. The key takeaway is that potential therapeutic interventions such as the use of new and improved chelating agents and antioxidant therapies might be a significant approach to alleviating metal-induced glial perturbations.",
    imageUrl: "https://i.postimg.cc/9FDPQfvP/e1.png",
    isPast: true,
    category: 'other'
  },
  {
    id: 3,
    title: "Lectures and Practical Sessions",
    date: "February 10, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "UNIMED, Ondo",
    description: "Lectures were given by Professor Felix Antunes Soares, Professor Monica Bastos and a virtual lecture by Miss Ofure Okoh. Thereafter, practicals were conducted. International Society for Neurochemistry (ISN).",
    imageUrl: "https://i.postimg.cc/sDbYQrrk/e2.png",
    isPast: true,
    category: 'workshop'
  },
  {
    id: 4,
    title: "ISN NEUROSCIENCE School",
    date: "August 11-12, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "UNIMED, Ondo",
    description: "The ISN NEUROSCIENCE School, UNIMED, Ondo, began on 11th August, 2024 (Day 1) as the participants and invited speakers arrive from various destinations. On the 12th, the school kicked off grandly which was graciously opened by the Vice Chancellor of the University of Medical Sciences (UNIMED) and a brief talk from the host Omamuyovwi (Mamus) Ijomone. The first lecture was given by Prof Michael Aschner, from Albert Einstein College of Medicine. International Society for Neurochemistry (ISN)",
    imageUrl: "https://i.postimg.cc/brWttQKx/e3.png",
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
