function searchCourses(){

let input=document.getElementById("searchInput").value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(function(card){

let text=card.innerText.toLowerCase();

if(text.includes(input))
card.style.display="flex";

else
card.style.display="none";

});

}
