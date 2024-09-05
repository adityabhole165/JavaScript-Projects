const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function (e) {
        console.log(e);
        console.log(e.target);
        let val= e.target.id;
        switch (val) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            case 'aqua':
                body.style.backgroundColor = e.target.id;
                break;
        }
    });
});
// buttons.forEach(function (button) {
//     console.log(button);
//     button.addEventListener('click',function (e) {
//         console.log(e);
//         console.log(e.target);
//         if (e.target.id === 'grey') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'white') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'blue') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'yellow') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'aqua') {
//             body.style.backgroundColor = e.target.id;
//         }
//     });
// });