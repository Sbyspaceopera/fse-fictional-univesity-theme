wp.blocks.registerBlockType("ourblocktheme/singlepost", {
	title: "Fictional University Single Post",
	supports: {
		align: ["full"],
	},
	edit: function () {
		return wp.element.createElement(
			"div",
			{ className: "our-placeholder-block" },
			"Single Post placeholder"
		);
	},
	save: function () {
		return null;
	},
});
