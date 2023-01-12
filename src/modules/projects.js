import { addProject } from "./dom";
import { showProjects } from "./dom";
import { loadProjectsForm } from "./dom";

let personal = [];
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
        addProjects();
    })
}

function addProjects () {
    const projectName = document.querySelector('#projectName')

    let newProject = new project(projectName);
    projects.push(newProject);
    showProjects(newProject);
    loadProjectsForm(newProject);

    console.log(projects);
    console.log(newProject);
    console.log('blet');
}

class project {
    constructor(name) {
        this.name = name.value; //PADARYTI IS SITO KAD KURTU ARRAY
        this.length=0;
        this.data = [];
    }
}

export { windowListener, submitListenerPr };