// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const modal = document.getElementById("modal")
const addTaskButton = document.getElementById(`add-task`)
console.log(addTaskButton.innerHTML)
const taskForm = document.getElementById("taskForm")
// Todo: create a function to generate a unique task id
function generateTaskId() {
    console.log("generateTaskId")
    var newID = Math.random()
    console.log("New ID: ", newID)
    return newID
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    //console.log("Createing task card with task: ", task)

    

    
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    console.log("Rendering my task list");
    // for loop
    console.log(taskList)
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault()
    console.log("Adding task should happen now!")
    var title = document.getElementById("taskTitle").value
    var description = document.getElementById("taskDescription").value
    var deadline = document.getElementById("taskDeadline").value
    console.log("Title: ", title)
    console.log("description: ", description)
    console.log("deadline: ", deadline)
    // don't forget to generate the task ID!
    var newTask = {
        title: title,
        description,
        deadline,
        id: generateTaskId()
    }
    console.log(newTask)
    taskList.push(newTask)
    localStorage.setItem("tasks", JSON.stringify(taskList))
    modal.style.display = "none"
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    console.log(taskList)
    // 
    if(taskList === null){
        localStorage.setItem("tasks",  JSON.stringify([]))
        taskList = []
    }
    console.log("Add task button: ", addTaskButton)
    addTaskButton.addEventListener('click', function(){
        console.log("Clicked!")
        modal.style.display = "block"
    })
    taskForm.addEventListener("submit", handleAddTask)
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

      renderTaskList()
});

