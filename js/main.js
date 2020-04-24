$(document).ready(function(){
		$('.homeBts').click(function(){
			var offset = $('.container').offset();
        console.log("하위");
	        $('html, body').animate({scrollTop : offset.top}, 400);
		});

    $('.profileBts').click(function(){
			var offset = $('.main-wrapper').offset();
      console.log(offset);
	        $('html, body').animate({scrollTop : offset.top}, 400);
		});

    $('.skillsBts').click(function(){
			var offset = $('.feature-area').offset();
	        $('html, body').animate({scrollTop : offset.top}, 400);
		});

    $('.educationBts').click(function(){
			var offset = $('.feature-bottom-area').offset();
	        $('html, body').animate({scrollTop : offset.top}, 400);
		});

    $('.projectBts').click(function(){
			var offset = $('.subscription-area').offset();
	        $('html, body').animate({scrollTop : offset.top}, 400);
		});


    ////////////////////////////////////////////////////////////
    var hoverCount=0;
    $("#mepetImg1").hover(function(){
      if(hoverCount==0){
        $("#mepetText1").toggle();
        $("#mepetImg1 > img").css("opacity", "0.3");
        hoverCount++;
      }
      else if(hoverCount==1){
        $("#mepetText1").toggle();
        $("#mepetImg1 > img").css("opacity", "1");
        hoverCount--;
      }
    });
    $("#mepetImg2").hover(function(){
      if(hoverCount==0){
        $("#mepetText2").toggle();
        $("#mepetImg2 > img").css("opacity", "0.3");
        hoverCount++;
      }
      else if(hoverCount==1){
        $("#mepetText2").toggle();
        $("#mepetImg2 > img").css("opacity", "1");
        hoverCount--;
      }
    });
    $("#mepetImg3").hover(function(){
      if(hoverCount==0){
        $("#mepetText3").toggle();
        $("#mepetImg3 > img").css("opacity", "0.3");
        hoverCount++;
      }
      else if(hoverCount==1){
        $("#mepetText3").toggle();
        $("#mepetImg3 > img").css("opacity", "1");
        hoverCount--;
      }
    });

    $("#btsImg1").hover(function(){
      if(hoverCount==0){
        $("#btsText1").toggle();
        $("#btsImg1 > img").css("opacity", "0.3");
        hoverCount++;
      }
      else if(hoverCount==1){
        $("#btsText1").toggle();
        $("#btsImg1 > img").css("opacity", "1");
        hoverCount--;
      }
    });
    $("#btsImg2").hover(function(){
      if(hoverCount==0){
        $("#btsText2").toggle();
        $("#btsImg2 > img").css("opacity", "0.3");
        hoverCount++;
      }
      else if(hoverCount==1){
        $("#btsText2").toggle();
        $("#btsImg2 > img").css("opacity", "1");
        hoverCount--;
      }
    });
    $("#btsImg3").hover(function(){
      if(hoverCount==0){
        $("#btsText3").toggle();
        $("#btsImg3 > img").css("opacity", "0.3");
        hoverCount++;
      }
      else if(hoverCount==1){
        $("#btsText3").toggle();
        $("#btsImg3 > img").css("opacity", "1");
        hoverCount--;
      }
    });

    $("#chatImg1").hover(function(){
      if(hoverCount==0){
        $("#chatText1").toggle();
        $("#chatImg1 > img").css("opacity", "0.3");
        hoverCount++;
      }
      else if(hoverCount==1){
        $("#chatText1").toggle();
        $("#chatImg1 > img").css("opacity", "1");
        hoverCount--;
      }
    });
    $("#chatImg2").hover(function(){
      if(hoverCount==0){
        $("#chatText2").toggle();
        $("#chatImg2 > img").css("opacity", "0.3");
        hoverCount++;
      }
      else if(hoverCount==1){
        $("#chatText2").toggle();
        $("#chatImg2 > img").css("opacity", "1");
        hoverCount--;
      }
    });
    $("#chatImg3").hover(function(){
      if(hoverCount==0){
        $("#chatText3").toggle();
        $("#chatImg3 > img").css("opacity", "0.3");
        hoverCount++;
      }
      else if(hoverCount==1){
        $("#chatText3").toggle();
        $("#chatImg3 > img").css("opacity", "1");
        hoverCount--;
      }
    });

  });
//////////////////////////////////////////////////////////////
