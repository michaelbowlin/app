var activeIndex = 1;
/* Buttons */ 
var button = $('.mainnav li');
/* Actions */
function actionRemove(){
  $('.page').removeClass('move-up')
}
/* Event */
button.on('click',function(){
  
  activeBtn = "#" + $(this).attr('id');
  $(button).removeClass('active');  
  $(activeBtn).addClass('active');  
  
  //.addClass('active');
  activeID = "#screen-" + $(this).attr('id');
  //alert ( activeID )

  actionRemove();
  //activeIndex -=1;
  activeIndex +=1;
  $(activeID).addClass('ani-slow move-up').css({'z-index': activeIndex * 100});

});
 


/* Tiles */
$('.tile-one').on('click',function(){
  $('.inner-tiles').removeClass('ani-fast');
  $('.inner-tiles').addClass('ani-fast');  
  $('.inner-tiles').toggleClass('move-left-1');
});
$('.inner-tiles li.tile-two').on('click',function(){
  $('.inner-tiles').removeClass('ani-fast');
  $('.inner-tiles').addClass('ani-fast');
  $('.inner-tiles').toggleClass('move-left-2');
});
$('.inner-tiles li.tile-three').on('click',function(){
  $('.inner-tiles').removeClass('ani-fast');
  $('.inner-tiles').addClass('ani-fast');
  $('.inner-tiles').toggleClass('move-left-3');
});
$('.inner-tiles li.tile-four').on('click',function(){
  $('.inner-tiles').removeClass('ani-fast');
  $('.inner-tiles').addClass('ani-fast');
  $('.inner-tiles').removeClass('move-left-1');
  $('.inner-tiles').removeClass('move-left-2');
  $('.inner-tiles').removeClass('move-left-3');
  /* move to 4th panel */
  setTimeout(function(){
    closePanels();
    panelFour.addClass('ani-fast');
    panelFour.toggleClass('move-left-320');
  },400);
});