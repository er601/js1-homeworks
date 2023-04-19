var incBtn = document.querySelector('#inc');
var decBtn = document.querySelector('#dec');
var resBtn = document.querySelector('#res');
var number = document.querySelector('#count');

var count= 0;

function style(count){
    if (count > 0){
        number.style.color = "green"
    }
    else if (count === 0){
        number.style.color = "grey"
    }
    else {
        number.style.color = "red"
    }
}

incBtn.addEventListener('click', function (){
    count++;
    number.innerText = count;
    style(count);
});

decBtn.addEventListener('click', function (){
    count--;
    number.innerText = count;
    style(count);
});

resBtn.addEventListener('click', function (){
    count = 0;
    number.innerText = count;
    style(count);
});
