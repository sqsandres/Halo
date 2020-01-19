$(document).ready(function() { 
	$('ul.menu').superfish({ 
		delay:       600,                            // one second delay on mouseout 
		animation:   {height:'show'},  // fade-in and slide-down animation 
		speed:       600,                          // faster animation speed 
		autoArrows:  false,                           // disable generation of arrow mark-up 
		dropShadows: false                            // disable drop shadows 
	}); 
}); 

$(function(){	
	$(".link-1").hover(function(){
		$(this).stop().animate({paddingRight:22},'fast');
	},function(){
		$(this).stop().animate({paddingRight:16},'fast');
	});
	
	$(".list-services a").hover(function(){
		$(this).find('span').stop().animate({opacity:0},300);
	},function(){
		$(this).find('span').stop().animate({opacity:1},300);
	});
})