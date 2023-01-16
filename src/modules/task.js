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
    //let personal = [];
    const taskName = document.querySelector('#taskName');
    const taskLocation = document.querySelector('#location');

    let newTask = new task(taskName, taskLocation);

    addTaskToProjetArray(newTask, taskLocation.value);

    //personal.addTaskToProject(newTask);

    /*console.log(taskLocation.value);
    let selectedArray = taskLocation.value; //t.value.push is not a function?
    console.log(selectedArray);
    console.log(personal);
    console.log(newTask)
    console.log(newProject) //PADARYTI IS CLASS FUNCTIONO BET PERSONAL DABAR NET NE CLASS

    //padaryti kad cia selectintu is esamu arrays

    selectedArray.push(newTask); //padaryti kad pushintu i tinkama array projekta*/



    showTask(newTask.name);
    console.log('addTask() works');
}


export { submitListener }