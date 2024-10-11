let btnNo = document.querySelector('button.buttonNo');
let btnYes = document.querySelector('button.buttonYes');

let message = document.querySelector('h1');
var clicks = 0;

btnNo.addEventListener("click", moveClick)

function moveClick(){

    clicks+=1;

    if (clicks == 6){
        btnYes.style.backgroundColor = "green";
    }

    else if (clicks == 18){
        btnYes.style.left = "50%";
        btnYes.style.right = "0%";
        btnYes.style.top = "0%";
        btnYes.style.bottom = "10%";
    }

    if (clicks > 10){
        const i=Math.floor(Math.random()*500)+1;
        const j=Math.floor(Math.random()*500)+1;

        btnNo.style.left=i+"px"
        btnNo.style.top=j+"px"
    }

}

btnNo.addEventListener('click', () =>{

    if (clicks == 1){
        btnNo.innerText = "haha very funny";
    }

    else if (clicks == 2){
        btnNo.innerText = "yes is the other button baby";
    }

    else if (clicks == 3){
        btnNo.innerText = "the OTHER button";
    }

    else if (clicks == 4){
        btnNo.innerText = "to the right";
    }

    else if (clicks == 5){
        btnNo.innerText = "i forgot you dont know ur right from left";
    }

    else if (clicks == 6){
        btnNo.innerText = "there i changed the color";
    }

    else if (clicks == 7){
        btnNo.innerText = "click the green one";
    }

    else if (clicks == 8){
        btnNo.innerText = "no the green one";
    }

    else if (clicks == 9){
        btnNo.innerText = "...";
    }

    else if (clicks == 10){
        btnNo.innerText = "ur breaking your boyfriend's heart";
    }

    else if (clicks == 11){
        btnNo.innerText = "what if i start moving it";
    }

    else if (clicks == 12){
        btnNo.innerText = "here now";
    }

    else if (clicks == 13){
        btnNo.innerText = "over here";
    }

    else if (clicks == 14){
        btnNo.innerText = "bruh";
    }

    else if (clicks == 15){
        btnNo.innerText = "ur being mean";
    }

    else if (clicks == 16){
        btnNo.innerText = "sniff";
    }

    else if (clicks == 17){
        btnNo.innerText = "you made me do this!";
    }

    else if (clicks == 18){
        btnNo.innerText = "it's huuuuuge";
    }

    else if (clicks == 19){
        btnNo.innerText = "what u said ;)";
    }

    else if (clicks == 20){
        btnNo.innerText = "plzzz";
    }

    else if (clicks == 21){
        btnNo.innerText = "ill give u the sewing kit you wanted";
    }

    else if (clicks == 22){
        btnNo.innerText = "cmoooooon";
    }

    else if (clicks == 23){
        btnNo.innerText = "CLICK.";
    }

    else if (clicks == 24){
        btnNo.innerText = "THE.";
    }

    else if (clicks == 25){
        btnNo.innerText = "BIG.";
    }

    else if (clicks == 26){
        btnNo.innerText = "GREEN.";
    }

    else if (clicks == 27){
        btnNo.innerText = "BUTTON.";
    }

    else if (clicks == 28){
        btnNo.innerText = "fine";
    }

    else if (clicks == 29){
        btnNo.innerText = "ill wait.";
    }

    else if (clicks == 30){
        btnNo.innerText = "ill wait the rest of my life for you";
    }

    else if (clicks == 31){
        btnNo.innerText = "yk why?";
    }

    else if (clicks == 32){
        btnNo.innerText = "bc i love you";
    }

    else if (clicks == 33){
        btnNo.innerText = "you've done so much for me";
    }

    else if (clicks == 34){
        btnNo.innerText = "ill do this for u";
    }

    else if (clicks > 34){
        btnNo.innerText = "i love you michelle";
    }

});



