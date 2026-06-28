// FAQ Accordion — only one open at a time
document.querySelectorAll('details').forEach(function(detail) {
  detail.addEventListener('toggle', function() {
    if (detail.open) {
      document.querySelectorAll('details[open]').forEach(function(other) {
        if (other !== detail) other.removeAttribute('open');
      });
    }
  });
});
