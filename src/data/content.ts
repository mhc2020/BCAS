export type EventItem = {
  slug: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  description: string;
  image?: string;
};

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export type ExecutiveMember = {
  name: string;
  position: string;
};

export const events: EventItem[] = [
  {
    slug: "pohela-boishakh-2026",
    title: "Pohela Boishakh Celebration 2026",
    date: "2026-04-14",
    time: "6:00 PM",
    location: "Saskatoon (venue TBA)",
    description:
      "Join the community to celebrate Bangla New Year with music, food, and cultural performances.",
  },
];

export const newsItems: NewsItem[] = [
  {
    slug: "bcas-annual-general-meeting-2026",
    title: "BCAS Annual General Meeting 2026",
    date: "2026-02-10",
    summary:
      "Notice of the upcoming Annual General Meeting for members and community participants.",
  },
];

export const executiveMembers: ExecutiveMember[] = [
  { name: "Example Name", position: "President" },
  { name: "Example Name 2", position: "General Secretary" },
];
