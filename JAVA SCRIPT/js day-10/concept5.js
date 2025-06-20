const revelBtn = document.querySelector('.reveal-btn');
console.log(revelBtn)

const hiddenContent = document.querySelector('.hidden-content');
console.log(hiddenContent)

function revealContent(){

    if(hiddenContent.classList.contains('revel-btn')){
        hiddenContent.classList.remove('revel-btn');
    }
    else{
        hiddenContent.classList.add('revel-btn');
    }
}

revelBtn.addEventListener('click', revealContent)

/*
revelBtn.addEventListener('click', function () {
    const revealText = document.querySelector('.hidden-content');
    revealText.style.display = 'block';
    
});
*/