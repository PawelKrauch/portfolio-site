export type ProjectGroup = "Brand Films" | "Social & Events";
export type Orientation = "horizontal" | "vertical";

export type SecondaryVideo = {
  label: string;
  videoUrl?: string;
  placeholder: boolean;
};

export type Stat = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  group: ProjectGroup;
  orientation: Orientation;
  year: string;
  description: string;
  videoUrl?: string;
  // Optional label shown above the hero video — mainly useful when the hero
  // is one entry in a numbered series (e.g. "Episode 4") alongside `episodes`.
  videoLabel?: string;
  placeholder: boolean;
  secondaryVideos?: SecondaryVideo[];
  // Multi-episode series (e.g. a numbered vertical series) — rendered as a
  // list of full clips below the hero video, in array order.
  episodes?: SecondaryVideo[];
  stats?: Stat[];
  // Shown as full-bleed slides in the homepage Hero slideshow, in array order.
  featured?: boolean;
};

// All entries are still `placeholder: true` since no web-ready video files
// exist yet — swap in `videoUrl` (from the CDN/blob storage, once set up)
// and flip to `placeholder: false` per piece as footage becomes ready.
//
// `orientation` drives the card's aspect ratio independent of `group` —
// group is about positioning/tier (Brand Films vs. Social & Events), while
// orientation is about the actual footage shape (most social/event content
// here is vertical, even when it sits in the Brand Films tier, e.g. SO Well
// Gym).
export const projects: Project[] = [
  {
    slug: "purely-athletics-adidas-documentary",
    title: "Purely Athletics × Adidas — Documentary",
    client: "Purely Athletics / Adidas",
    category: "Documentary",
    group: "Brand Films",
    orientation: "horizontal",
    year: "2026",
    description:
      "A 12-minute brand documentary for Purely Athletics and Adidas. Add the brief, your role, and how the shoot came together.",
    placeholder: true,
    featured: true,
    secondaryVideos: [
      {
        label: "Instagram Trailer",
        placeholder: true,
      },
    ],
  },
  {
    slug: "purely-athletics-brand-launch-intro",
    title: "Purely Athletics — Brand Launch Intro",
    client: "Purely Athletics",
    category: "Brand Launch",
    group: "Brand Films",
    orientation: "vertical",
    year: "2026",
    description:
      "An intro film for the Purely Athletics brand launch. Add the brief, your role, and how it came together.",
    videoUrl:
      "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/purely-athletics-brand-launch-intro.mp4",
    placeholder: false,
  },
  {
    slug: "canyon-spec-ad",
    title: "Canyon — Spec Ad",
    client: "Canyon (spec / self-initiated)",
    category: "Spec Ad",
    group: "Brand Films",
    orientation: "horizontal",
    year: "2026",
    description:
      "Self-initiated spec ad for Canyon — not a commissioned client project. Add details about the concept and execution.",
    placeholder: true,
  },
  {
    slug: "so-well-gym-series",
    title: "SO Well Gym — Results & Stats Series",
    client: "SO Well Gym",
    category: "Vertical Series",
    group: "Brand Films",
    orientation: "vertical",
    year: "2026",
    description:
      "A 4-episode vertical series covering member results and stats — grew organically to 80,000+ views on a 6,000-follower account. Add details about the format and your role.",
    videoUrl:
      "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/so-well-e4.mp4",
    videoLabel: "Episode 4",
    placeholder: false,
    featured: true,
    stats: [
      { value: "80,000+", label: "Organic views" },
      { value: "6,000", label: "Account followers" },
      { value: "4", label: "Episodes" },
    ],
    episodes: [
      {
        label: "Episode 3",
        videoUrl:
          "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/so-well-e3.mp4",
        placeholder: false,
      },
      {
        label: "Episode 2",
        videoUrl:
          "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/so-well-e2.mp4",
        placeholder: false,
      },
      {
        label: "Episode 1",
        videoUrl:
          "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/so-well-e1.mp4",
        placeholder: false,
      },
    ],
    secondaryVideos: [
      {
        label: "Behind the Scenes — shot & edited solo",
        placeholder: true,
      },
    ],
  },
  {
    slug: "knox-studio-launch",
    title: "KNOX Studio — Launch Campaign",
    client: "KNOX Studio",
    category: "Launch Campaign",
    group: "Social & Events",
    orientation: "vertical",
    year: "2026",
    description:
      "A 6-reel Instagram launch campaign for KNOX Studio — the first Lululemon-powered studio in Poland. Add details about the rollout and results.",
    videoUrl:
      "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/knox-lululemon-intro.mp4",
    placeholder: false,
    featured: true,
    secondaryVideos: [
      {
        label: "KNOX Method",
        videoUrl:
          "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/knox-method.mp4",
        placeholder: false,
      },
      {
        label: "KNOX BTM",
        videoUrl:
          "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/knox-btm.mp4",
        placeholder: false,
      },
    ],
  },
  {
    slug: "lululemon-event-reel",
    title: "Lululemon — Collection Event",
    client: "Lululemon",
    category: "Event Coverage",
    group: "Social & Events",
    orientation: "vertical",
    year: "2026",
    description:
      "Live event coverage, unscripted, shot solo — a talking-head reel with Lululemon's collection rep. Add specifics about the event and turnaround.",
    videoUrl:
      "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/lululemon-reel-1.mp4",
    placeholder: false,
  },
  {
    slug: "merrell-influencer-reel",
    title: "Merrell — Influencer Content",
    client: "Merrell",
    category: "Influencer Content",
    group: "Social & Events",
    orientation: "vertical",
    year: "2026",
    description: "Add details about the brief and the influencer collaboration.",
    videoUrl:
      "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/merrell-influencer-reel.mp4",
    placeholder: false,
  },
  {
    slug: "carpatree-influencer-reel",
    title: "Carpatree — Influencer Content",
    client: "Carpatree",
    category: "Influencer Content",
    group: "Social & Events",
    orientation: "vertical",
    year: "2026",
    description: "Add details about the brief and the influencer collaboration.",
    videoUrl:
      "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/carpatree-influencer-reel.mp4",
    placeholder: false,
  },
  {
    slug: "hyrox-warsaw-reel",
    title: "Hyrox Warsaw — Athlete Reel",
    client: "Add athlete/influencer name",
    category: "Sports Content",
    group: "Social & Events",
    orientation: "vertical",
    year: "2026",
    description:
      "Hyrox content for a Russian-speaking sports influencer based in Warsaw. Add details about the shoot.",
    placeholder: true,
  },
  {
    slug: "porsche-change-studio-reel",
    title: "Porsche × Change Studio",
    client: "Porsche / Change Studio",
    category: "Brand Collaboration",
    group: "Social & Events",
    orientation: "vertical",
    year: "2026",
    description:
      "An Instagram reel collaboration between Porsche and Change Studio. Add details about the brief and your role.",
    videoUrl:
      "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/porsche-change-studio.mp4",
    placeholder: false,
    featured: true,
  },
];
