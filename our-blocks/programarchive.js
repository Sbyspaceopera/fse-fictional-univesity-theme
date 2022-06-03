wp.blocks.registerBlockType("ourblocktheme/programarchive", {
	title: "Fictional University Program Archive",
	supports: {
		align: ["full"],
	},
	edit: function () {
		return wp.element.createElement(
			"div",
			{ className: "our-placeholder-block" },
			"Our Program Archive placeholder"
		);
	},
	save: function () {
		return null;
	},
});
