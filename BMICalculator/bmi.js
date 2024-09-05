const Form = document.querySelector('form');

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

Form.addEventListener('submit',function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const results  = document.querySelector('#Resultss');

    if(height === '' || height< 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid Height ${height}`;
    } else if(weight === '' || weight< 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid Weight ${weight}`;
    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //  show the results
        results.innerHTML = `<span>${bmi}</span>`;
        if (bmi < 18.6) {
            results.innerHTML = `<span>Under Weight ${bmi} </span>`;
        } else if(bmi< 24.9 && bmi > 18.6) {
            results.innerHTML = `<span>Normal Range ${bmi} </span>`;
        }else{
            results.innerHTML = `<span>Overweight ${bmi} </span>`;
        }
    }
});
