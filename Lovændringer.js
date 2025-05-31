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

document.querySelectorAll('.del-toggle').forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    var content = toggle.nextElementSibling;
    var isOpen = content.style.display === "block";
    if (!isOpen) {
      content.style.display = "block";
      toggle.classList.add('open');
    } else {
      content.style.display = "none";
      toggle.classList.remove('open');
    }
  });
});

// Sørg for at del-content vises fra start (eller sæt style="display:block;" i HTML)
document.querySelectorAll('.del-content').forEach(function(content) {
  content.style.display = "block";
});

