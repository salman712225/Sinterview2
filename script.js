// FAQ Toggle Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    // Toggle active class to show/hide the answer
    item.classList.toggle('active');
  });
});
