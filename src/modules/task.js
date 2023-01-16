import { addNew, showTask } from "./dom";
import { addTaskToProjetArray } from "./projects";

function submitListener () {
    const form = document.querySelector('#form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask();
        addNew();
    })
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

    addTaskToProjetArray(newTask, taskLocation.value);
    showTask(newTask);
    console.log('addTask() works');
}


export { submitListener }