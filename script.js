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
  Swal.fire({
    title: "Reset Angka",
    text: "Apakah Anda yakin ingin mereset angka?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, Reset!",
  }).then((result) => {
    if (result.isConfirmed) {
      number = 0;
      document.querySelector(".overlay").innerText = number;
    }
  });
}
function editNumber() {
  document.querySelector(".edit-overlay").style.display = "block";
  document.querySelector(".container").style.filter = "blur(10px)";
  document.getElementById("newNumber").value = number;
}
function confirmEdit() {
  let newNumber = document.getElementById("newNumber").value;
  if (newNumber !== null && !isNaN(newNumber) && newNumber.trim() !== "") {
    if (parseInt(newNumber) === number) {
      number = parseInt(newNumber);
      document.querySelector(".overlay").innerText = number;
    } else {
      Swal.fire({
        title: "Ubah Angka",
        text: "Apakah Anda yakin ingin mengubah angka?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Ubah!",
      }).then((result) => {
        if (result.isConfirmed) {
          number = parseInt(newNumber);
          document.querySelector(".overlay").innerText = number;
        }
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Masukkan angka yang valid",
    });
  }
  document.querySelector(".edit-overlay").style.display = "none";
  document.querySelector(".container").style.filter = "none";
}
function cancelEdit() {
  document.querySelector(".edit-overlay").style.display = "none";
  document.querySelector(".container").style.filter = "none";
}
