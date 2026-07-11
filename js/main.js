/* WORKSPRO marketing homepage — icon rendering + quote-form submission. */

// Render Lucide icons (replaces every <i data-lucide="…"> with an inline SVG).
if (window.lucide) {
  window.lucide.createIcons();
}

// Free-quote form: submits via FormSubmit and emails the request to WORKSPRO.
var FORM_ENDPOINT = 'https://formsubmit.co/ajax/gudiel@workspro.homes';

var form = document.getElementById('quote-form');
var success = document.getElementById('quote-success');
var failure = document.getElementById('quote-error');

if (form && success && failure) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    failure.hidden = true;

    var button = form.querySelector('button[type="submit"]');
    var originalLabel = button.innerHTML;
    button.disabled = true;
    button.textContent = 'Sending…';

    var data = {
      _subject: 'New quote request from workspro.homes',
      _template: 'table',
      _captcha: 'false',
    };
    new FormData(form).forEach(function (value, key) {
      data[key] = value;
    });

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        form.hidden = true;
        success.hidden = false;
        if (window.lucide) window.lucide.createIcons();
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .catch(function () {
        failure.hidden = false;
        if (window.lucide) window.lucide.createIcons();
        button.disabled = false;
        button.innerHTML = originalLabel;
        if (window.lucide) window.lucide.createIcons();
      });
  });
}
