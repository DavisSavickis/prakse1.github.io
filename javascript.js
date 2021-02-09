var d = new Date();
document.getElementById("date").innerHTML=d;

var Slide_btn = document.getElementById("Go-top");
// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		Slide_btn.style.display = "block";
	} 
	else {
		Slide_btn.style.display = "none";
	}
}
		
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() 
{
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("products").style.paddingBottom = "20px";		
  
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) 
{
if (!event.target.matches('.dropbtn'))
	{
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) 
		{
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) 
			{
				openDropdown.classList.remove('show');
			}
		}
	}
}