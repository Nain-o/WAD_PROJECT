
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('orderForm');
  if (!form) return;

  
  const dateInput = document.getElementById('of-date');
  if (!dateInput) return;

  const today = new Date();
  dateInput.min = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const getMinDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 5);
    d.setHours(0, 0, 0, 0);
    return d;
  };

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
        // Parse as local date (YYYY-MM-DD) to avoid timezone shift
        const [year, month, day] = v.split('-').map(Number);
        const chosen = new Date(year, month - 1, day);
        return chosen >= getMinDate();
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
    el.addEventListener('change', () => validateField(key));
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
      const firstInvalidKey = Object.keys(fields).find((key) => !validateField(key));
      if (firstInvalidKey) fields[firstInvalidKey].el.focus();
    }
  });
});