const menButton = document.querySelector('.menuButton');
menButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	
	this.nextElementSibling.style.transition="0.3s";
/*
    if (this.nextElementSibling.style.opacity=="0.985") {
       this.nextElementSibling.style.opacity="0";
	   this.nextElementSibling.style.display="none";
      
    } else {
      this.nextElementSibling.style.opacity="0.985"
	  this.nextElementSibling.style.display="visible";
	}
}
*/


 if (this.nextElementSibling.style.display === "none") {
        this.nextElementSibling.style.display = "block";
    } else {
        this.nextElementSibling.style.display = "none";
    }
	
}





$(".b1").click(function(){

		$("html, body").animate({ scrollTop: $('.description').offset().top }, 1700);		

	});
	

$(".b2").click(function(){

		$("html, body").animate({ scrollTop: $('.looking').offset().top }, 1700);		

	});

$(".b3").click(function(){

		$("html, body").animate({ scrollTop: $('.contacts').offset().top }, 1700);		

	});


	
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");

if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number

	window.scrollBy(0, 2000);
	
  
else { 




	
}


