let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{document.querySelector('#scroll-top').classList.remove('active');

  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 2000);
}
window.onload = fadeOut();

/* function autoComplete(){
  document.addEventListener('DOMContentLoaded', () => {
    let words = ['hello', 'baby', 'abracadabra', 'accoutrements'];
    let autocomplete = document.getElementById('autocomplete');
    let search = document.getElementById('search_');
  
    search.addEventListener('keyup', () => {
      if (search.value.length > 0) {
        let input = search.value;
        let suggestions = [];
  
        suggestions.push(input);
  
        let regex = new RegExp('^' + input + '.*', 'i');
  
        for (let i = 0; i < words.length; i++) {
          if (words[i].match(regex)) {
            suggestions.push(words[i].slice(input.length));
            break;
          }
        }
  
        autocomplete.innerHTML = suggestions.join('');
      }
    });
  
    search.addEventListener('keydown', (e) => {
      if (search.value === '' && e.keyboardEvent.keyCode === 8) {
        autocomplete.innerHTML = '';
      }
    });
  });
} */