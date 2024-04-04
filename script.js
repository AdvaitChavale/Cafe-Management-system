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


// new from here //
document.addEventListener('DOMContentLoaded', function() {
  const dishNameInputs = [
      document.getElementById('dishNameInput1'),
      document.getElementById('dishNameInput2'),
      document.getElementById('dishNameInput3')
    
  
  ];
  const priceInput = document.getElementById('priceInput');

  // Sample list of dishes with their prices
  const dishes = [
      { name: "Thali", price: 100 },
      { name: "Vada Pav", price: 15 },
      { name: "Aamras", price: 30 },
      { name: "Fried Rice", price: 60 },
      { name: "Tea/Coffee", price: 10 },
      { name: "Misal Pav", price: 50 }
  ];

  // Function to update price input based on dish name input
  function updatePriceInput() {
      let totalPrice = 0;
      dishNameInputs.forEach(input => {
          const inputValue = input.value.trim().toLowerCase();
          if (inputValue) {
              const matchingDishes = dishes.filter(dish => dish.name.toLowerCase().includes(inputValue));
              matchingDishes.forEach(matchingDish => {
                  totalPrice += matchingDish.price;
              });
          }
      });
      priceInput.value = totalPrice;
  }

  // Add event listeners to dish name inputs for autofill
  dishNameInputs.forEach(input => {
      input.addEventListener('input', updatePriceInput);
  });

  // Add event listener to form submission
  document.getElementById('orderForm').addEventListener('submit', function(event) {
      event.preventDefault();
      // Here you can handle form submission logic
      //alert(`Form submitted successfully!\nTotal Price: ${priceInput.value}`);
  });
});


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