'use strict';

// ==================== Toogle Mobil Menu ======================== //

const bodyPage = document.querySelector('body');
const navToogleOpen = document.querySelector('.js-nav-toggle');
navToogleOpen.onclick = function(){
  bodyPage.classList.toggle("menu-open");
}

// ================= Animate Title =================== //

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}
let options = {
  threshold: [0.5] 
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

// =================== Scroll To Anchor ==================== // 

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: 'start'
    })
  })
}

// =================== Checkbox and Button ==================== //

const checkbox = document.getElementById('formcheck');
const button = document.getElementById('formbutton');

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', true);
  }
});

// =================== Phone Mask ==================== //

document.addEventListener("DOMContentLoaded", function () {
  let eventCalllback = function (e) {
    let el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
    if (clearVal !== 'false' && e.type === 'blur') {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = '';
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
  }
  let phone_inputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phone_inputs) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});
