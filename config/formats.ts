export const Formats: import('../sim/dex-formats').FormatList = [
	{
		section: "Blind Draft League",
	},
	{
		name: "Draft Custom Battle",
		mod: 'gen9natdex',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 6', 'Max Move Count = 4', 'Max Level = 100', 'Default Level = 100'],
	}
];
