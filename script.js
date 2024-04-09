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
      //Here you can handle form submission logic
      //alert(`Form submitted successfully!\nTotal Price: ${priceInput.value}`);
  });
});

function sendMail(){
  let parms = {
      name : document.getElementById("userName").value,
      email : document.getElementById("email").value,
      tableNo : document.getElementById("tableNo").value,
      dish1 : document.getElementById("dishNameInput1").value,
      dish2 : document.getElementById("dishNameInput2").value,
      dish3 : document.getElementById("dishNameInput3").value,
      bill : document.getElementById("priceInput").value,
  }
  emailjs.send("service_roqptui","template_np0qxlf",parms).then(
    message => {    
        swal("Sucessful", "You clicked the button!", "success");
    }
  );
}


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

// function emailSend(){

// 	var userName = document.getElementById('Username').value;
// 	var dishNameInput1= document.getElementById('dishNameInput1').value;
//     var dishNameInput2= document.getElementById('dishNameInput2').value;
//     var dishNameInput3= document.getElementById('dishNameInput3').value;
//     var priceInput= document.getElementById('priceInput').value;
// 	var userEmail = document.getElementById('email').value;

// 	var messageBody = "Name " + userName +
// 	"<br/> dishes " +dishNameInput1 + dishNameInput2 + dishNameInput3+
//     "<br/> Total bill " +  priceInput +
// 	"<br/> Email " + email;
// 	Email.send({
//     Host : "\",
//     Username : "",
//     Password : "",
//     To : userEmail,
//     From : "",
//     Subject : "Your order is recieved",
//     Body : messageBody
// }).then(
//     message => {
//             console.log("Email sent successfully");
//             console.log(message);
//             swal("Successful", "Email sent successfully!", "success");
//         }
//     ).catch(
//         error => {
//             console.error("Error sending email:", error);
//             swal("Error", "Failed to send email. Please try again later.", "error");
//         }
//     );
// }
// let names = [
//   "Misal Pav",
//   "Samosa Pav",
//   "Vada Pav",
//   "Fried Rice",
//   "Noodles",
//   "Thali",
//   "Sandwich",
//   "Pizza",
//   "Tea",
//   "Coffee",
//   "Aamras",
// ];
// //Sort names in ascending order
// let sortedNames = names.sort();

// //reference
// let dishNameInput1 = document.getElementById("dishNameInput1");

// //Execute function on keyup
// dishNameInput1.addEventListener("keyup", (e) => {
//   //loop through above array
//   //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
//   removeElements();
//   for (let i of sortedNames) {
//     //convert input to lowercase and compare with each string

//     if (
//       i.toLowerCase().startsWith(dishNameInput1.value.toLowerCase()) &&
//       dishNameInput1.value != ""
//     ) {
//       //create li element
//       let listItem = document.createElement("li");
//       //One common class name
//       listItem.classList.add("list-items");
//       listItem.style.cursor = "pointer";
//       listItem.setAttribute("onclick", "displayNames('" + i + "')");
//       //Display matched part in bold
//       let word = "<b>" + i.slice(0, dishNameInput1.value.length) + "</b>";
//       word += i.slice(dishNameInput1.value.length);
//       //display the value in array
//       listItem.innerHTML = word;
//       document.querySelector(".list").appendChild(listItem);
//     }
//   }
// });
// function displayNames(value) {
//   dishNameInput1.value = value;
//   removeElements();
// }
// function removeElements() {
//   //clear all the item
//   let items = document.querySelectorAll(".list-items");
//   items.forEach((item) => {
//     item.remove();
//   });
// }


let names = [
  "Misal Pav",
  "Samosa Pav",
  "Vada Pav",
  "Fried Rice",
  "Noodles",
  "Thali",
  "Sandwich",
  "Pizza",
  "Tea",
  "Coffee",
  "Aamras",
];
// Sort names in ascending order
let sortedNames = names.sort();

// References to text inputs
let dishNameInputs = [
  document.getElementById("dishNameInput1"),
  document.getElementById("dishNameInput2"),
  document.getElementById("dishNameInput3")
];

// Execute function on keyup for each input
dishNameInputs.forEach((input, index) => {
  input.addEventListener("keyup", (e) => {
    // Get the corresponding list for this input
    let list = document.querySelector(".list-" + (index + 1));
    
    // Clear previous items
    removeElements(list);
    
    // Loop through names to display matching ones
    for (let i of sortedNames) {
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
        // Create li element
        let listItem = document.createElement("li");
        // One common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames('" + i + "', " + index + ")");
        // Display matched part in bold
        let word = "<b>" + i.slice(0, input.value.length) + "</b>";
        word += i.slice(input.value.length);
        // Display the value in array
        listItem.innerHTML = word;
        list.appendChild(listItem);
      }
    }
  });
});

function displayNames(value, index) {
  dishNameInputs[index].value = value;
  // Clear the list associated with this input
  removeElements(document.querySelector(".list-" + (index + 1)));
}

function removeElements(list) {
  // Clear all the items
  let items = list.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
