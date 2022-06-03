wp.blocks.registerBlockType("ourblocktheme/header", {
	title: "Fictional University Header",
	supports: {
		align: ["full"],
	},
	edit: function () {
		return wp.element.createElement(
			"div",
			{ className: "our-placeholder-block" },
			"Our Header placeholder"
		);
	},
	save: function () {
		return null;
	},
});
