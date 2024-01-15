  var topInput = document.getElementById("topinput");
  var topButton = document.getElementById("topbtn");
  var middleDiv = document.getElementById("middle");
  var bottomInput = document.getElementById("bottominput");
  var bottomButton = document.getElementById("bottombtn");


  var storedUsername = "you"; 
  var currentUser = storedUsername;

  topButton.addEventListener("click", function () {
    storedUsername = topInput.value|| storedUsername; 
    currentUser = storedUsername; 
    topInput.value = ""; 
  });

  bottomButton.addEventListener("click", function () {
  var message = bottomInput.value.trim();

  if (message !== "") {
    var frame = document.querySelector('.hidden').cloneNode(true);
      
    if (currentUser === "you") {
      frame.classList.add('left');
    } else {
      frame.classList.add('right');
    }
     frame.classList.remove("hidden");

    frame.querySelector('.subtoop').textContent = currentUser + ": " + message;

    middleDiv.appendChild(frame);

    currentUser = currentUser === "you" ? storedUsername : "you";
    bottomInput.value = "";
      
      middleDiv.scrollTop = middleDiv.scrollHeight;
  }
});
