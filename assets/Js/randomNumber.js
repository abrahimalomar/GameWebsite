
function generateUniqueRandomNumber() {
    var randomNumber = 0;
    do {
      randomNumber = Math.floor(Math.random() * 10) + 1;
    } while (circles.includes(randomNumber));
    return randomNumber
  
  }