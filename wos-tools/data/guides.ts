// /data/guides.ts

export type GuideResourceType = "youtube" | "article" | "website";

export interface GuideResource {
  type: GuideResourceType;
  title: string;
  url: string;
  description?: string;
  /** If true, resource gets special treatment/rendering (e.g. featured first) */
  priority?: boolean;
}

export interface Guide {
  title: string;
  resources: GuideResource[];
  tags?: string[];
}

// ================================
// DATA: Guides & Resources List
// ================================
export const guides: Guide[] = [
  {
    title: "Whiteout Survival — Official & General Resources",
    resources: [
      {
        type: "website",
        title: "Whiteout Survival Official Site",
        url: "https://www.centurygames.com/games/whiteout-survival/"
      },
      {
        type: "website",
        title: "Whiteout Survival Wiki",
        url: "https://www.whiteoutsurvival.wiki/"
      },
      {
        type: "website",
        title: "Whiteout Survival — State Timeline (pl)",
        url: "https://whiteoutsurvival.pl/state-timeline/"
      }
    ],
    tags: ["whiteout", "official", "general"]
  },

  {
    title: "Whiteout Survival — Server Age & Timeline Guides",
    resources: [
      {
        type: "website",
        title: "Server Timeline & Age (WOS Wiki)",
        url: "https://www.whiteoutsurvival.wiki/server-timeline-server-age/"
      },
      {
        type: "website",
        title: "Server Age & Timeline Guide (outof.games)",
        url: "https://outof.games/realms/whiteoutsurvival/guides/405-server-age-and-timeline-in-whiteout-survival/"
      }
    ],
    tags: ["whiteout", "timeline", "servers"]
  },

  {
    title: "Whiteout Survival — Bear Hunt Guides",
    resources: [
      {
        type: "website",
        title: "Everything You Need to Know about Bear Hunt (outof.games)",
        url: "https://outof.games/realms/whiteoutsurvival/guides/397-everything-you-need-to-know-about-bear-hunt-in-whiteout-survival/#how-to-maximize-bear-damage"
      },
      {
        type: "article",
        title: "Bear Hunt Guide — Max Your Damage",
        url: "https://onechilledgamer.com/whiteout-survival-bear-hunt-guide-max-your-damage/"
      }
    ],
    tags: ["whiteout", "bear-hunt", "combat"]
  },

  {
    title: "Whiteout Survival — Heroes / F2P & Strategy Guides",
    resources: [
      {
        type: "article",
        title: "Best Heroes for F2P Players (WOS)",
        url: "https://onechilledgamer.com/best-whiteout-survival-heroes-for-f2p-players/"
      },
      {
        type: "article",
        title: "Whiteout Survival Hero Guide",
        url: "https://onechilledgamer.com/whiteout-survival-hero-guide/"
      },
      {
        type: "article",
        title: "Arena Guide — Best Heroes and Strategy",
        url: "https://onechilledgamer.com/whiteout-survival-arena-guide-best-heroes-and-strategy-to-win/"
      }
    ],
    tags: ["whiteout", "heroes", "arena", "strategy"]
  },

  {
    title: "Whiteout Survival — Events / Misc Guides",
    resources: [
      {
        type: "article",
        title: "Hall of Chief Event Guide",
        url: "https://www.whiteoutsurvival.wiki/events/hall-of-chief/"
      },
      {
        type: "article",
        title: "Crazy Joe Guide",
        url: "https://onechilledgamer.com/whiteout-survival-crazy-joe-guide/"
      },
      {
        type: "article",
        title: "Frostfire Mine Guide & Winning Strategies",
        url: "https://onechilledgamer.com/whiteout-survival-frostfire-mine-guide-and-winning-strategies/"
      },
      {
        type: "article",
        title: "Brothers in Arms Guide",
        url: "https://onechilledgamer.com/whiteout-survival-brothers-in-arms-guide/"
      }
    ],
    tags: ["whiteout", "events", "misc"]
  },

  {
    title: "Whiteout Survival — Pet Guide",
    resources: [
      {
        type: "article",
        title: "Pet Guide (theriagames)",
        url: "https://theriagames.com/guide/whiteout-survival-pet-guide/"
      },
      {
        type: "article",
        title: "Pet Guide (godlikebots)",
        url: "https://godlikebots.com/whiteout-survival-pet-guide/"
      }
    ],
    tags: ["whiteout", "pets"]
  },

    {
        title: "Whiteout Survival — Video Tutorials",
        resources: [
            {
                type: "youtube",
                title: "Whiteout Survival: How to Set Up a Farm Account",
                url: "https://www.youtube.com/watch?v=KVCTXAE0fE4&t=8s",
                priority: true
            },
            {
                type: "youtube",
                title: "Day 1 Guide [new player tips and tricks] Whiteout Survival",
                url: "https://www.youtube.com/watch?v=QtbVaf0SjQ0"
            },
            {
                type: "youtube",
                title: "Expertize In FrostFire Mine | The Biginner's Book | Whiteout Survival",
                url: "https://www.youtube.com/watch?v=8K0rCTtskQ0"
            },
            {
                type: "youtube",
                title: "Whiteout Survival ARENA Heros Ranked From BEST to WORST",
                url: "https://www.youtube.com/watch?v=6mesGdsZENs"
            },
            {
                type: "youtube",
                title: "Whiteout Survival SvS preparation guide",
                url: "https://www.youtube.com/watch?v=LLG5jI70yPo"
            }
        ],
        tags: ["whiteout", "video", "tutorials"]
    }
];
