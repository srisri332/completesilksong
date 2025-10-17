export type ChecklistItem = {
  id: string;
  label: string;
  percent: number;
  link?: string;
};

export type ChecklistCategory = {
  id: string;
  title: string;
  items: ChecklistItem[];
  link?: string;
};

export type Boss = {
  name: string;
  link?: string;
};

export type MemoryLocket = {
  id: string;
  label: string;
  percent?: number;
  link?: string;
};

// Hollow Knight: Silksong checklist data
// Source inspiration: `https://hollowknightchecklist.com/` (Hollow Knight). This is a fan checklist.
// Percentages are provided by the user request and may not sum to exactly 100.

export const categories: ChecklistCategory[] = [
  {
    id: "tools",
    title: "TOOLS",
    items: [
      {
        id: "ascendants-grip",
        label: "Ascendant's Grip",
        percent: 1,
        link: "https://hollowknight.wiki/w/Ascendant%27s_Grip",
      },
      {
        id: "barbed-bracelet",
        label: "Barbed Bracelet",
        percent: 1,
        link: "https://hollowknight.wiki/w/Barbed_Bracelet",
      },
      {
        id: "claw-mirror",
        label: "Claw Mirror / Claw Mirrors",
        percent: 1,
        link: "https://hollowknight.wiki/w/Claw_Mirror",
      },
      {
        id: "cogfly",
        label: "Cogfly",
        percent: 1,
        link: "https://hollowknight.wiki/w/Cogfly",
      },
      {
        id: "cogwork-wheel",
        label: "Cogwork Wheel",
        percent: 1,
        link: "https://hollowknight.wiki/w/Cogwork_Wheel",
      },
      {
        id: "compass",
        label: "Compass",
        percent: 1,
        link: "https://hollowknight.wiki/w/Compass",
      },
      {
        id: "conchcutter",
        label: "Conchcutter",
        percent: 1,
        link: "https://hollowknight.wiki/w/Conchcutter",
      },
      {
        id: "curveclaw",
        label: "Curveclaw / Curvesickle",
        percent: 1,
        link: "https://hollowknight.wiki/w/Curveclaw",
      },
      {
        id: "dead-bugs-purse",
        label: "Dead Bug's Purse / Shell Satchel",
        percent: 1,
        link: "https://hollowknight.wiki/w/Dead_Bug%27s_Purse",
      },
      {
        id: "delvers-drill",
        label: "Delver's Drill",
        percent: 1,
        link: "https://hollowknight.wiki/w/Delver%27s_Drill",
      },
      {
        id: "druids-eye",
        label: "Druid's Eye / Druid's Eyes",
        percent: 1,
        link: "https://hollowknight.wiki/w/Druid%27s_Eye",
      },
      {
        id: "egg-of-flealia",
        label: "Egg of Flealia",
        percent: 1,
        link: "https://hollowknight.wiki/w/Egg_of_Flealia",
      },
      {
        id: "flea-brew",
        label: "Flea Brew",
        percent: 1,
        link: "https://hollowknight.wiki/w/Flea_Brew",
      },
      {
        id: "flintslate",
        label: "Flintslate",
        percent: 1,
        link: "https://hollowknight.wiki/w/Flintslate",
      },
      {
        id: "fractured-mask",
        label: "Fractured Mask",
        percent: 1,
        link: "https://hollowknight.wiki/w/Fractured_Mask",
      },
      {
        id: "injector-band",
        label: "Injector Band",
        percent: 1,
        link: "https://hollowknight.wiki/w/Injector_Band",
      },
      {
        id: "longclaw",
        label: "Longclaw",
        percent: 1,
        link: "https://hollowknight.wiki/w/Longclaw",
      },
      {
        id: "longpin",
        label: "Longpin",
        percent: 1,
        link: "https://hollowknight.wiki/w/Longpin",
      },
      {
        id: "magma-bell",
        label: "Magma Bell",
        percent: 1,
        link: "https://hollowknight.wiki/w/Magma_Bell",
      },
      {
        id: "magnetite-brooch",
        label: "Magnetite Brooch",
        percent: 1,
        link: "https://hollowknight.wiki/w/Magnetite_Brooch",
      },
      {
        id: "magnetite-dice",
        label: "Magnetite Dice",
        percent: 1,
        link: "https://hollowknight.wiki/w/Magnetite_Dice",
      },
      {
        id: "memory-crystal",
        label: "Memory Crystal",
        percent: 1,
        link: "https://hollowknight.wiki/w/Memory_Crystal",
      },
      {
        id: "multibinder",
        label: "Multibinder",
        percent: 1,
        link: "https://hollowknight.wiki/w/Multibinder",
      },
      {
        id: "pimpillo",
        label: "Pimpillo",
        percent: 1,
        link: "https://hollowknight.wiki/w/Pimpillo",
      },
      {
        id: "pin-badge",
        label: "Pin Badge (Act 3)",
        percent: 1,
        link: "https://hollowknight.wiki/w/Pin_Badge",
      },
      {
        id: "plasmium-phial",
        label: "Plasmium Phial",
        percent: 1,
        link: "https://hollowknight.wiki/w/Plasmium_Phial",
      },
      {
        id: "pollip-pouch",
        label: "Pollip Pouch",
        percent: 1,
        link: "https://hollowknight.wiki/w/Pollip_Pouch",
      },
      {
        id: "quick-sling",
        label: "Quick Sling",
        percent: 1,
        link: "https://hollowknight.wiki/w/Quick_Sling",
      },
      {
        id: "reserve-bind",
        label: "Reserve Bind",
        percent: 1,
        link: "https://hollowknight.wiki/w/Reserve_Bind",
      },
      {
        id: "rosary-cannon",
        label: "Rosary Cannon",
        percent: 1,
        link: "https://hollowknight.wiki/w/Rosary_Cannon",
      },
      {
        id: "sawtooth-circlet",
        label: "Sawtooth Circlet",
        percent: 1,
        link: "https://hollowknight.wiki/w/Sawtooth_Circlet",
      },
      {
        id: "scuttlebrace",
        label: "Scuttlebrace",
        percent: 1,
        link: "https://hollowknight.wiki/w/Scuttlebrace",
      },
      {
        id: "shard-pendant",
        label: "Shard Pendant",
        percent: 1,
        link: "https://hollowknight.wiki/w/Shard_Pendant",
      },
      {
        id: "silkshot",
        label: "Silkshot",
        percent: 1,
        link: "https://hollowknight.wiki/w/Silkshot",
      },
      {
        id: "silkspeed-anklets",
        label: "Silkspeed Anklets",
        percent: 1,
        link: "https://hollowknight.wiki/w/Silkspeed_Anklets",
      },
      {
        id: "snitch-pick",
        label: "Snitch Pick",
        percent: 1,
        link: "https://hollowknight.wiki/w/Snitch_Pick",
      },
      {
        id: "spider-strings",
        label: "Spider Strings",
        percent: 1,
        link: "https://hollowknight.wiki/w/Spider_Strings",
      },
      {
        id: "spool-extender",
        label: "Spool Extender",
        percent: 1,
        link: "https://hollowknight.wiki/w/Spool_Extender",
      },
      {
        id: "sting-shard",
        label: "Sting Shard",
        percent: 1,
        link: "https://hollowknight.wiki/w/Sting_Shard",
      },
      {
        id: "straight-pin",
        label: "Straight Pin",
        percent: 1,
        link: "https://hollowknight.wiki/w/Straight_Pin",
      },
      {
        id: "tacks",
        label: "Tacks",
        percent: 1,
        link: "https://hollowknight.wiki/w/Tacks",
      },
      {
        id: "thiefs-mark",
        label: "Thief's Mark",
        percent: 1,
        link: "https://hollowknight.wiki/w/Thief%27s_Mark",
      },
      {
        id: "threefold-pin",
        label: "Threefold Pin",
        percent: 1,
        link: "https://hollowknight.wiki/w/Threefold_Pin",
      },
      {
        id: "throwing-ring",
        label: "Throwing Ring",
        percent: 1,
        link: "https://hollowknight.wiki/w/Throwing_Ring",
      },
      {
        id: "volt-filament",
        label: "Volt Filament",
        percent: 1,
        link: "https://hollowknight.wiki/w/Volt_Filament",
      },
      {
        id: "voltvessels",
        label: "Voltvessels",
        percent: 1,
        link: "https://hollowknight.wiki/w/Voltvessels",
      },
      {
        id: "warding-bell",
        label: "Warding Bell",
        percent: 1,
        link: "https://hollowknight.wiki/w/Warding_Bell",
      },
      {
        id: "weavelight",
        label: "Weavelight",
        percent: 1,
        link: "https://hollowknight.wiki/w/Weavelight",
      },
      {
        id: "weighted-belt",
        label: "Weighted Belt",
        percent: 1,
        link: "https://hollowknight.wiki/w/Weighted_Belt",
      },
      {
        id: "wispfire-lantern",
        label: "Wispfire Lantern",
        percent: 1,
        link: "https://hollowknight.wiki/w/Wispfire_Lantern",
      },
      {
        id: "wreath-of-purity",
        label: "Wreath of Purity",
        percent: 1,
        link: "https://hollowknight.wiki/w/Wreath_of_Purity",
      },
    ],
  },
  {
    id: "silk-skills",
    title: "SILK SKILLS",
    items: [
      {
        id: "cross-stitch",
        label: "Cross Stitch",
        percent: 1,
        link: "https://hollowknight.wiki/w/Cross_Stitch",
      },
      {
        id: "pale-nails",
        label: "Pale Nails (Act 3)",
        percent: 1,
        link: "https://hollowknight.wiki/w/Pale_Nails",
      },
      {
        id: "rune-rage",
        label: "Rune Rage",
        percent: 1,
        link: "https://hollowknight.wiki/w/Rune_Rage",
      },
      {
        id: "sharpdart",
        label: "Sharpdart",
        percent: 1,
        link: "https://hollowknight.wiki/w/Sharpdart",
      },
      {
        id: "silkspear",
        label: "Silkspear",
        percent: 1,
        link: "https://hollowknight.wiki/w/Silkspear",
      },
      {
        id: "thread-storm",
        label: "Thread Storm",
        percent: 1,
        link: "https://hollowknight.wiki/w/Thread_Storm",
      },
    ],
  },
  {
    id: "abilities",
    title: "ABILITIES",
    items: [
      {
        id: "clawline",
        label: "Clawline",
        percent: 1,
        link: "https://hollowknight.wiki/w/Clawline",
      },
      {
        id: "cling-grip",
        label: "Cling Grip",
        percent: 1,
        link: "https://hollowknight.wiki/w/Cling_Grip",
      },
      {
        id: "needle-strike",
        label: "Needle Strike",
        percent: 1,
        link: "https://hollowknight.wiki/w/Needle_Strike",
      },
      {
        id: "needolin",
        label: "Needolin",
        percent: 1,
        link: "https://hollowknight.wiki/w/Needolin",
      },
      {
        id: "silk-soar",
        label: "Silk Soar (Act 3)",
        percent: 1,
        link: "https://hollowknight.wiki/w/Silk_Soar",
      },
      {
        id: "swift-step",
        label: "Swift Step",
        percent: 1,
        link: "https://hollowknight.wiki/w/Swift_Step",
      },
    ],
  },
  {
    id: "silk-spools",
    title: "SILK SPOOLS",
    items: [
      {
        id: "fragment1",
        label: "#1 Fragment (Mosshome)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-1-mdash-mosshome",
      },
      {
        id: "fragment2",
        label: "#2 Fragment (Deepdocks)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-2-mdash-above-the-magma-in-the-deep-docks",
      },
      {
        id: "fragment3",
        label: "#3 Fragment (Greymoor)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-3-mdash-greymoor",
      },
      {
        id: "fragment4",
        label: "#4 Fragment (Bellhart)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-4-mdash-bellhart",
      },
      {
        id: "fragment5",
        label: "#5 Fragment (Weavenest Atla)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-5-mdash-weavenest-atla",
      },
      {
        id: "fragment6",
        label: "#6 Fragment (Blasted Steps Fleas)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-6-mdash-flea-caravan-in-blasted-steps",
      },
      {
        id: "fragment7",
        label: "#7 Fragment (Grand Gate)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-7-mdash-grand-gate",
      },
      {
        id: "fragment8",
        label: "#8 Fragment (Underworks)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-8-mdash-below-the-ventrica-in-the-underworks",
      },
      {
        id: "fragment9",
        label: "#9 Fragment (Underworks)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-9-mdash-below-the-spikes-in-the-underworks",
      },
      {
        id: "fragment10",
        label: "#10 Fragment (Cogwork Core)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-10-mdash-cogwork-core",
      },
      {
        id: "fragment11",
        label: "#11 Fragment (Whiteward)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-11-mdash-under-the-elevator-in-whiteward",
      },
      {
        id: "fragment12",
        label: "#12 Fragment (Balm of Wounded)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-12-mdash-39-balm-for-the-wounded-39-quest-in-whiteward",
      },
      {
        id: "fragment13",
        label: "#13 Fragment (High Halls)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-13-mdash-high-halls",
      },
      {
        id: "fragment14",
        label: "#14 Fragment (Mount Fay)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-14-mdash-mount-fay",
      },
      {
        id: "fragment15",
        label: "#15 Fragment (Songclave)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-15-mdash-songclave",
      },
      {
        id: "fragment16",
        label: "#16 Fragment (Deep Docks)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-16-mdash-hidden-cave-in-the-deep-docks",
      },
      {
        id: "fragment17",
        label: "#17 Fragment (Blasted Steps Grindle)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-17-mdash-grindle-in-blasted-steps",
      },
      {
        id: "fragment18",
        label: "#18 Fragment (Memorium)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#spool-fragment-18-mdash-memorium",
      },
    ],
  },

  {
    id: "character-upgrades",
    title: "KIT, POUCH & NEEDLE",
    items: [
      // Crafting & Pouch Upgrades (8%)
      {
        id: "craft-1",
        label: "Crafting Kit #1",
        percent: 1,
        link: "https://gamerant.com/silksong-crafting-kit-use-location-what-do-should-buy-hollow-knight/#:~:text=they%20are%20obtained%3A-,Crafting%20Kit%20%231,-Players%20can%20purchase",
      },
      {
        id: "craft-2",
        label: "Crafting Kit #2",
        percent: 1,
        link: "https://gamerant.com/silksong-crafting-kit-use-location-what-do-should-buy-hollow-knight/#:~:text=Field%20area.-,Crafting%20Kit%20%232,-Grindle%20has%20a",
      },
      {
        id: "craft-3",
        label: "Crafting Kit #3",
        percent: 1,
        link: "https://gamerant.com/silksong-crafting-kit-use-location-what-do-should-buy-hollow-knight/#:~:text=Grand%20Gate.-,Crafting%20Kit%20%233,-Players%20can%20buy",
      },
      {
        id: "craft-4",
        label: "Crafting Kit #4",
        percent: 1,
        link: "https://gamerant.com/silksong-crafting-kit-use-location-what-do-should-buy-hollow-knight/#:~:text=the%20preceding%20map.-,Crafting%20Kit%20%234,-Players%20can%20earn",
      },
      {
        id: "pouch-1",
        label: "Tool Pouch #1",
        percent: 1,
        link: "https://game8.co/games/Hollow-Knight-Silksong/archives/549961#:~:text=Purchase%20from%20Mort%20in%20Far%20Fields",
      },
      {
        id: "pouch-2",
        label: "Tool Pouch #2",
        percent: 1,
        link: "https://game8.co/games/Hollow-Knight-Silksong/archives/549961#:~:text=Get%20from%20Loddie%27s%20Challenge%20in%20The%20Marrow",
      },
      {
        id: "pouch-3",
        label: "Tool Pouch #3",
        percent: 1,
        link: "https://game8.co/games/Hollow-Knight-Silksong/archives/549961#:~:text=Complete%20Bugs%20of%20Pharloom%20Wish",
      },
      {
        id: "pouch-4",
        label: "Tool Pouch #4",
        percent: 1,
        link: "https://game8.co/games/Hollow-Knight-Silksong/archives/549961#:~:text=of%20Pharloom%20Walkthrough-,Find%2020%20Lost%20Fleas,-Overworld%20View",
      },

      // Needle Upgrades (4%)
      {
        id: "needle-1",
        label: "Needle → Sharpened Needle",
        percent: 1,
        link: "https://www.gamespot.com/gallery/hollow-knight-silksong-pale-oil-weapon-upgrade-guide/2900-7030/#2:~:text=Needle%20upgrade%20%231%3A%20Bellhart",
      },
      {
        id: "needle-2",
        label: "Sharpened → Shining Needle",
        percent: 1,
        link: "https://www.gamespot.com/gallery/hollow-knight-silksong-pale-oil-weapon-upgrade-guide/2900-7030/#4:~:text=Needle%20upgrade%20%232%3A%20Whispering%20Vaults%20%2D%20Crate%20Puzzle",
      },
      {
        id: "needle-3",
        label: "Shining → Hivesteel Needle",
        percent: 1,
        link: "https://www.gamespot.com/gallery/hollow-knight-silksong-pale-oil-weapon-upgrade-guide/2900-7030/#4:~:text=Needle%20upgrade%20%233%3A%20Choral%20Chamber%20%2D%20Great%20Taste%20of%20Pharloom",
      },
      {
        id: "needle-4",
        label: "Hivesteel → Pale Steel Needle (Act 3)",
        percent: 1,
        link: "https://www.gamespot.com/gallery/hollow-knight-silksong-pale-oil-weapon-upgrade-guide/2900-7030/#5:~:text=Needle%20upgrade%20%234%3A%20Fleatopia",
      },
    ],
  },
  {
    id: "mask-upgrades",
    title: "MASKS",
    items: [
      {
        id: "#1",
        label: "#1 Shard (Bone Bottom)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-1-mdash-bone-bottom",
      },
      {
        id: "#2",
        label: "#2 Shard (Wormways)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-2-mdash-wormways",
      },
      {
        id: "#3",
        label: "#3 Shard (Far Fields)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-3-mdash-far-fields",
      },
      {
        id: "#4",
        label: "#4 Shard (Shellwood)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-4-mdash-shellwood",
      },
      {
        id: "#5",
        label: "#5 Shard (Deep Docks)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-5-mdash-deep-docks",
      },
      {
        id: "#6",
        label: "#6 Shard (Weavenest Alta)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-6-mdash-weavenest-alta",
      },
      {
        id: "#7",
        label: "#7 Shard (Cogwork Core)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-7-mdash-cogwork-core",
      },
      {
        id: "#8",
        label: "#8 Shard (Firstshrine Songclave)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-8-mdash-first-shrine-in-songclave",
      },
      {
        id: "#9",
        label: "#9 Shard (Savage beastfly-2)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-9-mdash-savage-beastfly-grand-hunt",
      },
      {
        id: "#10",
        label: "#10 Shard (Whispering Vaults)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-10-mdash-whispering-vaults",
      },
      {
        id: "#11",
        label: "#11 Shard (Far Fields)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-11-mdash-far-fields",
      },
      {
        id: "#12",
        label: "#12 Shard (Mount Fay)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-12-mdash-mount-fay",
      },
      {
        id: "#13",
        label: "#13 Shard (Blasted Steps)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-13-mdash-blasted-steps",
      },
      {
        id: "#14",
        label: "#14 Shard (Wisp Thicket)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-14-mdash-wisp-thicket",
      },
      {
        id: "#15",
        label: "#15 Shard (Bilewater)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-15-mdash-bilewater",
      },
      {
        id: "#16",
        label: "#16 Shard (The Slab)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-16-mdash-the-slab",
      },
      {
        id: "#17",
        label: "#17 Shard (Fastest In Pharloom - Act 3)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-17-mdash-39-fastest-in-pharloom-39-wish-in-far-fields-act-3",
      },
      {
        id: "#18",
        label: "#18 Shard (Dark Hearts - Act 3)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-18-mdash-39-dark-hearts-39-wish-in-bellhart-act-3",
      },
      {
        id: "#19",
        label: "#19 Shard (Mount Fay - Act 3)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-19-mdash-mount-fay-act-3",
      },
      {
        id: "#20",
        label: "#20 Shard (The Hidden Hunter - Act 3)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#mask-shard-20-mdash-39-the-hidden-hunter-39-wish-in-bellhart-act-3",
      },
    ],
  },
  {
    id: "silk-hearts",
    title: "SILK HEARTS",
    items: [
      {
        id: "silk-heart-1",
        label: "Silk Heart 1 (Bell Beast)",
        percent: 1,
        link: "https://hollowknight.wiki/w/Bell_Beast",
      },
      {
        id: "silk-heart-2",
        label: "Silk Heart 2 (The Unravelled)",
        percent: 1,
        link: "https://hollowknight.wiki/w/The_Unravelled",
      },
      {
        id: "silk-heart-3",
        label: "Silk Heart 3 (Lace at The Cradle)",
        percent: 1,
        link: "https://hollowknight.wiki/w/Lace",
      },
    ],
  },
  {
    id: "crests",
    title: "CRESTS",
    items: [
      {
        id: "architect-crest",
        label: "Architect Crest",
        percent: 1,
        link: "https://hollowknight.wiki/w/Architect_Crest",
      },
      {
        id: "beast-crest",
        label: "Beast Crest",
        percent: 1,
        link: "https://hollowknight.wiki/w/Beast_Crest",
      },
      {
        id: "reaper-crest",
        label: "Reaper Crest",
        percent: 1,
        link: "https://hollowknight.wiki/w/Reaper_Crest",
      },
      {
        id: "shaman-crest",
        label: "Shaman Crest (Act 3)",
        percent: 1,
        link: "https://hollowknight.wiki/w/Shaman_Crest",
      },
      {
        id: "wanderer-crest",
        label: "Wanderer Crest",
        percent: 1,
        link: "https://hollowknight.wiki/w/Wanderer_Crest",
      },
      {
        id: "witch-crest",
        label: "Witch Crest",
        percent: 1,
        link: "https://hollowknight.wiki/w/Witch_Crest",
      },
    ],
  },

  {
    id: "misc",
    title: "MISCELLANEOUS",
    items: [
      {
        id: "bind-eva",
        label: "Bind Eva (12 Lockets and All Crests)",
        percent: 1,
        link: "https://hollowknight.wiki/w/Eva",
      },
      {
        id: "obtain-everbloom",
        label: "Obtain Everbloom (Act 3)",
        percent: 1,
        link: "https://hollowknight.wiki/w/Everbloom",
      },
    ],
  },
];

export function getTotalPercent(): number {
  return categories
    .flatMap((c) => c.items)
    .reduce((sum, item) => sum + item.percent, 0);
}

export const bosses: Boss[] = [
  { name: "Moss Mother", link: "https://hollowknight.wiki/w/Moss_Mother" },
  { name: "Lace", link: "https://hollowknight.wiki/w/Lace" },
  { name: "Bell Beast", link: "https://hollowknight.wiki/w/Bell_Beast" },
  { name: "Fourth Chorus", link: "https://hollowknight.wiki/w/Fourth_Chorus" },
  {
    name: "Savage Beastfly",
    link: "https://hollowknight.wiki/w/Savage_Beastfly",
  },
  { name: "Skull Tyrant", link: "https://hollowknight.wiki/w/Skull_Tyrant" },
  {
    name: "Sister Splinter",
    link: "https://hollowknight.wiki/w/Sister_Splinter",
  },
  { name: "Widow", link: "https://hollowknight.wiki/w/Widow" },
  { name: "Phantom", link: "https://hollowknight.wiki/w/Phantom" },
  { name: "Moorwing", link: "https://hollowknight.wiki/w/Moorwing" },
  {
    name: "Great Conchflies",
    link: "https://hollowknight.wiki/w/Great_Conchflies",
  },
  { name: "Last Judge", link: "https://hollowknight.wiki/w/Last_Judge" },
  {
    name: "Cogwork Dancers",
    link: "https://hollowknight.wiki/w/Cogwork_Dancers",
  },
  { name: "Trobbio", link: "https://hollowknight.wiki/w/Trobbio" },
  {
    name: "Signis and Gron",
    link: "https://hollowknight.wiki/w/Forebrothers_Signis_%26_Gron",
  },
  {
    name: "Groal the Great",
    link: "https://hollowknight.wiki/w/Groal_the_Great",
  },
  { name: "The Unraveled", link: "https://hollowknight.wiki/w/The_Unravelled" },
  {
    name: "Disgraced Chef Lugoli",
    link: "https://hollowknight.wiki/w/Disgraced_Chef_Lugoli",
  },
  { name: "First Sinner", link: "https://hollowknight.wiki/w/First_Sinner" },
  { name: "Craggler", link: "https://hollowknight.wiki/w/Craggler" },
  {
    name: "Father of the Flame",
    link: "https://hollowknight.wiki/w/Father_of_the_Flame",
  },
  { name: "Karmelita", link: "https://hollowknight.wiki/w/Carmelita" },
  { name: "Voltvyrm", link: "https://hollowknight.wiki/w/Voltvyrm" },
  {
    name: "Raging Conchfly",
    link: "https://hollowknight.wiki/w/Raging_Conchfly",
  },
  {
    name: "Second Sentinel",
    link: "https://hollowknight.wiki/w/Second_Sentinel",
  },
  { name: "Broodmother", link: "https://hollowknight.wiki/w/Broodmother" },
  { name: "Bell Eater", link: "https://hollowknight.wiki/w/Bell_Eater" },
  {
    name: "Plasmified Zango",
    link: "https://hollowknight.wiki/w/Plasmified_Zango",
  },
  {
    name: "Tormented Trobbio",
    link: "https://hollowknight.wiki/w/Tormented_Trobbio",
  },
  {
    name: "Crust King Khann",
    link: "https://hollowknight.wiki/w/Crust_King_Khann",
  },
  {
    name: "Shrine Guardian Seth",
    link: "https://hollowknight.wiki/w/Shrine_Guardian_Seth",
  },
  { name: "Nyleth", link: "https://hollowknight.wiki/w/Nyleth" },
  { name: "Palestag", link: "https://hollowknight.wiki/w/Palestag" },
  {
    name: "Clover Dancers",
    link: "https://hollowknight.wiki/w/Clover_Dancers",
  },
  { name: "Lost Garmond", link: "https://hollowknight.wiki/w/Lost_Garmond" },
  { name: "Pinstress", link: "https://hollowknight.wiki/w/Pinstress" },
  {
    name: "Gurr the Outcast",
    link: "https://hollowknight.wiki/w/Gurr_the_Outcast",
  },
  { name: "Lost Lace", link: "https://hollowknight.wiki/w/Lost_Lace" },
  {
    name: "Watcher at the Edge",
    link: "https://hollowknight.wiki/w/Watcher_at_the_Edge",
  },
  { name: "Crawfather", link: "https://hollowknight.wiki/w/Crawfather" },
  {
    name: "Summoned Saviour",
    link: "https://hollowknight.wiki/w/Summoned_Saviour",
  },
  { name: "Shakra", link: "https://hollowknight.wiki/w/Shakra" },
  {
    name: "Garmond and Zaza",
    link: "https://hollowknight.wiki/w/Garmond_and_Zaza",
  },
  {
    name: "Grand Mother Silk",
    link: "https://hollowknight.wiki/w/Grand_Mother_Silk",
  },
];

export const MemoryLockets: MemoryLocket[] = [
  {
    id: "memory-locket-1",
    label: "#1 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#bone-bottom-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-2",
    label: "#2 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#the-marrow-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-3",
    label: "#3 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#wormways-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-4",
    label: "#4 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#deep-docks-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-5",
    label: "#5 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#far-fields-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-6",
    label: "#6 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#far-fields-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-7",
    label: "#7 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#hunter-39-s-march-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-8",
    label: "#8 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#greymoor-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-9",
    label: "#9 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#greymoor-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-10",
    label: "#10 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#bellhart-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-11",
    label: "#11 Memory Locket (Act 3)",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#bellhart-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-12",
    label: "#12 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#blasted-steps-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-13",
    label: "#13 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#sands-of-karak-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-14",
    label: "#14 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#the-slab-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-15",
    label: "#15 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#underworks-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-16",
    label: "#16 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#choral-chambers-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-17",
    label: "#17 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#whispering-vaults-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-18",
    label: "#18 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#memorium-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-19",
    label: "#19 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#bilewater-memory-lockets-in-silksong",
  },
  {
    id: "memory-locket-20",
    label: "#20 Memory Locket",
    percent: 0,
    link: "https://gamerant.com/silksong-memory-locket-locations-where-all-hollow-knight/#bilewater-memory-lockets-in-silksong",
  },
];
