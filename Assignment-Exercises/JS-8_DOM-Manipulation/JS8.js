// your code starts here

const buttonMinus = document.querySelector("#button-subtract");
const buttonAdd = document.querySelector("#button-add");
const counter = document.querySelector("#counter-text");

buttonAdd.addEventListener('click', function(){
    let new_count = parseInt(counter.innerHTML) + 1;
    console.log(new_count);
    counter.innerHTML = new_count;
})

buttonMinus.addEventListener('click', function(){
    if (parseInt(counter.innerHTML) === 0){
        pass
    }
    else{
        new_count = parseInt(counter.innerHTML) - 1;
        counter.innerHTML = new_count;
    }
})