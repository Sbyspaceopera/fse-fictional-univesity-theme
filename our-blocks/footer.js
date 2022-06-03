wp.blocks.registerBlockType("ourblocktheme/footer", {
	title: "Fictional University Footer",
	supports: {
		align: ["full"],
	},
	edit: function () {
		return wp.element.createElement(
			"div",
			{ className: "our-placeholder-block" },
			"Our Footer placeholder"
		);
	},
	save: function () {
		return null;
	},
});
