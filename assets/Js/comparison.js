
function compareNumber(clickedNumber) {

    circles.sort(function (a, b) {
      return a - b;
    });
  
    if (clickedNumber === circles[currentCircleIndex]) {
      successful.currentTime = 0;
      successful.play();
      correctAnswers++;
      countCircle++;
  
      circles.splice(0, circles.length);
  
  
      if (currentLevel < 3) {
        currentLevel++;
      }
      generateCircle(countCircle)
  
    } else {
      Failed.play();
      wrongAnswers++;
      countCircle--;
  
      circles.splice(0, circles.length);
  
      if (currentLevel > 0) {
        currentLevel--;
      }
      generateCircle(countCircle)
    }
  }