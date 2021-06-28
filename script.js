let li = document.querySelectorAll(".thumb li");
for(let i = 0; i < li.length; i++){
    li[i].onclick = function(){
        var c = 0;
        while(c < li.length){
            li[c++].className = "check";
        }
        li[i].className = "check active";
    }
}


function imgChange(anything){
    document.querySelector(".fruits").src = anything;
}

function imgChangeBg(color){
    const Bg = document.querySelector(".bg"); 
    Bg.style.background = color;

    const BgColor = document.querySelector(".BgColor"); 
    BgColor.style.background = color;
}