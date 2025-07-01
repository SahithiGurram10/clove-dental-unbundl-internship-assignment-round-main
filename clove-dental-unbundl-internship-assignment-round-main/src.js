// ===== Book Appointment button alert (example interactivity) =====
const bookButtons = document.querySelectorAll('.common-btn');

bookButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Prevent form submit buttons from alerting
    if (!btn.classList.contains('submit-btn')) {
      alert('Booking Appointment...');
    }
  });
});

// ===== Form validation (basic) =====
const forms = document.querySelectorAll('.form');

forms.forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    let valid = true;

    inputs.forEach(input => {
      if (input.type !== 'checkbox' && input.value.trim() === '') {
        input.style.border = '1px solid red';
        valid = false;
      } else {
        input.style.border = '';
      }
    });

    const checkbox = form.querySelector('.form-check-box');
    if (!checkbox.checked) {
      alert("Please accept the terms and conditions.");
      valid = false;
    }

    if (valid) {
      alert('Form submitted successfully!');
      form.reset();
    }
  });
});

// ===== Smooth scroll for internal links (if any) =====
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Optional: Scroll animation for stats section =====
const statContainers = document.querySelectorAll('.stat-container');

const showStatsOnScroll = () => {
  const scrollY = window.scrollY + window.innerHeight;

  statContainers.forEach((el, i) => {
    if (el.offsetTop < scrollY) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', showStatsOnScroll);
