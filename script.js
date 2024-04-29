let number = 0;
function increaseNumber() {
  number++;
  if (number < 0) {
    number = 0;
  }
  document.querySelector(".overlay").innerText = number;
  document.querySelector(".overlay").style.animation = "none";
  void document.querySelector(".overlay").offsetWidth;
  document.querySelector(".overlay").style.animation = "popUp 0.5s ease";
}
function decreaseNumber() {
  number--;
  if (number < 0) {
    number = 0;
  }
  document.querySelector(".overlay").innerText = number;
  document.querySelector(".overlay").style.animation = "none";
  void document.querySelector(".overlay").offsetWidth;
  document.querySelector(".overlay").style.animation = "popUp 0.5s ease";
}
function resetNumber() {
  number = 0;
  document.querySelector(".overlay").innerText = number;
}
function editNumber() {
  document.querySelector(".edit-overlay").style.display = "block";
  document.querySelector(".container").style.filter = "blur(10px)";
}
function confirmEdit() {
  let newNumber = document.getElementById("newNumber").value;
  if (newNumber !== null && !isNaN(newNumber) && newNumber.trim() !== "") {
    number = parseInt(newNumber);
    document.querySelector(".overlay").innerText = number;
  } else {
    alert("Masukkan angka yang valid");
  }
  document.querySelector(".edit-overlay").style.display = "none";
  document.querySelector(".container").style.filter = "none";
}
function cancelEdit() {
  document.querySelector(".edit-overlay").style.display = "none";
  document.querySelector(".container").style.filter = "none";
}
