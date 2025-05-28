document.querySelectorAll('.dropdown-toggle').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var content = btn.nextElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      btn.textContent = "Skjul info";
    } else {
      content.style.display = "none";
      btn.textContent = "Vis mere";
    }
  });
});