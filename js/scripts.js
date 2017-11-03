// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }
//
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Chrome, Safari and Opera
//     document.documentElement.scrollTop = 0; // For IE and Firefox
// }
$(function(){
	var dice = $("#dice");
	dice.click(function(){
		$(".wrap").append("<div id='dice_mask'></div>");//add mask
		dice.attr("class","dice");//After clearing the last points animation
		dice.css('cursor','default');
		var num = Math.floor(Math.random()*6+1);//random num 1-6
		dice.animate({left: '+2px'}, 100,function(){
			dice.addClass("dice_t");
		}).delay(200).animate({top:'-2px'},100,function(){
			dice.removeClass("dice_t").addClass("dice_s");
		}).delay(200).animate({opacity: 'show'},600,function(){
			dice.removeClass("dice_s").addClass("dice_e");
		}).delay(100).animate({left:'-2px',top:'2px'},100,function(){
			dice.removeClass("dice_e").addClass("dice_"+num);
			$("#result").html("Your throwing points are<span>"+num+"</span>");
			dice.css('cursor','pointer');
			$("#dice_mask").remove();//remove mask
		});
	});
});
