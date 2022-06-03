wp.blocks.registerBlockType("ourblocktheme/page", {
	title: "Fictional University Page",
	supports: {
		align: ["full"],
	},
	edit: function () {
		return wp.element.createElement(
			"div",
			{ className: "our-placeholder-block" },
			"Page placeholder"
		);
	},
	save: function () {
		return null;
	},
});
