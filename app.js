const arrow_1 = document.querySelector('#arrow1');
const arrow_2 = document.querySelector('#arrow2');
const arrow_3 = document.querySelector('#arrow3');
const arrow_4 = document.querySelector('#arrow4');

const container_1 = document.querySelector('.testimonial-container1');
const container_2 = document.querySelector('.testimonial-container2');
const container_3 = document.querySelector('.testimonial-container3');
const container_4 = document.querySelector('.testimonial-container4');
const color_inactive = '#777';

arrow_1.addEventListener('click', () => {
  goToNextTestimonial(container_1, container_2, arrow_1);
});

arrow_2.addEventListener('click', () => {
  goToNextTestimonial(container_2, container_3, arrow_2);
});

arrow_3.addEventListener('click', () => {
  goToNextTestimonial(container_3, container_4, arrow_3);
});

arrow_4.addEventListener('click', () => {
  goToNextTestimonial(container_4, container_1, arrow_4);
});

const goToNextTestimonial = (previous, next, btn) => {
  // Testimonial header
  previous.children[0].classList.add('testimonial-header-inactive');
  // Testimonial avatar
  previous.children[1].children[0].style.filter = 'blur(2px)';
  // Testimonial author name
  previous.children[1].children[1].style.color = `${color_inactive}`;

  // Testimonial text quote elements
  Array.from(previous.children[1].children[2].children).forEach(
    ({ style }) => (style.color = `${color_inactive}`)
  );
  // Testimonial next element button icon
  btn.children[0].style.color = `${color_inactive}`;
  // Testimonial social icons
  Array.from(btn.parentElement.parentElement.children[0].children).forEach(
    ({ children }) => {
      children[0].style.color = `${color_inactive}`;
      children[0].style.border = `1px solid ${color_inactive}`;
    }
  );
  // Add the animation to the next testimonial
  next.classList.add('testimonial-active-animated');
  // Add the animation to the previous testimonial
  previous.classList.add('testimonial-inactive-animated');

  setTimeout(() => {
    // Testimonial header
    previous.children[0].classList.remove('testimonial-header-inactive');
    // Testimonial avatar
    previous.children[1].children[0].style.filter = '';
    // Testimonial author name
    previous.children[1].children[1].style.color = '';

    // Testimonial text quote elements
    Array.from(previous.children[1].children[2].children).forEach(
      ({ style }) => (style.color = '')
    );
    // Testimonial next element button icon
    btn.children[0].style.color = '';
    // Testimonial social icons
    Array.from(btn.parentElement.parentElement.children[0].children).forEach(
      ({ children }) => {
        children[0].style.color = '';
        children[0].style.border = '';
      }
    );
    // Add the avtive class to the next testimonial
    next.classList.add('testimonial-active');
    // Remove the active class to the previous testimonial
    previous.classList.remove('testimonial-active');
    // Remove the inactive animated class to the previous testimonial
    previous.classList.remove('testimonial-inactive-animated');
    // Remove the active animated class to the next testimonial
    next.classList.remove('testimonial-active-animated');
  }, 1400);
};
