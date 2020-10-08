// Remove tasks from view when checkmark is clicked
// taken from https://stackoverflow.com/questions/46665554/remove-parent-element-on-click-with-plain-javascript

var taskList = document.getElementsByClassName("tasks-checkmark");

for (var i = 0; i < taskList.length; i++) {
  taskList[i].addEventListener(
    "click",
    function (e) {
      e.currentTarget.parentNode.remove();
    },
    false
  );
}

// Modal Javascript

const showModalBtn = document.getElementById("btnAddTask");
const cntrModalAddTask = document.getElementById("contentModalAddTask");
const sectionMask = document.getElementById("mask");
const cancelModal = document.getElementById("closeModal");

showModalBtn.addEventListener("click", function () {
  cntrModalAddTask.classList.add("show");
  sectionMask.classList.add("show");
});

cancelModal.addEventListener("click", function () {
  cntrModalAddTask.classList.remove("show");
  sectionMask.classList.remove("show");
});

// Account Menu click to open and close

const showAccountMenu = document.getElementById("accountButton");
const menuAccount = document.getElementById("menuAccount");
const closeMenu = document.getElementById("closeMenu");

showAccountMenu.addEventListener("click", function () {
  menuAccount.classList.add("show-flex");
});

closeMenu.addEventListener("click", function () {
  menuAccount.classList.remove("show-flex");
});
