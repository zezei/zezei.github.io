function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      console.log(elementTop)
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("animate-fade-left");
        reveals[i].classList.remove("reveal")
      }
    }
  }

  window.addEventListener("scroll", reveal);
