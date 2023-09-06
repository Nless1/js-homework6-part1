function greet(Danil) {
  return 'Hello '  + 'Danil';
}

const result = greet()
console.log(result);

//======================

function Numbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      console.log(numbers[i]);
    }
  }
}


const numbers = [13, 2, 10, 20, 27, 3, 5];
Numbers(numbers); 

//======================

