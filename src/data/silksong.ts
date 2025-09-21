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

// Hollow Knight: Silksong checklist data
// Source inspiration: `https://hollowknightchecklist.com/` (Hollow Knight). This is a fan checklist.
// Percentages are provided by the user request and may not sum to exactly 100.

export const categories: ChecklistCategory[] = [
	{
		id: "tools",
		title: "TOOLS",
		items: [
			{ id: "ascendants-grip", label: "Ascendant's Grip", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Ascendant%27s+Grip" },
			{ id: "barbed-bracelet", label: "Barbed Bracelet", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Barbed+Bracelet" },
			{ id: "claw-mirror", label: "Claw Mirror / Claw Mirrors", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Claw+Mirror" },
			{ id: "cogfly", label: "Cogfly", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Cogfly" },
			{ id: "cogwork-wheel", label: "Cogwork Wheel", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Cogwork+Wheel" },
			{ id: "compass", label: "Compass", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Compass" },
			{ id: "conchcutter", label: "Conchcutter (Raging Conchfly)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Conchcutter" },
			{ id: "curveclaw", label: "Curveclaw / Curvesickle", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Curveclaw" },
			{ id: "dead-bugs-purse", label: "Dead Bug's Purse / Shell Satchel", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Dead+Bug%27s+Purse" },
			{ id: "delvers-drill", label: "Delver's Drill", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Delver%27s+Drill" },
			{ id: "druids-eye", label: "Druid's Eye / Druid's Eyes", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Druid%27s+Eye" },
			{ id: "egg-of-flealia", label: "Egg of Flealia (All Flea)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Egg+of+Flealia" },
			{ id: "flea-brew", label: "Flea Brew", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Flea+Brew" },
			{ id: "flintslate", label: "Flintslate", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Flintslate" },
			{ id: "fractured-mask", label: "Fractured Mask", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Fractured+Mask" },
			{ id: "injector-band", label: "Injector Band", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Injector+Band" },
			{ id: "longclaw", label: "Longclaw", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Longclaw" },
			{ id: "longpin", label: "Longpin", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Longpin" },
			{ id: "magma-bell", label: "Magma Bell", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Magma+Bell" },
			{ id: "magnetite-brooch", label: "Magnetite Brooch", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Magnetite+Brooch" },
			{ id: "magnetite-dice", label: "Magnetite Dice", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Magnetite+Dice" },
			{ id: "memory-crystal", label: "Memory Crystal", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Memory+Crystal" },
			{ id: "multibinder", label: "Multibinder", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Multibinder" },
			{ id: "pimpillo", label: "Pimpillo", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Pimpillo" },
			{ id: "pin-badge", label: "Pin Badge (Pinstress)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Pin+Badge" },
			{ id: "plasmium-phial", label: "Plasmium Phial", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Plasmium+Phial" },
			{ id: "pollip-pouch", label: "Pollip Pouch", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Pollip+Pouch" },
			{ id: "quick-sling", label: "Quick Sling", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Quick+Sling" },
			{ id: "reserve-bind", label: "Reserve Bind (Second Sentinel)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Reserve+Bind" },
			{ id: "rosary-cannon", label: "Rosary Cannon", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Rosary+Cannon" },
			{ id: "sawtooth-circlet", label: "Sawtooth Circlet", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Sawtooth+Circlet" },
			{ id: "scuttlebrace", label: "Scuttlebrace", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Scuttlebrace" },
			{ id: "shard-pendant", label: "Shard Pendant", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Shard+Pendant" },
			{ id: "silkshot", label: "Silkshot", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Silkshot" },
			{ id: "silkspeed-anklets", label: "Silkspeed Anklets", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Silkspeed+Anklets" },
			{ id: "snitch-pick", label: "Snitch Pick", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Snitch+Pick" },
			{ id: "spider-strings", label: "Spider Strings", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Spider+Strings" },
			{ id: "spool-extender", label: "Spool Extender", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Spool+Extender" },
			{ id: "sting-shard", label: "Sting Shard", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Sting+Shard" },
			{ id: "straight-pin", label: "Straight Pin", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Straight+Pin" },
			{ id: "tacks", label: "Tacks", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Tacks" },
			{ id: "thiefs-mark", label: "Thief's Mark", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Thief%27s+Mark" },
			{ id: "threefold-pin", label: "Threefold Pin", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Threefold+Pin" },
			{ id: "throwing-ring", label: "Throwing Ring", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Throwing+Ring" },
			{ id: "volt-filament", label: "Volt Filament (Voltvyrm)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Volt+Filament" },
			{ id: "voltvessels", label: "Voltvessels", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Voltvessels" },
			{ id: "warding-bell", label: "Warding Bell", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Warding+Bell" },
			{ id: "weavelight", label: "Weavelight (Moss Mother Duo)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Weavelight" },
			{ id: "weighted-belt", label: "Weighted Belt", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Weighted+Belt" },
			{ id: "wispfire-lantern", label: "Wispfire Lantern (Father of the Flame)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Wispfire+Lantern" },
			{ id: "wreath-of-purity", label: "Wreath of Purity", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Wreath+of+Purity" },
		],
	},
	{
		id: "silk-skills",
		title: "SILK SKILLS",
		items: [
			{ id: "cross-stitch", label: "Cross Stitch (Phantom)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Cross+Stitch" },
			{ id: "pale-nails", label: "Pale Nails (Cradle)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Pale+Nails" },
			{ id: "rune-rage", label: "Rune Rage (First Sinner)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Rune+Rage" },
			{ id: "sharpdart", label: "Sharpdart (Weavenest Karn)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Sharpdart" },
			{ id: "silkspear", label: "Silkspear (Mosshome)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Silkspear" },
			{ id: "thread-storm", label: "Thread Storm (Greymoor)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Thread+Storm" },
		],
	},
	{
		id: "abilities",
		title: "ABILITIES",
		items: [
			{ id: "clawline", label: "Clawline (Harpoon)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Clawline" },
			{ id: "cling-grip", label: "Cling Grip (Wall Jump)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Cling+Grip" },
			{ id: "needle-strike", label: "Needle Strike (Charge Slash)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Needle+Strike" },
			{ id: "needolin", label: "Needolin (Widow)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Needolin" },
			{ id: "silk-soar", label: "Silk Soar", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Silk+Soar" },
			{ id: "swift-step", label: "Swift Step (Dash)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Swift+Step" },
		],
	},
	{
		id: "character-upgrades",
		title: "CHARACTER UPGRADES",
		items: [

			// Silk Spool Upgrades (9%)
			{ id: "silk-1", label: "Silk Upgrade 1 (2 Spool Fragments)", percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-spool-fragments-silk-upgrades-guide/2900-7006/" },
			{ id: "silk-2", label: "Silk Upgrade 2 (2 Spool Fragments)", percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-spool-fragments-silk-upgrades-guide/2900-7006/" },
			{ id: "silk-3", label: "Silk Upgrade 3 (2 Spool Fragments)", percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-spool-fragments-silk-upgrades-guide/2900-7006/" },
			{ id: "silk-4", label: "Silk Upgrade 4 (2 Spool Fragments)", percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-spool-fragments-silk-upgrades-guide/2900-7006/" },
			{ id: "silk-5", label: "Silk Upgrade 5 (2 Spool Fragments)", percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-spool-fragments-silk-upgrades-guide/2900-7006/" },
			{ id: "silk-6", label: "Silk Upgrade 6 (2 Spool Fragments)", percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-spool-fragments-silk-upgrades-guide/2900-7006/" },
			{ id: "silk-7", label: "Silk Upgrade 7 (2 Spool Fragments)", percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-spool-fragments-silk-upgrades-guide/2900-7006/" },
			{ id: "silk-8", label: "Silk Upgrade 8 (2 Spool Fragments)", percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-spool-fragments-silk-upgrades-guide/2900-7006/" },
			{ id: "silk-9", label: "Silk Upgrade 9 (2 Spool Fragments)", percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-spool-fragments-silk-upgrades-guide/2900-7006/" },

			// Crafting & Pouch Upgrades (8%)
			{ id: "craft-1", label: "Crafting Kit Upgrades (4 Total)", percent: 4, link: "https://hollowknightsilksong.wiki.fextralife.com/Crafting+Kit" },
			{ id: "pouch-1", label: "Tool Pouch Upgrades (4 Total)", percent: 4, link: "https://hollowknightsilksong.wiki.fextralife.com/Tool+Pouch" },

			// Needle Upgrades (4%)
			{ id: "needle-1", label: "Needle → Sharpened Needle", percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-pale-oil-weapon-upgrade-guide/2900-7030/" },
			{ id: "needle-2", label: "Sharpened → Shining Needle", percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-pale-oil-weapon-upgrade-guide/2900-7030/" },
			{ id: "needle-3", label: "Shining → Hivesteel Needle", percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-pale-oil-weapon-upgrade-guide/2900-7030/" },
			{ id: "needle-4", label: "Hivesteel → Pale Steel Needle", percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-pale-oil-weapon-upgrade-guide/2900-7030/" },
		],
	},
	{
		id: 'mask-upgrades',
		title: 'MASKS',
		items: [
			{ id: 'mask-upgrade-1', label: 'Mask Upgrade 1  (4 Mask Shards)', percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-mask-shard-locations-guide/2900-6992/" },
			{ id: 'mask-upgrade-2', label: 'Mask Upgrade 2  (4 Mask Shards)', percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-mask-shard-locations-guide/2900-6992/" },
			{ id: 'mask-upgrade-3', label: 'Mask Upgrade 3  (4 Mask Shards)', percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-mask-shard-locations-guide/2900-6992/" },
			{ id: 'mask-upgrade-4', label: 'Mask Upgrade 4  (4 Mask Shards)', percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-mask-shard-locations-guide/2900-6992/" },
			{ id: 'mask-upgrade-5', label: 'Mask Upgrade 5  (4 Mask Shards)', percent: 1, link: "https://www.gamespot.com/gallery/hollow-knight-silksong-mask-shard-locations-guide/2900-6992/" },
		],
	},
	{
		id: "silk-hearts",
		title: "SILK HEARTS",
		items: [
			{ id: "silk-heart-1", label: "Silk Heart 1 (Bell Beast)", percent: 1, link : "https://hollowknight.wiki/w/Bell_Beast" },
			{ id: "silk-heart-2", label: "Silk Heart 2 (The Unravelled)", percent: 1, link: "https://hollowknight.wiki/w/The_Unravelled" },
			{ id: "silk-heart-3", label: "Silk Heart 3 (Lace at The Cradle)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Lace" },
		],
	},
	{
		id: "crests",
		title: "CRESTS",
		items: [
			{ id: "architect-crest", label: "Architect Crest", percent: 1, link: "https://hollowknight.wiki/w/Architect_Crest" },
			{ id: "beast-crest", label: "Beast Crest (Savage Beastfly)", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Beast+Crest" },
			{ id: "reaper-crest", label: "Reaper Crest", percent: 1, link: "https://hollowknight.wiki/w/Reaper_Crest" },
			{ id: "shaman-crest", label: "Shaman Crest", percent: 1, link: "https://hollowknight.wiki/w/Shaman_Crest" },
			{ id: "wanderer-crest", label: "Wanderer Crest", percent: 1, link: "https://hollowknight.wiki/w/Wanderer_Crest" },
			{ id: "witch-crest", label: "Witch Crest", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/Witch+Crest" },
		],
	},
	{
		id: "misc",
		title: "MISCELLANEOUS",
		items: [
			{ id: "bind-eva", label: "Bind Eva", percent: 1, link: "https://gamerant.com/silksong-bind-eva-location-sylphsong-ability-entwined-achievement-trophy/" },
			{ id: "obtain-everbloom", label: "Obtain Everbloom", percent: 1, link: "https://hollowknightsilksong.wiki.fextralife.com/The+Old+Hearts" },
		],
	},
];

export function getTotalPercent(): number {
	return categories
		.flatMap((c) => c.items)
		.reduce((sum, item) => sum + item.percent, 0);
}


