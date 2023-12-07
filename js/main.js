const numInput = document.querySelector('input');
const result = document.querySelector('.result');

const generatedNum = Math.floor(Math.random() * 20 + 1);

const checkInput = () => {
  if (numInput.value > generatedNum) {
      result.innerHTML = 'The generated number is lower';
  } else if (numInput.value < generatedNum) {
    result.innerHTML = 'The generated number is bigger';
  } else {
    result.innerHTML = 'You win!&#127881; <br/> Reset page to play again!';
    } 
      
}