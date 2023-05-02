const yearEL = document.querySelector('.year');
const currentyear = new Date().getFullYear();
yearEL.textContent = currentyear;

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks);
// allLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = link.getAttribute('href');

//     if (href === '#')
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });

//     if (href !== '#' && href.startsWith('#')) {
//       const sectionEl = document.querySelector(href);
//       console.log(sectionEl);
//       sectionEl.scrollIntoView({ behavior: 'smooth' });
//     }

//     if (link.classList.contains('main-nav-link'))
//       headerEl.classList.toggle('nav-open');
//   });
// });

const sectionHeroEl = document.querySelector('.carousel');

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
observer.observe(sectionHeroEl);
