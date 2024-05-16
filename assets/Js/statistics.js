

function displayStatistics() {

  document.getElementById("statistics").style.display = "block";
  document.getElementById("container").style.display = "none";
  const name = document.getElementById("name").value;
  const time = document.getElementById("duration").value
  document.getElementById("fullName").textContent = name;
  document.getElementById("trueAnswers").textContent = correctAnswers;
  document.getElementById("falseAnswers").textContent = wrongAnswers;
  document.getElementById("maxCircles").textContent = maxCircles;
  document.getElementById("durationDisplay").textContent = time + " seconds";
}
