window.addEventListener('load',()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads div");
    const visual=document.querySelector(".visual");
    const colors=[
        "rgb(43, 148, 104)",
        "rgb(148, 111, 43)",
        "rgb(221, 71, 12)",
        "rgb(101, 24, 153)",
        "rgb(125, 153, 24)",
        "rgb(230, 67, 208)"
    ];

console.log(sounds);
    //lets start for sound

    pads.forEach((pad,index)=>{
      pad.addEventListener('click',function(){

        sounds[index].currentTime=0;
        sounds[index].play();
        createBubbles(index);
      });

    });
    //create bubbles

    const createBubbles=(index)=>{


        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease";
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
    };
    
    
});
