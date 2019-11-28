const nextBtn = document.querySelector("#next");
const testimonialContainer = document.querySelector(".testimonial-container");
const testimonialGhost = document.querySelector(".testimonial-ghost-container");
const testimonials = [
  {
    name: "Sarah Drucker",
    text:
      "Working with John Doe was a real pleasure, he helps me extending my business online.",
    avatar: "https://shorturl.at/eqyGW"
  },
  {
    name: "Nicolas Jaylen",
    text:
      "My business was broken, then i start working with John Doe, and now everything works fine.",
    avatar: "https://shorturl.at/ptC58"
  },
  {
    name: "Awa Fall",
    text:
      "John Doe helps me a lot from designing my website to make it live in just 5 weeks.",
    avatar: "https://shorturl.at/lwBY1"
  },
  {
    name: "Aziz Kamara",
    text:
      "Collaborate with John Doe was the best decision i ever made. He is great and professional.",
    avatar: "https://shorturl.at/gjxN5"
  }
];

let counter = 0;

const handleFirstTestimonial = () => {
  // image selection
  testimonialContainer.children[1].children[0].src = testimonials[0].avatar;
  // title selection
  testimonialContainer.children[1].children[1].innerHTML = testimonials[0].name;
  // text selection
  testimonialContainer.children[1].children[2].innerHTML = `
  <i class="fas fa-quote-left"></i>
  ${testimonials[0].text}
  <i class="fas fa-quote-right"></i>
  `;
};

const activeTestimonial = () => {
  testimonialContainer.classList.add("testimonial-active-animated");
  // image selection
  testimonialContainer.children[1].children[0].src =
    testimonials[counter].avatar;
  // title selection
  testimonialContainer.children[1].children[1].innerHTML =
    testimonials[counter].name;
  // text selection
  testimonialContainer.children[1].children[2].innerHTML = `<i class="fas fa-quote-left"></i>
  ${testimonials[counter].text}
  <i class="fas fa-quote-right"></i>`;

  setTimeout(() => {
    // Remove the active animated class
    testimonialContainer.classList.remove("testimonial-active-animated");
  }, 1400);
};

const inactiveTestimonial = () => {
  testimonialGhost.classList.add("testimonial-inactive-animated");
  let newCounter = counter;
  if (newCounter === 0) {
    newCounter = testimonials.length;
  }
  // image selection
  testimonialGhost.children[1].children[0].src =
    testimonials[newCounter - 1].avatar;
  // title selection
  testimonialGhost.children[1].children[1].innerHTML =
    testimonials[newCounter - 1].name;
  // text selection
  testimonialGhost.children[1].children[2].innerHTML = `<i class="fas fa-quote-left"></i>
  ${testimonials[newCounter - 1].text}
  <i class="fas fa-quote-right"></i>`;
  setTimeout(() => {
    // Remove the active animated class
    testimonialGhost.classList.remove("testimonial-inactive-animated");
  }, 1400);
};

nextBtn.addEventListener("click", () => {
  if (counter === testimonials.length - 1) {
    counter = 0;
    inactiveTestimonial();
    activeTestimonial();
  } else {
    counter++;
    inactiveTestimonial();
    activeTestimonial();
  }
});

handleFirstTestimonial();
