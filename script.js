/* YES BUTTON */
function yesClick(){
    window.location.href="story.html";
}

/* HEART RAIN */
setInterval(()=>{
    let heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(10+Math.random()*20)+"px";
    heart.style.animationDuration=(3+Math.random()*5)+"s";
    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),6000);
},300);

/* TYPING EFFECT */
let text="You are my favorite notification ❤️";
let i=0;
function typeEffect(){
    if(document.getElementById("typing")){
        if(i<text.length){
            document.getElementById("typing").innerHTML+=text.charAt(i);
            i++;
            setTimeout(typeEffect,60);
        }
    }
}
window.onload=typeEffect;

/* POPUP MEMORIES */
setInterval(()=>{
    let popup=document.getElementById("memoryPopup");
    if(popup){
        popup.style.display="block";
        setTimeout(()=>popup.style.display="none",3000);
    }
},8000);

/* SLIDESHOW */
let slideIndex=0;
function showSlides(){
    let slides=document.getElementsByClassName("slide");
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slides.length){slideIndex=1}
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlides,3000);
}
function noClick(){

    // show angry message
    let angry=document.getElementById("angryBox");
    angry.style.display="block";

    // screen shake
    document.body.classList.add("angry-shake");
    setTimeout(()=>{
        document.body.classList.remove("angry-shake");
    },1000);

    // move NO button randomly
    let btn=event.target;
    btn.style.position="absolute";
    btn.style.top=Math.random()*80+"%";
    btn.style.left=Math.random()*80+"%";
}

