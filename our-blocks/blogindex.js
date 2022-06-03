wp.blocks.registerBlockType("ourblocktheme/blogindex", {
	title: "Fictional University Blog Index",
	supports: {
		align: ["full"],
	},
	edit: function () {
		return wp.element.createElement(
			"div",
			{ className: "our-placeholder-block" },
			"Blog Index placeholder"
		);
	},
	save: function () {
		return null;
	},
});
