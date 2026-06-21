/* ==========================================================================
   The Hearth & Crumb — order.html
   Form validation for the custom order / catering request form.
   Also enforces the bakery's 5-day minimum notice rule on the date field.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orderForm');
  if (!form) return;

  // Set the minimum date on the date picker to today + 5 days
  const dateInput = document.getElementById('of-date');
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 5);
  dateInput.min = minDate.toISOString().split('T')[0];

  const fields = {
    name: {
      el: document.getElementById('of-name'),
      isValid: (v) => v.trim().length > 1
    },
    phone: {
      el: document.getElementById('of-phone'),
      isValid: (v) => /^[\d\s\+\-]{7,15}$/.test(v.trim())
    },
    email: {
      el: document.getElementById('of-email'),
      isValid: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
    },
    type: {
      el: document.getElementById('of-type'),
      isValid: (v) => v !== ''
    },
    date: {
      el: dateInput,
      isValid: (v) => {
        if (!v) return false;
        const chosen = new Date(v);
        return chosen >= minDate;
      }
    },
    guests: {
      el: document.getElementById('of-guests'),
      isValid: (v) => parseInt(v, 10) >= 1
    },
    details: {
      el: document.getElementById('of-details'),
      isValid: (v) => v.trim().length >= 20
    }
  };

  const successAlert = document.getElementById('of-success');

  function validateField(key) {
    const { el, isValid } = fields[key];
    const valid = isValid(el.value);
    el.classList.toggle('is-invalid', !valid);
    el.classList.toggle('is-valid', valid);
    return valid;
  }

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
      // Reset date min after reset
      dateInput.min = minDate.toISOString().split('T')[0];
    } else {
      const firstInvalidKey = Object.keys(fields).find((key) => !validateField(key));
      if (firstInvalidKey) fields[firstInvalidKey].el.focus();
    }
  });
});
