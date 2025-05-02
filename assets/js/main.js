
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// Stop YouTube video when modal is closed
document.addEventListener('DOMContentLoaded', function () {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(function (modal) {
      modal.addEventListener('hidden.bs.modal', function () {
          const iframe = modal.querySelector('iframe');
          if (iframe) {
              iframe.src = iframe.src; // Reset src to stop playback
          }
      });
  });
});



document.querySelectorAll('.open-video').forEach(el => {
  el.addEventListener('click', function () {
    const videoUrl = this.getAttribute('data-video') + '?autoplay=1';
    const targetId = this.getAttribute('data-target');
    const container = document.querySelector(targetId);

    if (container) {
      const iframe = document.createElement('iframe');
      iframe.src = videoUrl;
      iframe.classList.add('w-100', 'h-100');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'autoplay; encrypted-media');

      container.innerHTML = ''; // clear any old iframe
      container.appendChild(iframe);
    }
  });
});

// Clear all video containers on any modal hide
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('hidden.bs.modal', () => {
    const container = modal.querySelector('[id^="videoContainer"]');
    if (container) container.innerHTML = '';
  });
});



document.addEventListener('DOMContentLoaded', function() {
  // Construct the phone number
  const phoneNumber = '+381' + ' ' + '60' + ' ' + '7777777';
  const phoneLink = '381607777777'; // For the tel: link
  const phonePlaceholder = document.querySelector('.phone-placeholder');
  phonePlaceholder.href = `tel:${phoneLink}`;
  phonePlaceholder.textContent = phoneNumber;

  // Construct the email address
  const email = 'Darkolun' + '@' + 'gmail' + '.' + 'com';
  const emailPlaceholder = document.querySelector('.email-placeholder');
  emailPlaceholder.href = `mailto:${email}`;
  emailPlaceholder.textContent = email;

  // Construct the emaill address
  const emaill = 'info' + '@' + 'kinokamera' + '.' + 'rs';
  const emaillPlaceholder = document.querySelector('.emaill-placeholder');
  emaillPlaceholder.href = `mailto:${emaill}`;
  emaillPlaceholder.textContent = emaill;
});