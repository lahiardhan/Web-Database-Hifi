const inputPass = document.getElementById('password');
const seePass = document.getElementById('seePassButton');
const seePassIcon = document.getElementById('seePassIcon') ;
seePass.onclick = () => {
   if(inputPass.getAttribute('type') === 'password') {
      inputPass.setAttribute('type', 'text');
      seePassIcon.classList.remove('fa-eye');
      seePassIcon.classList.add('fa-eye-slash');
   } else {
      inputPass.setAttribute('type', 'password');
      seePassIcon.classList.remove('fa-eye-slash');
      seePassIcon.classList.add('fa-eye');
   }
}

// target element that will be dismissed
const targetEl = document.getElementById('targetElement');

// options object
const options = {
  triggerEl: document.getElementById('triggerElement'),
  transition: 'transition-opacity',
  duration: 1000,
  timing: 'ease-out',

  // callback functions
  onHide: (context, targetEl) => {
    console.log('element has been dismissed')
    console.log(targetEl)
  }
};

const dismiss = new Dismiss(targetEl, options);
// hide the target element
dismiss.hide();