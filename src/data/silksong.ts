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
        link: "https://hollowknightsilksong.wiki.fextralife.com/Ascendant%27s+Grip",
      },
      {
        id: "barbed-bracelet",
        label: "Barbed Bracelet",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Barbed+Bracelet",
      },
      {
        id: "claw-mirror",
        label: "Claw Mirror / Claw Mirrors",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Claw+Mirror",
      },
      {
        id: "cogfly",
        label: "Cogfly",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Cogfly",
      },
      {
        id: "cogwork-wheel",
        label: "Cogwork Wheel",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Cogwork+Wheel",
      },
      {
        id: "compass",
        label: "Compass",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Compass",
      },
      {
        id: "conchcutter",
        label: "Conchcutter",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Conchcutter",
      },
      {
        id: "curveclaw",
        label: "Curveclaw / Curvesickle",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Curveclaw",
      },
      {
        id: "dead-bugs-purse",
        label: "Dead Bug's Purse / Shell Satchel",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Dead+Bug%27s+Purse",
      },
      {
        id: "delvers-drill",
        label: "Delver's Drill",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Delver%27s+Drill",
      },
      {
        id: "druids-eye",
        label: "Druid's Eye / Druid's Eyes",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Druid%27s+Eye",
      },
      {
        id: "egg-of-flealia",
        label: "Egg of Flealia",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Egg+of+Flealia",
      },
      {
        id: "flea-brew",
        label: "Flea Brew",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Flea+Brew",
      },
      {
        id: "flintslate",
        label: "Flintslate",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Flintslate",
      },
      {
        id: "fractured-mask",
        label: "Fractured Mask",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Fractured+Mask",
      },
      {
        id: "injector-band",
        label: "Injector Band",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Injector+Band",
      },
      {
        id: "longclaw",
        label: "Longclaw",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Longclaw",
      },
      {
        id: "longpin",
        label: "Longpin",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Longpin",
      },
      {
        id: "magma-bell",
        label: "Magma Bell",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Magma+Bell",
      },
      {
        id: "magnetite-brooch",
        label: "Magnetite Brooch",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Magnetite+Brooch",
      },
      {
        id: "magnetite-dice",
        label: "Magnetite Dice",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Magnetite+Dice",
      },
      {
        id: "memory-crystal",
        label: "Memory Crystal",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Memory+Crystal",
      },
      {
        id: "multibinder",
        label: "Multibinder",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Multibinder",
      },
      {
        id: "pimpillo",
        label: "Pimpillo",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Pimpillo",
      },
      {
        id: "pin-badge",
        label: "Pin Badge",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Pin+Badge",
      },
      {
        id: "plasmium-phial",
        label: "Plasmium Phial",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Plasmium+Phial",
      },
      {
        id: "pollip-pouch",
        label: "Pollip Pouch",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Pollip+Pouch",
      },
      {
        id: "quick-sling",
        label: "Quick Sling",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Quick+Sling",
      },
      {
        id: "reserve-bind",
        label: "Reserve Bind",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Reserve+Bind",
      },
      {
        id: "rosary-cannon",
        label: "Rosary Cannon",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Rosary+Cannon",
      },
      {
        id: "sawtooth-circlet",
        label: "Sawtooth Circlet",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Sawtooth+Circlet",
      },
      {
        id: "scuttlebrace",
        label: "Scuttlebrace",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Scuttlebrace",
      },
      {
        id: "shard-pendant",
        label: "Shard Pendant",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Shard+Pendant",
      },
      {
        id: "silkshot",
        label: "Silkshot",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Silkshot",
      },
      {
        id: "silkspeed-anklets",
        label: "Silkspeed Anklets",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Silkspeed+Anklets",
      },
      {
        id: "snitch-pick",
        label: "Snitch Pick",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Snitch+Pick",
      },
      {
        id: "spider-strings",
        label: "Spider Strings",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Spider+Strings",
      },
      {
        id: "spool-extender",
        label: "Spool Extender",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Spool+Extender",
      },
      {
        id: "sting-shard",
        label: "Sting Shard",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Sting+Shard",
      },
      {
        id: "straight-pin",
        label: "Straight Pin",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Straight+Pin",
      },
      {
        id: "tacks",
        label: "Tacks",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Tacks",
      },
      {
        id: "thiefs-mark",
        label: "Thief's Mark",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Thief%27s+Mark",
      },
      {
        id: "threefold-pin",
        label: "Threefold Pin",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Threefold+Pin",
      },
      {
        id: "throwing-ring",
        label: "Throwing Ring",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Throwing+Ring",
      },
      {
        id: "volt-filament",
        label: "Volt Filament",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Volt+Filament",
      },
      {
        id: "voltvessels",
        label: "Voltvessels",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Voltvessels",
      },
      {
        id: "warding-bell",
        label: "Warding Bell",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Warding+Bell",
      },
      {
        id: "weavelight",
        label: "Weavelight",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Weavelight",
      },
      {
        id: "weighted-belt",
        label: "Weighted Belt",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Weighted+Belt",
      },
      {
        id: "wispfire-lantern",
        label: "Wispfire Lantern",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Wispfire+Lantern",
      },
      {
        id: "wreath-of-purity",
        label: "Wreath of Purity",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Wreath+of+Purity",
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
        link: "https://hollowknightsilksong.wiki.fextralife.com/Cross+Stitch",
      },
      {
        id: "pale-nails",
        label: "Pale Nails",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Pale+Nails",
      },
      {
        id: "rune-rage",
        label: "Rune Rage",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Rune+Rage",
      },
      {
        id: "sharpdart",
        label: "Sharpdart",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Sharpdart",
      },
      {
        id: "silkspear",
        label: "Silkspear",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Silkspear",
      },
      {
        id: "thread-storm",
        label: "Thread Storm",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Thread+Storm",
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
        link: "https://hollowknightsilksong.wiki.fextralife.com/Clawline",
      },
      {
        id: "cling-grip",
        label: "Cling Grip",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Cling+Grip",
      },
      {
        id: "needle-strike",
        label: "Needle Strike",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Needle+Strike",
      },
      {
        id: "needolin",
        label: "Needolin",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Needolin",
      },
      {
        id: "silk-soar",
        label: "Silk Soar",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Silk+Soar",
      },
      {
        id: "swift-step",
        label: "Swift Step",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/Swift+Step",
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
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%231%20%E2%80%94%20Mosshome",
      },
      {
        id: "fragment2",
        label: "#2 Fragment (Deepdocks)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%232%20%E2%80%94%20Above%20the%20magma%20in%20the%20Deep%20Docks",
      },
      {
        id: "fragment3",
        label: "#3 Fragment (Greymoor)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%233%20%E2%80%94%20Greymoor",
      },
      {
        id: "fragment4",
        label: "#4 Fragment (Bellhart)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%234%20%E2%80%94%20Bellhart",
      },
      {
        id: "fragment5",
        label: "#5 Fragment (Weavenest Atla)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%235%20%E2%80%94%20Weavenest%20Atla",
      },
      {
        id: "fragment6",
        label: "#6 Fragment (Blasted Steps Fleas)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%236%20%E2%80%94Flea%20caravan%20in%20Blasted%20Steps",
      },
      {
        id: "fragment7",
        label: "#7 Fragment (Grand Gate)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%237%20%E2%80%94%20Grand%20Gate",
      },
      {
        id: "fragment8",
        label: "#8 Fragment (Underworks)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%238%20%E2%80%94%20Below%20the%20Ventrica%20in%20the%20Underworks",
      },
      {
        id: "fragment9",
        label: "#9 Fragment (Underworks)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%239%20%E2%80%94%20Below%20the%20spikes%20in%20the%20Underworks",
      },
      {
        id: "fragment10",
        label: "#10 Fragment (Cogwork Core)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%2310%20%E2%80%94%20Cogwork%20Core",
      },
      {
        id: "fragment11",
        label: "#11 Fragment (Whiteward)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%2311%20%E2%80%94%20Under%20the%20elevator%20in%20Whiteward",
      },
      {
        id: "fragment12",
        label: "#12 Fragment (Balm of Wounded)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%2312%20%E2%80%94%20%27Balm%20for%20the%20Wounded%27%20quest%20in%20Whiteward",
      },
      {
        id: "fragment13",
        label: "#13 Fragment (High Halls)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%2313%20%E2%80%94%20High%20Halls",
      },
      {
        id: "fragment14",
        label: "#14 Fragment (Mount Fay)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%2314%20%E2%80%94%20Mount%20Fay",
      },
      {
        id: "fragment15",
        label: "#15 Fragment (Songclave)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%2315%20%E2%80%94%20Songclave",
      },
      {
        id: "fragment16",
        label: "#16 Fragment (Deep Docks)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%2316%20%E2%80%94%20Hidden%20cave%20in%20the%20Deep%20Docks",
      },
      {
        id: "fragment17",
        label: "#17 Fragment (Blasted Steps Grindle)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%2317%20%E2%80%94%20Grindle%20in%20Blasted%20Steps",
      },
      {
        id: "fragment18",
        label: "#18 Fragment (Memorium)",
        percent: 0.5,
        link: "https://www.polygon.com/hollow-knight-silksong-spool-fragment-locations/#:~:text=Spool%20fragment%20%2318%20%E2%80%94%20Memorium",
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
        label: "Hivesteel → Pale Steel Needle",
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
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%231%20%E2%80%94%20Bone%20Bottom",
      },
      {
        id: "#2",
        label: "#2 Shard (Wormways)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%232%20%E2%80%94%20Wormways",
      },
      {
        id: "#3",
        label: "#3 Shard (Far Fields)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%233%20%E2%80%94%20Far%20Fields",
      },
      {
        id: "#4",
        label: "#4 Shard (Shellwood)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%234%20%E2%80%94%20Shellwood",
      },
      {
        id: "#5",
        label: "#5 Shard (Deep Docks)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%235%20%E2%80%94%20Deep%20Docks",
      },
      {
        id: "#6",
        label: "#6 Shard (Weavenest Alta)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%236%20%E2%80%94%20Weavenest%20Alta",
      },
      {
        id: "#7",
        label: "#7 Shard (Cogwork Core)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%237%20%E2%80%94%20Cogwork%20Core",
      },
      {
        id: "#8",
        label: "#8 Shard (Firstshrine Songclave)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%238%20%E2%80%94%20First%20Shrine%20in%20Songclave",
      },
      {
        id: "#9",
        label: "#9 Shard (Savage beastfly-2)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20Shard%20%239%20%E2%80%94%20Savage%20Beastfly%20Grand%20Hunt",
      },
      {
        id: "#10",
        label: "#10 Shard (Whispering Vaults)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%2310%20%E2%80%94%20Whispering%20Vaults",
      },
      {
        id: "#11",
        label: "#11 Shard (Far Fields)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%2311%20%E2%80%94%20Far%20Fields",
      },
      {
        id: "#12",
        label: "#12 Shard (Mount Fay)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%2312%20%E2%80%94%20Mount%20Fay",
      },
      {
        id: "#13",
        label: "#13 Shard (Blasted Steps)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%2313%20%E2%80%94%20Blasted%20Steps",
      },
      {
        id: "#14",
        label: "#14 Shard (Wisp Thicket)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%2314%20%E2%80%94%20Wisp%20Thicket",
      },
      {
        id: "#15",
        label: "#15 Shard (Bilewater)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%2315%20%E2%80%94%20Bilewater",
      },
      {
        id: "#16",
        label: "#16 Shard (The Slab)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%2316%20%E2%80%94%20The%20Slab",
      },
      {
        id: "#17",
        label: "#17 Shard (Fastest In Pharloom - Act 3)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%2317%20%E2%80%94%20%27Fastest%20in%20Pharloom%27%20wish%20in%20Far%20Fields%20(Act%203)",
      },
      {
        id: "#18",
        label: "#18 Shard (Dark Hearts - Act 3)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%2318%20%E2%80%94%20%27Dark%20Hearts%27%20wish%20in%20Bellhart%20(Act%203)",
      },
      {
        id: "#19",
        label: "#19 Shard (Mount Fay - Act 3)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%2319%20%E2%80%94%20Mount%20Fay%20(Act%203)",
      },
      {
        id: "#20",
        label: "#20 Shard (The Hidden Hunter - Act 3)",
        percent: 0.25,
        link: "https://www.polygon.com/hollow-knight-silksong-mask-shard-locations/#:~:text=Mask%20shard%20%2320%20%E2%80%94%20%27The%20Hidden%20Hunter%27%20wish%20in%20Bellhart%20(Act%203)",
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
        link: "https://hollowknightsilksong.wiki.fextralife.com/Lace",
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
        link: "https://hollowknightsilksong.wiki.fextralife.com/Beast+Crest",
      },
      {
        id: "reaper-crest",
        label: "Reaper Crest",
        percent: 1,
        link: "https://hollowknight.wiki/w/Reaper_Crest",
      },
      {
        id: "shaman-crest",
        label: "Shaman Crest",
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
        link: "https://hollowknightsilksong.wiki.fextralife.com/Witch+Crest",
      },
    ],
  },
  {
    id: "misc",
    title: "MISCELLANEOUS",
    items: [
      {
        id: "bind-eva",
        label: "Bind Eva",
        percent: 1,
        link: "https://gamerant.com/silksong-bind-eva-location-sylphsong-ability-entwined-achievement-trophy/",
      },
      {
        id: "obtain-everbloom",
        label: "Obtain Everbloom",
        percent: 1,
        link: "https://hollowknightsilksong.wiki.fextralife.com/The+Old+Hearts",
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
