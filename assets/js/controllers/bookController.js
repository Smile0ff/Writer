(function($, root){

	"use strict";

	function BookController(){
		this.el = $("#book-list");
		this.initialize.apply(this, arguments);
	}
	BookController.prototype = {
		reviewHolder: [],
		reviewBookID: [],
		initialize: initialize,
		_events: _events,
		toggleReviews: toggleReviews,
		closeReviews: closeReviews
	}

	function initialize(){
		this.reviewHolder = $("#review-holder");
		this.reviewBookID = this.reviewHolder.find("#review-book-id");
		this._events();
	}
	function _events(){
		this.el.on("click", ".review-button", $.proxy(this.toggleReviews, this));
		this.reviewHolder.on("click", ".close-button", $.proxy(this.closeReviews, this))
	}
	function toggleReviews(e){
		e.preventDefault();
		
		var target = $(e.target).closest(".review-button"),
			bookID = target.data("book-id");

		this.reviewHolder.find(".book-id-" + bookID).addClass("active").siblings(".review").removeClass("active");
		this.reviewHolder.find("#review-form").removeClass("hide");
		this.reviewHolder.find("#response-holder").empty();
		this.reviewBookID.val(bookID);
		this.reviewHolder.addClass("active");
	}
	function closeReviews(e){
		this.reviewHolder.removeClass("active");
	}

	module.exports = BookController;

})(jQuery, window);