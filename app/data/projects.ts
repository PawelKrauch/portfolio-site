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
      "A 12-minute brand documentary for Purely Athletics and Adidas — a long-form piece built to carry the brand's story with the pacing and polish of a produced film.",
    videoUrl:
      "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/purely-athletics-adidas-documentary-v1.mov",
    placeholder: false,
    featured: true,
    secondaryVideos: [
      {
        label: "Instagram Trailer",
        placeholder: true,
      },
    ],
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
      "A self-initiated spec ad for Canyon, taken from concept through to final grade — an exercise in a cinematic, product-led idea executed end to end.",
    videoUrl:
      "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/canyon-spec-ad.mp4",
    placeholder: false,
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
      "A short launch film introducing the Purely Athletics brand — a fast, energetic vertical cut made to open the campaign and set its tone.",
    videoUrl:
      "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/purely-athletics-brand-launch-intro.mp4",
    placeholder: false,
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
      "A four-episode vertical series built around real member results and stats. It grew entirely through organic reach — 80,000+ views on an account of roughly 6,000 followers — proof of content that performs without paid spend.",
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
      "A six-reel Instagram launch campaign for KNOX Studio, the first Lululemon-powered studio in Poland — a coordinated rollout of short-form pieces to introduce the space and its method.",
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
      "Live, unscripted event coverage shot solo — a talking-head reel with Lululemon's collection rep, captured and turned around fast on location.",
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
    description:
      "Influencer-led social content for Merrell — a vertical reel pairing the product with an outdoor, active-lifestyle audience.",
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
    description:
      "Influencer-led social content for Polish activewear brand Carpatree — a vertical reel made for fast, native performance on Instagram.",
    videoUrl:
      "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/carpatree-influencer-reel.mp4",
    placeholder: false,
  },
  {
    slug: "hyrox-warsaw-reel",
    title: "Hyrox Warsaw — Athlete Reel",
    client: "Vlad Ovchinnikov",
    category: "Sports Content",
    group: "Social & Events",
    orientation: "vertical",
    year: "2026",
    description:
      "A vertical social reel for Warsaw-based Hyrox athlete Vlad Ovchinnikov, cut to carry the pace and intensity of competitive functional-fitness training.",
    videoUrl:
      "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/hyrox-warsaw-reel.mp4",
    placeholder: false,
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
      "An Instagram reel produced in collaboration with Porsche and Change Studio — a short, high-gloss vertical piece cut for social.",
    videoUrl:
      "https://kbikrdsbxqgu2gwf.public.blob.vercel-storage.com/porsche-change-studio.mp4",
    placeholder: false,
    featured: true,
  },
];
