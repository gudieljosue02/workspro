/* WORKPRO'S marketing homepage — icon rendering + quote-form success state. */

// Render Lucide icons (replaces every <i data-lucide="…"> with an inline SVG).
if (window.lucide) {
  window.lucide.createIcons();
}

// Free-quote form: submitting swaps the form for the success alert.
// There is no backend yet — wire this up to a real endpoint when one exists.
var form = document.getElementById('quote-form');
var success = document.getElementById('quote-success');

if (form && success) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.hidden = true;
    success.hidden = false;
    if (window.lucide) {
      window.lucide.createIcons();
    }
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
