
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
    date: "June 4-6, 2025",
    time: "10:00 AM daily",
    location: "TETfund Building, UNIMED Laje Campus",
    description: "Theme: Innovating Biomedical Research for Transformative National Policies. Featuring plenary speakers Prof. Olumide A.T. Ogundahunsi and Prof. Samuel O. Oluwafemi. Subthemes include advances in molecular biomedicine, neuroscience and neuro-technologies, innovative approaches in phytomedicine, endocrinology and reproductive physiology, anatomical bioanthropology, computational biology and bioinformatics, and artificial intelligence in biomedical research.",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    registrationUrl: "https://forms.gle/byvJ45Z1MFWvi11E9",
    category: 'conference'
  }
];

export const pastEvents: Event[] = [];

export const allEvents = [...upcomingEvents, ...pastEvents];

export const eventCategories = [
  { label: 'All Events', value: 'all' },
  { label: 'Seminars', value: 'seminar' },
  { label: 'Conferences', value: 'conference' },
  { label: 'Workshops', value: 'workshop' },
  { label: 'Symposia', value: 'symposium' },
  { label: 'Other', value: 'other' }
];
