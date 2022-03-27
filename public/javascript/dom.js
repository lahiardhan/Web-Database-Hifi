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