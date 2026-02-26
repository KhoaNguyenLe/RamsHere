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
}

export const events: Event[] = [
  {
    id: "1",
    title: "Career Fair 2026",
    description: "Meet with top employers and explore internship and job opportunities across various industries. Bring your resume and business cards!",
    date: "2026-02-16",
    time: "10:00 AM - 4:00 PM",
    location: "Student Union Building, Main Hall",
    type: "live",
    category: "Career Development",
    attendees: 234,
  },
  {
    id: "2",
    title: "Study Group: Advanced Calculus",
    description: "Join fellow students for a collaborative study session focusing on derivatives, integrals, and problem-solving techniques.",
    date: "2026-02-16",
    time: "2:00 PM - 5:00 PM",
    location: "Library, Room 305",
    type: "live",
    category: "Academic",
    attendees: 18,
  },
  {
    id: "3",
    title: "Mental Health Workshop",
    description: "Learn stress management techniques and mindfulness practices to maintain your well-being during the semester.",
    date: "2026-02-16",
    time: "3:00 PM - 4:30 PM",
    location: "Wellness Center",
    type: "live",
    category: "Wellness",
    attendees: 45,
  },
  {
    id: "4",
    title: "Research Symposium",
    description: "Undergraduate research presentations across all disciplines. Discover what your peers are working on and network with faculty.",
    date: "2026-02-18",
    time: "1:00 PM - 6:00 PM",
    location: "Science Building Auditorium",
    type: "upcoming",
    category: "Academic",
  },
  {
    id: "5",
    title: "Coding Bootcamp: React Basics",
    description: "Learn the fundamentals of React and build your first interactive web application. Laptops required.",
    date: "2026-02-19",
    time: "6:00 PM - 8:00 PM",
    location: "Computer Science Lab 101",
    type: "upcoming",
    category: "Technology",
  },
  {
    id: "6",
    title: "International Food Festival",
    description: "Experience cuisines from around the world prepared by international student organizations. Free admission!",
    date: "2026-02-20",
    time: "5:00 PM - 9:00 PM",
    location: "Campus Quad",
    type: "upcoming",
    category: "Cultural",
  },
  {
    id: "7",
    title: "Alumni Networking Night",
    description: "Connect with successful alumni working in your field of interest. Great opportunity for mentorship and career advice.",
    date: "2026-02-21",
    time: "7:00 PM - 9:00 PM",
    location: "Alumni Center",
    type: "upcoming",
    category: "Career Development",
  },
  {
    id: "8",
    title: "Sustainability Workshop",
    description: "Learn about campus sustainability initiatives and how you can contribute to environmental conservation efforts.",
    date: "2026-02-22",
    time: "11:00 AM - 12:30 PM",
    location: "Environmental Studies Building",
    type: "upcoming",
    category: "Community",
  },
];
