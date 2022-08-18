let target = document.querySelectorAll('.news');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

function entry(entries) {
  entries.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('opacity');
    }
  });
}

let observer = new IntersectionObserver(entry, options);

target.forEach(i => {
    observer.observe(i)
})

//безкінечний скролінг теж робиться за допомогою IntersectionObserver, але я не встигла