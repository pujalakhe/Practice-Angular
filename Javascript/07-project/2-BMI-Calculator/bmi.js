const form = document.querySelector('form');

//this usecase will give empty value
//const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) 
  {
    result.innerHTML = `${height} is not a valid input for height.`;
  } 
  else if (weight === '' || weight < 0 || isNaN(weight))
  {
    result.innerHTML = `${weight} is not a valid input for weight.`;
  } 
  else 
  {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
      //result.innerHTML = `<span>Your BMI index is ${bmi}</span>`
      if(bmi < 18.6)
      {
        result.innerHTML = `<span>User's acquired bmi is ${bmi}, which concludes user to be under weight<span>`
      }
      else if (bmi > 24.9)
      {
        result.innerHTML = `<span>User's acquired bmi is ${bmi}, which concludes user to be  overweight<span>`
      }
      else if(bmi >= 18.6 && bmi <= 24.9)
        {
          result.innerHTML = `<span>User's acquired bmi is ${bmi}, which concludes user to be normal weight<span>`
        }
    
  }
});
