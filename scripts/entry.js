$(document).ready(function(){

	$(".cover").delay(400).fadeOut(300);

	// $(".entry").toggle(
	// 	function(){
	// 		$(".original").animate({opacity: 0});
	// 		$(".top-quote").animate({opacity: 1});
	// 		$(".edit").animate({opacity: 1}, 500);
	// 		$(this).delay(200).addClass('eye-open-second').removeClass('eye-open');
	// 	},
	// 	function(){
	// 		$(".original").animate({opacity: 0});
	// 		$(".edit").animate({opacity: 0});
	// 		$(this).delay(200).addClass('eye-closed').removeClass('eye-open-second');
	// 	},
	// 	function(){
	// 		$(".original").animate({opacity: 1}, 500);
	// 		$(".top-quote").animate({opacity: 0});
	// 		$(".edit").animate({opacity: 1});
	// 		$(this).delay(200).addClass('eye-open').removeClass('eye-closed');
	// 	},
	// );

	$(".entry").toggle(
		function(){
			$(".original").animate({opacity: 0});
			$(".top-quote").animate({opacity: 1});
			$(".edit").animate({opacity: 1}, 500);
		},
		function(){
			$(".original").animate({opacity: 0});
			$(".edit").animate({opacity: 0});
			$(this).delay(200).addClass('eye-closed').removeClass('eye-open');
		},
		function(){
			$(".original").animate({opacity: 1}, 500);
			$(".top-quote").animate({opacity: 0});
			$(".edit").animate({opacity: 1});
			$(this).delay(200).addClass('eye-open').removeClass('eye-closed');
		},
	);



// FAQ PAGE
	$(".faq-read-button").click(function(){
		$(".faq-read-wrapper").animate({opacity: 0}, 500).hide(200);
	});

});