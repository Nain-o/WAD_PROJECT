
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const fields = {
    name: {
      el: document.getElementById('cf-name'),
      isValid: (v) => v.trim().length > 1
    },
    email: {
      el: document.getElementById('cf-email'),
      isValid: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
    },
    reason: {
      el: document.getElementById('cf-reason'),
      isValid: (v) => v !== ''
    },
    message: {
      el: document.getElementById('cf-message'),
      isValid: (v) => v.trim().length >= 10
    }
  };

  const successAlert = document.getElementById('cf-success');

  function validateField(key) {
    const { el, isValid } = fields[key];
    const valid = isValid(el.value);
    el.classList.toggle('is-invalid', !valid);
    el.classList.toggle('is-valid', valid);
    return valid;
  }

  // Live feedback as the visitor types or moves between fields
  Object.keys(fields).forEach((key) => {
    const { el } = fields[key];
    el.addEventListener('input', () => validateField(key));
    el.addEventListener('blur', () => validateField(key));
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    successAlert.classList.add('d-none');

    const allValid = Object.keys(fields)
      .map(validateField)
      .every(Boolean);

    if (allValid) {
      successAlert.classList.remove('d-none');
      form.reset();
      Object.values(fields).forEach(({ el }) => el.classList.remove('is-valid'));
      successAlert.focus();
    } else {
      // Focus the first invalid field so keyboard/screen-reader users land on it
      const firstInvalidKey = Object.keys(fields).find((key) => !validateField(key));
      if (firstInvalidKey) fields[firstInvalidKey].el.focus();
    }
  });
});
