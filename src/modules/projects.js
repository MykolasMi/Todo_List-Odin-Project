import { addProject } from "./dom";
import { showProjects } from "./dom";
import { loadProjectsForm } from "./dom";

class project {
    constructor(name) {
        this.name = name;
        this.length = 0;
        this.data = [];
    }

    addTaskToProject(newTask) {
        this.data.push(newTask)
    }
}


    let personal = new project('personal')
    let projects = [];
    projects.push(personal);

    /*console.log(personal);
    let task = 'lol'
    personal.data.push(task);
    personal.addTaskToProject(task);
    console.log(personal); //VEIKIA CLASS FUNKCIJA PRIDETI TASKUS
    console.log('...')
    console.log(personal.data);*/ //VEIKIA ARRAY CLASS REIKIA DB PUSHINT TASKUS





function windowListener () {
    const addTask = document.querySelector('.addTask')

    addTask.addEventListener('click', function(e) {
        addProject();
})}

function submitListenerPr () {
    const formPr = document.querySelector('#formProject');
    formPr.addEventListener('submit', function(event) {
        event.preventDefault();
        addProjects();
    })
}

function addProjects () {
    const projectName = document.querySelector('#projectName')

    let newProject = new project(projectName);
    projects.push(newProject); //perkelt sita i class
    showProjects(newProject);
    loadProjectsForm(newProject);

    console.log(projects);
    console.log(newProject);
    console.log('blet');
}

function associateInputWithArray(projectArray) {
    console.log('..')
    console.log(projects)
    console.log(projects[0].name)
    console.log(projectArray)
    for (let i=0; i<projects.length; i++) {
        if (projects[i].name == projectArray) {
            console.log('zjbs')
            //let num = [i]
            return projects[i];
        }
        else {
            console.log('continue')
            continue
        }
    }
}

function addTaskToProjetArray (newTask, projectArray) {
    //associateInputWithArray(projectArray);
    //console.log(num)
    associateInputWithArray(projectArray).addTaskToProject(newTask);
    console.log(personal);
    //console.log(newTask)
    //console.log(projectArray.value)
    //projectArray.value.addTaskToProject(newTask);
}

export { windowListener, submitListenerPr, addTaskToProjetArray};