const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( function(button){
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id ==='grey')
        {
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id ==='white')
        {
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id ==='blue')
        {
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id ==='green')
        {
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id ==='purple')
        {
            body.style.backgroundColor = event.target.id;
        }

        //using switch case
        /* const color = event.target.id;
        switch (color) {
        case event.target.id:
            body.style.backgroundColor = event.target.id;
            break;
        case event.target.id:
            body.style.backgroundColor = event.target.id;
            break;
        case event.target.id:
            body.style.backgroundColor = event.target.id;
            break;
        case event.target.id:
            body.style.backgroundColor = event.target.id;
            break;
        default:
            break;
        } */
        /* const color = event.target.id;
        switch (color) {
        case 'grey':
            body.style.backgroundColor = 'grey';
            break;
        case 'white':
            body.style.backgroundColor = 'white';
            break;
        case 'blue':
            body.style.backgroundColor = 'blue';
            break;
        case 'green':
            body.style.backgroundColor = 'green';
            break;
        default:
            break;
        } */
    })
})
console.log('hello');