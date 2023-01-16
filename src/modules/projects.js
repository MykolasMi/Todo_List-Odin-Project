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


function windowListener () {
    const addTask = document.querySelector('.addTask')

    addTask.addEventListener('click', function(e) {
        addProject();
})}

function submitListenerPr () {
    const formPr = document.querySelector('#formProject');
    formPr.addEventListener('submit', function(event) {
        event.preventDefault();
        const projectName = document.querySelector('#projectName').value
        addProjects(projectName);
    })
}

function addProjects (projectName) {
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
            return projects[i];
        }
        else {
            console.log('continue')
            continue
        }
    }
}

function addTaskToProjetArray (newTask, projectArray) {
    associateInputWithArray(projectArray).addTaskToProject(newTask);
    console.log(personal);
}

export { windowListener, submitListenerPr, addTaskToProjetArray};