function onClickEvent() {
    const el = document.createElement('p');
    el.innerText = 'Clicked the button';
    document.querySelector('.container').appendChild(el);
    }
    document.querySelector('button').onclick = onClickEvent;