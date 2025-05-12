
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
  const phoneNumber = '+381' + ' ' + '60' + ' ' + '7205190';
  const phoneLink = '+381607205190'; // For the tel: link (used only for placeholder)
  const phonePlaceholder = document.querySelector('.phone-placeholder');
  if (phonePlaceholder) {
      phonePlaceholder.href = `tel:${phoneLink}`;
      phonePlaceholder.textContent = phoneNumber;
  }
  const callButton = document.querySelector('.call-button');
  if (callButton) {
      callButton.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent default link behavior (since href="#")
          // Copy the phone number to the clipboard
          navigator.clipboard.writeText(phoneNumber).then(() => {
              // Temporarily change button text to "Copied!"
              const originalText = callButton.textContent;
              callButton.textContent = 'Copied!';
              callButton.classList.add('copied'); // Add copied class for styling
              callButton.disabled = true; // Disable button to prevent multiple clicks
          }).catch(err => {
              console.error('Failed to copy phone number: ', err);
              // Fallback: If clipboard API fails, show an alert (optional)
              alert('Failed to copy phone number. Please copy manually: ' + phoneNumber);
          });
      });
  }

  // Construct the email address
  const contactEmail = 'darkolun' + '@' + 'gmail' + '.' + 'com';
  const emailPlaceholder = document.querySelector('.email-placeholder');
  if (emailPlaceholder) {
      emailPlaceholder.href = `mailto:${contactEmail}`;
      emailPlaceholder.textContent = contactEmail;
  }
  const emailButton = document.querySelector('.email-button');
  if (emailButton) {
      emailButton.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent default link behavior (since href="#")
          // Copy the email to the clipboard
          navigator.clipboard.writeText(contactEmail).then(() => {
              // Temporarily change button text to "Copied!"
              const originalText = emailButton.textContent;
              emailButton.textContent = 'Copied!';
              emailButton.classList.add('copied'); // Add copied class for styling
              emailButton.disabled = true; // Disable button to prevent multiple clicks
          }).catch(err => {
              console.error('Failed to copy email: ', err);
              // Fallback: If clipboard API fails, show an alert (optional)
              alert('Failed to copy email. Please copy manually: ' + contactEmail);
          });
      });
  }

  // Construct the emaill address
  const emaill = 'darkolun' + '@' + 'gmail' + '.' + 'com';
  const emaillPlaceholder = document.querySelector('.emaill-placeholder');
  emaillPlaceholder.href = `mailto:${emaill}`;
  emaillPlaceholder.textContent = emaill;
});


document.fonts.ready.then(() => {
  document.querySelector('.typewriter').classList.add('start-animation');
});