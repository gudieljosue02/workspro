/* WORKSPRO marketing homepage — quote-form submission. */

// Free-quote form: submits via FormSubmit and emails the request to WORKSPRO.
var FORM_ENDPOINT = 'https://formsubmit.co/ajax/gudiel@workspro.homes';

var form = document.getElementById('quote-form');
var success = document.getElementById('quote-success');
var failure = document.getElementById('quote-error');

if (form && success && failure) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Belt-and-suspenders: never send an empty request even if the
    // browser skipped native validation for any reason.
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

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
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      })
      .catch(function () {
        failure.hidden = false;
        button.disabled = false;
        button.innerHTML = originalLabel;
      });
  });
}
