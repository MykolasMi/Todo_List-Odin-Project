import { addProject } from "./dom";
import { showProjects } from "./dom";

let projects = [];

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
    projects.push(newProject);

    showProjects(newProject);
}

class project {
    constructor(name) {
        this.name = name.value
    }
}

export { windowListener, submitListenerPr };