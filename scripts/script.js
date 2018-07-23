$(document).ready(function(){	
	
$(".character").delay(200).fadeIn(400);
$(".mainheader").delay(200).fadeIn(400);

$('.enter').delay(1200).animate({opacity: '1'}, 500);
// $(".maintitle").mouseover(function(){
// 	$(".enter").fadeIn(500);
// })


$(function() {
	$(".enter").hover(function(){
		$(".background").animate({opacity: 1},500);
		// $(".mainheader").animate({color: "white"}, 500);
	}, function(){
		$(".background").animate({opacity: 0},500);
		// $(".mainheader").animate({color: "black"}, 500);
	});
});

$(".cover").delay(600).fadeOut(300);

// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',

  getSortData: {
    date: '.date', // text from querySelector
    time: '.time', // text from querySelector
    color: '.color', // text from querySelector
  }
});

// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


$('.sort-by-button-group').on( 'click', 'button', function() {
  var sortValue = $( this ).attr('data-sort-value');
  $grid.isotope({ sortBy: sortValue });
});


// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

$(".entry1").hover(function(){
    $(".top-title-link").text("24 May 2018, 16:50");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry2").hover(function(){
    $(".top-title-link").text("26 May 2018, 13:45");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry3").hover(function(){
    $(".top-title-link").text("2 June 2018, 13:08");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry4").hover(function(){
    $(".top-title-link").text("12 June 2018, 15:21");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry5").hover(function(){
    $(".top-title-link").text("17 June 2018, 18:55");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry6").hover(function(){
    $(".top-title-link").text("19 June 2018, 14:46");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry7").hover(function(){
    $(".top-title-link").text("19 June 2018, 16:55");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry8").hover(function(){
    $(".top-title-link").text("20 June 2018, 16:56");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry9").hover(function(){
    $(".top-title-link").text("1 July 2018, 17:31");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry10").hover(function(){
    $(".top-title-link").text("2 July 2018, 11:48");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry11").hover(function(){
    $(".top-title-link").text("2 July 2018, 12:22");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry12").hover(function(){
    $(".top-title-link").text("2 July 2018, 14:30");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry13").hover(function(){
    $(".top-title-link").text("3 July 2018, 12:40");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry14").hover(function(){
    $(".top-title-link").text("3 July 2018, 20:54");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry15").hover(function(){
    $(".top-title-link").text("4 July 2018, 12:54");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry16").hover(function(){
    $(".top-title-link").text("13 July 2018, 12:35");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry17").hover(function(){
    $(".top-title-link").text("14 July 2018, 09:57");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry18").hover(function(){
    $(".top-title-link").text("14 July 2018, 09:58");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry19").hover(function(){
    $(".top-title-link").text("14 July 2018, 13:04 ");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});

$(".entry20").hover(function(){
    $(".top-title-link").text("20 July 2018, 20:48");
    }, function(){
    $(".top-title-link").text("PARALLAX");
});



});
