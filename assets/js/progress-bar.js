function progressBarSetup(){"max"in document.createElement("progress")?(initializeProgressElement(),$(document).on("scroll",(function(){progressBar.attr({value:getCurrentScrollPosition()})})),$(window).on("resize",initializeProgressElement)):(resizeProgressBar(),$(document).on("scroll",resizeProgressBar),$(window).on("resize",resizeProgressBar))}function getCurrentScrollPosition(){return $(window).scrollTop()}function initializeProgressElement(){let e=$("#navbar").outerHeight(!0);$("body").css({"padding-top":e}),$("progress-container").css({"padding-top":e}),progressBar.css({top:e}),progressBar.attr({max:getDistanceToScroll(),value:getCurrentScrollPosition()})}function getDistanceToScroll(){return $(document).height()-$(window).height()}function resizeProgressBar(){progressBar.css({width:getWidthPercentage()+"%"})}function getWidthPercentage(){return getCurrentScrollPosition()/getDistanceToScroll()*100}const progressBar=$("#progress");window.onload=function(){setTimeout(progressBarSetup,50)};