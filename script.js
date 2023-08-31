let buttons = document.querySelectorAll('button');
let buttonsArr = Array.from(buttons);

const texts = [
    {
        id: 'button_1',
        text: 'Lorem_1'
    },
    {
        id: 'button_2',
        text: 'Lorem_2'
    },
    {
        id: 'button_3',
        text: 'Lorem_3'
    },
    {
        id: 'button_4',
        text: 'Lorem_4'
    },
    {
        id: 'button_5',
        text: 'Lorem_5'
    },
    {
        id: 'button_6',
        text: 'Lorem_6'
    },
    {
        id: 'button_7',
        text: 'Lorem_7'
    },
    {
        id: 'button_8',
        text: 'Lorem_8'
    },
    {
        id: 'button_9',
        text: 'Lorem_9'
    },
    {
        id: 'button_10',
        text: 'Lorem_10'
    }
]

buttonsArr.forEach(button => {
    button.addEventListener('click', function (event) {
        button.toggleAttribute('open');
        showText(button);
    });

    button.addEventListener('blur', function(event){
        button.removeAttribute('open');
        hideText(button);
    });
    
});

function hideText(button){
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><circle opacity="0.7" cx="20" cy="20" r="20" fill=""/><path d="M20 15V25M15 20H25" stroke="white" stroke-width="2"/></svg>';
}
function showText(button){
    texts.forEach(text => {
        if(text.id === button.id){
            if(button.hasAttribute('open')){
                button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" fill="none">
                <path d="M0 1H10" stroke="white" stroke-width="2"/>
                </svg>${text.text}`;
            } else {
                hideText(button);
            }
        }
    });
};
