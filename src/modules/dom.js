const addNew = () => {
    //const body = document.querySelector('body');
    //body.classList.toggle('darken');

    const addWindow = document.querySelector('.addWindow');
    //addWindow.classList.toggle('darken');
    addWindow.classList.toggle('hide');
}

const showTask = (task) => {
    const table = document.querySelector('#table')
    const row = document.createElement('tr')
    const taskName = document.createElement('tr')
    taskName.textContent = task;
    
    table.appendChild(row);
    row.appendChild(taskName);
}

function addProject() {
    const addProjects = document.querySelector('.addProjects');
    addProjects.classList.toggle('hide');
}

const showProjects = (newProject) => {
    const projects = document.querySelector('.projects');
    const project = document.createElement('div');
    project.textContent = newProject.name;
    projects.appendChild(project);
}

function loadProjectsForm(newProject) {
    const options = document.querySelector('#location');
    //for(let i=0; i<projects.length; i++) {
        const projectOption = document.createElement('option');
        projectOption.value = newProject.name;
        projectOption.textContent = newProject.name;
        options.appendChild(projectOption);
    //}
}

export { addNew, showTask, addProject, showProjects, loadProjectsForm }