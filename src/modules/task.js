import { addNew, showTask } from "./dom";
import { addTaskToProjetArray } from "./projects";
import { returnArrayIndex } from "./projects";

function submitListener () {
    const form = document.querySelector('#form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask();
        addNew();
    })
}

function removeTaskListener () {
    const checkBtn = document.querySelector('.checkBtn')
    console.log(checkBtn);
    checkBtn.addEventListener('click', function(e) {
        //removetaskDOM();
        removeTask();
    })
}

function removeTask (infoArray) {
    console.log(infoArray.taskIndex);
    console.log(infoArray.taskProjectArray);
    infoArray.taskProjectArray.data.splice(infoArray.taskIndex, 1)
    /*console.log(index);
    projectArray.splice(index, 1);*/
}

class task {
    constructor(name, project) {
        this.name = name.value;
        this.project = project.value;
    }

    getName() {
        return console.log(this.name);
    }

    getProject(){
        return console.log(this.project);
    }
}

function addTask () {
    const taskName = document.querySelector('#taskName');
    const taskLocation = document.querySelector('#location');
    let newTask = new task(taskName, taskLocation);

    let infoArray = addTaskToProjetArray(newTask, taskLocation.value);
    console.log('pzpz')
    //removeTask(addTaskToProjetArray(newTask, taskLocation.value))
    showTask(newTask);
    //removeTaskListener();
    
    console.log('addTask() works');


    const checkBtn = document.querySelector('.checkBtn')
    console.log(checkBtn);
    checkBtn.addEventListener('click', function(e) {
        //removetaskDOM();
        removeTask(infoArray);
    })
}

export { submitListener, removeTaskListener }