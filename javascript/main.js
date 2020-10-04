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
