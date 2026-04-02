export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "live" | "upcoming";
  category: string;
  attendees?: number;
  photo?: string;
  majorTags?: string[];
}

export const events: Event[] = [
  {
    id: "1",
    title: "Spring Festival 2026",
    description: "Celebrate the arrival of spring with food trucks, live music, and activities from various student organizations on the main quad.",
    date: "2026-04-02",
    time: "12:00 PM - 5:00 PM",
    location: "Campus Main Quad",
    type: "live",
    category: "Cultural",
    attendees: 450,
    majorTags: ["All Majors"],
  },
  {
    id: "2",
    title: "Algorithm Finals Prep",
    description: "Intensive study group specifically focused on graph algorithms and dynamic programming to prepare for the upcoming midterms.",
    date: "2026-04-02",
    time: "2:00 PM - 4:00 PM",
    location: "Engineering Library, Room 402",
    type: "live",
    category: "Academic",
    attendees: 32,
    majorTags: ["Computer Science", "Software Engineering"],
  },
  {
    id: "3",
    title: "Career Resume Review Session",
    description: "One-on-one resume reviews with recruiters from top tech, finance, and engineering firms.",
    date: "2026-04-05",
    time: "1:00 PM - 4:00 PM",
    location: "Career Services Center",
    type: "upcoming",
    category: "Career Development",
    majorTags: ["All Majors"],
  },
  {
    id: "4",
    title: "Hackathon Kickoff: Code for Good",
    description: "Opening ceremonies for the 48-hour social impact hackathon. Form teams and start building!",
    date: "2026-04-10",
    time: "5:00 PM - 7:00 PM",
    location: "Innovation Hub Auditorium",
    type: "upcoming",
    category: "Technology",
    majorTags: ["Computer Science", "Information Systems", "Design"],
  },
  {
    id: "5",
    title: "Alumni Engineering Meet & Greet",
    description: "Network with successful alumni who graduated from the College of Engineering. Great chance for finding mentors.",
    date: "2026-04-15",
    time: "6:00 PM - 8:30 PM",
    location: "Alumni Center Banquet Hall",
    type: "upcoming",
    category: "Career Development",
    majorTags: ["Mechanical Engineering", "Electrical Engineering", "Civil Engineering"],
  },
];
