export type ChecklistItem = {
	id: string;
	label: string;
	percent: number;
};

export type ChecklistCategory = {
	id: string;
	title: string;
	items: ChecklistItem[];
};

// Hollow Knight: Silksong checklist data
// Source inspiration: `https://hollowknightchecklist.com/` (Hollow Knight). This is a fan checklist.
// Percentages are provided by the user request and may not sum to exactly 100.

export const categories: ChecklistCategory[] = [
	{
		id: "tools",
		title: "TOOLS",
		items: [
			{ id: "ascendants-grip", label: "Ascendant's Grip", percent: 1 },
			{ id: "barbed-bracelet", label: "Barbed Bracelet", percent: 1 },
			{ id: "claw-mirror", label: "Claw Mirror / Claw Mirrors", percent: 1 },
			{ id: "cogfly", label: "Cogfly", percent: 1 },
			{ id: "cogwork-wheel", label: "Cogwork Wheel", percent: 1 },
			{ id: "compass", label: "Compass", percent: 1 },
			{ id: "conchcutter", label: "Conchcutter (Raging Conchfly)", percent: 1 },
			{ id: "curveclaw", label: "Curveclaw / Curvesickle", percent: 1 },
			{ id: "dead-bugs-purse", label: "Dead Bug's Purse / Shell Satchel", percent: 1 },
			{ id: "delvers-drill", label: "Delver's Drill", percent: 1 },
			{ id: "druids-eye", label: "Druid's Eye / Druid's Eyes", percent: 1 },
			{ id: "egg-of-flealia", label: "Egg of Flealia (All Flea)", percent: 1 },
			{ id: "flea-brew", label: "Flea Brew", percent: 1 },
			{ id: "flintslate", label: "Flintslate", percent: 1 },
			{ id: "fractured-mask", label: "Fractured Mask", percent: 1 },
			{ id: "injector-band", label: "Injector Band", percent: 1 },
			{ id: "longclaw", label: "Longclaw", percent: 1 },
			{ id: "longpin", label: "Longpin", percent: 1 },
			{ id: "magma-bell", label: "Magma Bell", percent: 1 },
			{ id: "magnetite-brooch", label: "Magnetite Brooch", percent: 1 },
			{ id: "magnetite-dice", label: "Magnetite Dice", percent: 1 },
			{ id: "memory-crystal", label: "Memory Crystal", percent: 1 },
			{ id: "multibinder", label: "Multibinder", percent: 1 },
			{ id: "pimpillo", label: "Pimpillo", percent: 1 },
			{ id: "pin-badge", label: "Pin Badge (Pinstress)", percent: 1 },
			{ id: "plasmium-phial", label: "Plasmium Phial", percent: 1 },
			{ id: "pollip-pouch", label: "Pollip Pouch", percent: 1 },
			{ id: "quick-sling", label: "Quick Sling", percent: 1 },
			{ id: "reserve-bind", label: "Reserve Bind (Second Sentinel)", percent: 1 },
			{ id: "rosary-cannon", label: "Rosary Cannon", percent: 1 },
			{ id: "sawtooth-circlet", label: "Sawtooth Circlet", percent: 1 },
			{ id: "scuttlebrace", label: "Scuttlebrace", percent: 1 },
			{ id: "shard-pendant", label: "Shard Pendant", percent: 1 },
			{ id: "silkshot", label: "Silkshot", percent: 1 },
			{ id: "silkspeed-anklets", label: "Silkspeed Anklets", percent: 1 },
			{ id: "snitch-pick", label: "Snitch Pick", percent: 1 },
			{ id: "spider-strings", label: "Spider Strings", percent: 1 },
			{ id: "spool-extender", label: "Spool Extender", percent: 1 },
			{ id: "sting-shard", label: "Sting Shard", percent: 1 },
			{ id: "straight-pin", label: "Straight Pin", percent: 1 },
			{ id: "tacks", label: "Tacks", percent: 1 },
			{ id: "thiefs-mark", label: "Thief's Mark", percent: 1 },
			{ id: "threefold-pin", label: "Threefold Pin", percent: 1 },
			{ id: "throwing-ring", label: "Throwing Ring", percent: 1 },
			{ id: "volt-filament", label: "Volt Filament (Voltvyrm)", percent: 1 },
			{ id: "voltvessels", label: "Voltvessels", percent: 1 },
			{ id: "warding-bell", label: "Warding Bell", percent: 1 },
			{ id: "weavelight", label: "Weavelight (Moss Mother Duo)", percent: 1 },
			{ id: "weighted-belt", label: "Weighted Belt", percent: 1 },
			{ id: "wispfire-lantern", label: "Wispfire Lantern (Father of the Flame)", percent: 1 },
			{ id: "wreath-of-purity", label: "Wreath of Purity", percent: 1 },
		],
	},
	{
		id: "silk-skills",
		title: "SILK SKILLS",
		items: [
			{ id: "cross-stitch", label: "Cross Stitch (Phantom)", percent: 1 },
			{ id: "pale-nails", label: "Pale Nails (Cradle)", percent: 1 },
			{ id: "rune-rage", label: "Rune Rage (First Sinner)", percent: 1 },
			{ id: "sharpdart", label: "Sharpdart (Weavenest Karn)", percent: 1 },
			{ id: "silkspear", label: "Silkspear (Mosshome)", percent: 1 },
			{ id: "thread-storm", label: "Thread Storm (Greymoor)", percent: 1 },
		],
	},
	{
		id: "abilities",
		title: "ABILITIES",
		items: [
			{ id: "clawline", label: "Clawline (Harpoon)", percent: 1 },
			{ id: "cling-grip", label: "Cling Grip (Wall Jump)", percent: 1 },
			{ id: "needle-strike", label: "Needle Strike (Charge Slash)", percent: 1 },
			{ id: "needolin", label: "Needolin (Widow)", percent: 1 },
			{ id: "silk-soar", label: "Silk Soar", percent: 1 },
			{ id: "swift-step", label: "Swift Step (Dash)", percent: 1 },
		],
	},
	{
		id: "character-upgrades",
		title: "CHARACTER UPGRADES",
		items: [
			// Mask Upgrades (5%)
			{ id: "mask-1", label: "Mask Upgrade 1 (4 Mask Shards)", percent: 1 },
			{ id: "mask-2", label: "Mask Upgrade 2 (4 Mask Shards)", percent: 1 },
			{ id: "mask-3", label: "Mask Upgrade 3 (4 Mask Shards)", percent: 1 },
			{ id: "mask-4", label: "Mask Upgrade 4 (4 Mask Shards)", percent: 1 },
			{ id: "mask-5", label: "Mask Upgrade 5 (4 Mask Shards)", percent: 1 },

			// Silk Spool Upgrades (9%)
			{ id: "silk-1", label: "Silk Upgrade 1 (2 Spool Fragments)", percent: 1 },
			{ id: "silk-2", label: "Silk Upgrade 2 (2 Spool Fragments)", percent: 1 },
			{ id: "silk-3", label: "Silk Upgrade 3 (2 Spool Fragments)", percent: 1 },
			{ id: "silk-4", label: "Silk Upgrade 4 (2 Spool Fragments)", percent: 1 },
			{ id: "silk-5", label: "Silk Upgrade 5 (2 Spool Fragments)", percent: 1 },
			{ id: "silk-6", label: "Silk Upgrade 6 (2 Spool Fragments)", percent: 1 },
			{ id: "silk-7", label: "Silk Upgrade 7 (2 Spool Fragments)", percent: 1 },
			{ id: "silk-8", label: "Silk Upgrade 8 (2 Spool Fragments)", percent: 1 },
			{ id: "silk-9", label: "Silk Upgrade 9 (2 Spool Fragments)", percent: 1 },

			// Crafting & Pouch Upgrades (8%)
			{ id: "craft-1", label: "Crafting Kit Upgrade 1", percent: 1 },
			{ id: "craft-2", label: "Crafting Kit Upgrade 2", percent: 1 },
			{ id: "craft-3", label: "Crafting Kit Upgrade 3", percent: 1 },
			{ id: "craft-4", label: "Crafting Kit Upgrade 4", percent: 1 },
			{ id: "pouch-1", label: "Tool Pouch Upgrade 1", percent: 1 },
			{ id: "pouch-2", label: "Tool Pouch Upgrade 2", percent: 1 },
			{ id: "pouch-3", label: "Tool Pouch Upgrade 3", percent: 1 },
			{ id: "pouch-4", label: "Tool Pouch Upgrade 4", percent: 1 },

			// Needle Upgrades (4%)
			{ id: "needle-1", label: "Needle → Sharpened Needle", percent: 1 },
			{ id: "needle-2", label: "Sharpened → Shining Needle", percent: 1 },
			{ id: "needle-3", label: "Shining → Hivesteel Needle", percent: 1 },
			{ id: "needle-4", label: "Hivesteel → Pale Steel Needle", percent: 1 },
		],
	},
	{
		id: "silk-hearts",
		title: "SILK HEARTS",
		items: [
			{ id: "silk-heart-1", label: "Silk Heart 1 (Bell Beast)", percent: 1 },
			{ id: "silk-heart-2", label: "Silk Heart 2 (The Unravelled)", percent: 1 },
			{ id: "silk-heart-3", label: "Silk Heart 3 (Lace at The Cradle)", percent: 1 },
		],
	},
	{
		id: "crests",
		title: "CRESTS",
		items: [
			{ id: "architect-crest", label: "Architect Crest", percent: 1 },
			{ id: "beast-crest", label: "Beast Crest (Savage Beastfly)", percent: 1 },
			{ id: "reaper-crest", label: "Reaper Crest", percent: 1 },
			{ id: "shaman-crest", label: "Shaman Crest", percent: 1 },
			{ id: "wanderer-crest", label: "Wanderer Crest", percent: 1 },
			{ id: "witch-crest", label: "Witch Crest", percent: 1 },
		],
	},
	{
		id: "misc",
		title: "MISCELLANEOUS",
		items: [
			{ id: "bind-eva", label: "Bind Eva", percent: 1 },
			{ id: "obtain-everbloom", label: "Obtain Everbloom", percent: 1 },
		],
	},
];

export function getTotalPercent(): number {
	return categories
		.flatMap((c) => c.items)
		.reduce((sum, item) => sum + item.percent, 0);
}


