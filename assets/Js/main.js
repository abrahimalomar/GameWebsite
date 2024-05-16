var massage=document.getElementById("massage");


function startGame() {

  if (validateForm()) {
    massage.classList.remove("error")
    document.getElementById("form").style.display = "none";
    document.getElementById("container").style.display = "block";
  
    const level = document.getElementById("level").value;
    let duration = document.getElementById("duration").value;
  
    currentLevel = parseInt(level)
  
    generateCircle(countCircle);
    document.getElementById("statistics").style.display = "none";
  
    let timerInterval = setInterval(function () {
      duration--;
      if (duration <= 0) {
        document.getElementById("container").style.display = "none"
        document.getElementById("statistics").style.display = "block";
        displayStatistics()
      } else {
        document.getElementById("timer").textContent = "Remaining time: " + duration + " seconds";
      }
    }, 1000);
  
  }else {

    massage.classList.add("error");
    massage.innerHTML="Error All fields are required";
    console.log(" field data.");
  }
  
}
  
  
  function generateCircle(countCircle) {
  
    var gameArea = document.getElementById("gameArea");
    gameArea.innerHTML = "";
  
    for (let i = 0; i < countCircle; i++) {
  
      const radius = calculateRadiusByLevel(currentLevel)
      const x = fixedX[i]
      const y = fixedY[i]
  
      const randomNumber = generateUniqueRandomNumber()
  
      gameArea.style.width = generateUniqueRandomNumber()
      gameArea.style.height = generateUniqueRandomNumber()
  
  
  
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.style.backgroundColor = `rgb(${fixedX[i]},${fixedY[i]},${i * 25})`;
      circle.style.color = "white";
  
  
      circle.style.width = radius * 2 + "px";
      circle.style.height = radius * 2 + "px";
      circle.style.borderRadius = radius + "px";
  
  
      circle.textContent = randomNumber;
      circle.style.position = "absolute";
      circle.style.left = x + "px";
      circle.style.top = y + "px";
  
      gameArea.appendChild(circle);
      maxCircles++
  
  
      lengthOfTime = calculateTimeLevel(currentLevel);
      setTimeout(() => {
        circle.textContent = "?";
      }, lengthOfTime * 1000);
      
      circles.push(randomNumber)
      circle.onclick = function () {
        compareNumber(randomNumber);
  
      }
  
    }
  }


  function validateForm() {
    var name = document.getElementById("name").value;
    var level = document.getElementById("level").value;
    var duration = document.getElementById("duration").value;
  
    if (name === "" || level === "" || duration === "") {
      return false;
    }
    return true;
  }
  