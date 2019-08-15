/* Magic Mirror
 * Module: Space
 * By Linus
 */

Module.register("MMM-Space",{
	defaults: {
		verticalSpace: "40px",
		backgroundColor: "#000000"
	},

	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.style.height = this.config.verticalSpace;
		wrapper.style.background = this.config.backgroundColor;
		return wrapper;
	}
});
