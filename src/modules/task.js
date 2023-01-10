import { addNew, showTask } from "./dom";

let personal = [];

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
    personal.push(task);

    showTask(newTask.name);
    console.log('works');
}


export { submitListener }