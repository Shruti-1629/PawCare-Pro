const petData = {
  dog: {name:"Dog", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2z0ERwXQUqH29urPuzWueLXKhJAY6SMyAA&s", page:"dog.html"},
  cat: {name:"Cat", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYPMFW3Z1zG9D7GOU7p_GJYrkfbMpsGdXjA&s", page:"cat.html"},
  bird:{name:"Bird",img:"https://academy.allaboutbirds.org/wp-content/uploads/2015/07/Painted_Bunting_male_Birdhsare_Tim_Hopwood.jpg", page:"bird.html"},
  fish:{name:"Fish",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2X53B7GZW52F1qjLvPQVTct3mjg0GxtRWA&s", page:"fish.html"},
  rabbit:{name:"Rabbit",img:"https://blog.petloverscentre.com/wp-content/uploads/2025/01/Rabbit-Breeds.png", page:"rabbit.html"},
  hamster:{name:"Hamster",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZMokAr8GgvLIkGy07OfMzOFu5_Rpuqxg5w&s", page:"hamster.html"},
  turtle:{name:"Turtle",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUupL5U-fTxaQXPOla46UU41E2EKWv1bp2UQ&s", page:"turtle.html"},
  parrot:{name:"Parrot",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMg6tsMpakDXYv5KQsd9pvv114gIaE4NUXcQ&s", page:"parrot.html"}
};

function openPet(pet){
  document.getElementById("popupImg").src = petData[pet].img;
  document.getElementById("popupTitle").innerText = petData[pet].name;
  document.getElementById("popup").style.display = "flex";

  setTimeout(()=>{
    window.location.href = petData[pet].page;
  },1500);
}

function handleExplore() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    // User already signed up → go to services
    window.location.href = "services.html";
  } else {
    // User just exploring → force signup
    alert("Please sign up to access our services 🐾");
    window.location.href = "signup.html";
  }
}
 function logout(){
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully");
    window.location.href = "index.html";
 }