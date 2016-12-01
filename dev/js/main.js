var homer = {
	/**
     * init
     * @desc initializes
     */
	init: function() {
		homer.measuresHeadContainer();
		homer.onResizePage();
	},
	/**
     * measuresHeadContainer
     * @desc sets the width and height of the container
     */
	measuresHeadContainer: function() {
		var widthWindow = $(window).width(),
			widthHeadContainer = widthWindow / 3,
			heightHeadContainer = widthHeadContainer - (widthHeadContainer / 3),
			headContainer = $(".head-container");
		
		headContainer.css({
			"width": widthHeadContainer,
			"height": heightHeadContainer
		});

		$('.phrases').css('margin-bottom', heightHeadContainer);
		
		homer.centerHeadContainer(widthWindow, widthHeadContainer, headContainer);
	},
	/**
     * centerHeadContainer
     * @desc centralize the container
     */
	centerHeadContainer: function(widthWindow, widthHeadContainer, headContainer) {
		var posHeadContainer = (widthWindow / 2) - (widthHeadContainer / 2);
			
		headContainer.css("left", posHeadContainer);
	},
	/**
     * onResizePage
     * @desc recalculate
     */
	onResizePage: function() {
		$(window).resize(function() {
			homer.measuresHeadContainer();
		});
	}
}

$(document).ready(function() {
	homer.init();
});