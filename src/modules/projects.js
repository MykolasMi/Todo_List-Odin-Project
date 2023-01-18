import { addProject } from "./dom";
import { showProjects } from "./dom";
import { loadProjectsForm } from "./dom";
import { removeTaskListener } from "./task";

class project {
    constructor(name) {
        this.name = name;
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
}

function associateInputWithArray(projectArray) {
    for (let i=0; i<projects.length; i++) {
        if (projects[i].name == projectArray) {
            return projects[i];
        }
        else {
            continue
        }
    }
}

function addTaskToProjetArray (newTask, projectArray) {
    associateInputWithArray(projectArray).addTaskToProject(newTask);
    console.log('...')
    console.log(associateInputWithArray(projectArray))
    let newInfoArray = new infoArray(projectArray.indexOf(newTask), associateInputWithArray(projectArray))
    class infoArray {
        constructor(taskIndex, taskprojectArray) {
            this.taskIndex = taskIndex;
            this.taskProjectArray = taskprojectArray;
        }
    } //sumerginti sita class su tasko class ateity
    return newInfoArray;

    returnArrayIndex(projectArray.indexOf(newTask), associateInputWithArray(projectArray));
    console.log('[[')
    console.log(newTask)
    console.log(projectArray.indexOf(newTask), associateInputWithArray(projectArray))
    console.log(associateInputWithArray(projectArray))
    console.log(personal); //ISSIAISKINTI KELINTAS JIS ARRAY ELEMENTAS IR JI NAIKINTI KITOJ FUNKCIJOJ
}



function returnArrayIndex (index, projectArray) {
    console.log(index);
    console.log(projectArray);
    let taskIndex = index;
    let taskProjectArray = projectArray;
    console.log('...')
    console.log(indexX)
    //console.log(indexX) //neranda butent sito tasko vietos, cj nes neasocijuota
}

function removeTask () {
    taskProjectArray.splice(taskIndex, 1); //reik gauti situs variables
}

export { windowListener, submitListenerPr, addTaskToProjetArray, returnArrayIndex};