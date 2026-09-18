const learnedButton=document.getElementById("learnedButton");
const learnedMessage=document.getElementById("learnedMessage");
const currentYear=document.getElementById("currentYear");

learnedButton.addEventListener("click",function(){
  learnedMessage.textContent="I practiced semantic HTML, SEO tags, CSS box model, units, positioning, and basic DOM manipulation with JavaScript.";
});

currentYear.textContent=`© ${new Date().getFullYear()}`;