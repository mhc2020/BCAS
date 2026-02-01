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
  image?: string;
};

export const events = [
  {
    slug: "International Mother Language Day",
    title: "International Mother Language Day",
    date: "February 14th-15th, 2026",
    location: "Saskatoon",
    description:
      "Join us for the International Mother Language Day celebration with traditional performances of different countries and cultural activities.",
    image: "MLD.jpg",
  },
  {
    slug: "Victory Day Celebration",
    title: "Victory Day Celebration",
    date: "December 28, 2025",
    location: "Saskatoon",
    description:
      "Observed victory to celebrate the 54th victory day of Bangladesh",
    image: "event1.jpg",
  },
  {
    slug: "Folkfest",
    title: "Folkfest",
    date: "August 13th-14th, 2025",
    location: "Saskatoon",
    description:
      "Participated in the yearly folkfest festival organized by city of Saskatoon",
    image: "event2.jpg",
  },
];

// export const events: EventItem[] = [
//   {
//     slug: "pohela-boishakh-2026",
//     title: "Pohela Boishakh Celebration 2026",
//     date: "2026-04-14",
//     time: "6:00 PM",
//     location: "Saskatoon (venue TBA)",
//     description:
//       "Join the community to celebrate Bangla New Year with music, food, and cultural performances.",
//   },
// ];

export const newsItems: NewsItem[] = [
  {
    slug: "Observe International Mother Language Day",
    title: "Observe International Mother Language Day",
    date: "2026-02-14",
    summary:
      "We will observe International Mother Language Day on February 14th, 2026",
  },
  {
    slug: "bcas-annual-general-meeting-2025",
    title: "BCAS Annual General Meeting 2025",
    date: "2025-11-30",
    summary:
      "Notice of the upcoming Annual General Meeting for members and community participants.",
  },
  {
    slug: "Consular Service in Saskatoon",
    title: "Consular Service in Saskatoon",
    date: "TBD",
    summary: "Notice of the upcoming consular service in Saskatoon.",
  },
];

export const executiveMembers: ExecutiveMember[] = [
  { position: "President", name: "Arifur Rahman", image: "arifur.jpg" },
  {
    position: "General Secretary",
    name: "Md Mahamudul Hasan Chowdhury",
    image: "roney.jpg",
  },
  {
    position: "Vice President — Finance and Budget",
    name: "Apurba Das",
    image: "apurba.jpg",
  },
  {
    position: "Vice President — Cultural Affairs",
    name: "Sahrima Jannat Oishwee",
    image: "Oishee.jpg",
  },
  {
    position: "Vice President — Social Affairs",
    name: "Joy Chokroborti",
    image: "joy.jpg",
  },

  {
    position: "Secretary — Finance and Budget",
    name: "Md. Ashraful Islam Kawser",
    image: "ashraful.jpg",
  },
  {
    position: "Secretary — Fundraising",
    name: "A Z M Saiful Alam",
    image: "himu.jpg",
  },
  {
    position: "Secretary — Cultural Affairs",
    name: "Ankon Das",
    image: "ankon.jpg",
  },
  {
    position: "Secretary — Sports and Environment",
    name: "Snehamoy Das",
    image: "emon.jpg",
  },
  {
    position: "Secretary — Youth and Children Activities",
    name: "Foizur Razzak",
    image: "razzak.jpg",
  },
  {
    position: "Secretary — Women Affairs",
    name: "Most Rezwana Parveen",
    image: "rizwana.jpg",
  },
  {
    position: "Secretary — Member and Communication",
    name: "Rakibul Islam Chowdhury",
    image: "shimanto.jpg",
  },
];
