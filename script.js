document.querySelectorAll(".container1").forEach(container => {
    container.addEventListener("click", () => {
      const icon = container.querySelector(".icon");
      const answer = container.querySelector(".answer");
  
      // Toggle active classes
      icon.classList.toggle("active");
      answer.classList.toggle("active");
    });
  });
  