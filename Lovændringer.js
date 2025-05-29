document.querySelectorAll('.dropdown-toggle').forEach(function(el) {
  el.addEventListener('click', function(e) {
    // Undgå at åbne linket, hvis der klikkes på <a>
    if (e.target.tagName.toLowerCase() === 'a') return;
    var content = el.nextElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});

