const addNew = () => {
    const addWindow = document.querySelector('.addWindow');
    addWindow.classList.toggle('hide');
}

const showTask = (task) => {
    const table = document.querySelector('#table');
    const tbody = document.createElement('tbody');
    const row = document.createElement('tr');
    const taskName = document.createElement('td');
    const taskProject = document.createElement('td');
    const timeLeft = document.createElement('td');
    const checkBtn = document.createElement('button');
    const checkIcon = document.createElement('img');

    taskName.textContent = task.name;
    taskProject.textContent = task.project;
    timeLeft.textContent = 'xx:xx';
    checkIcon.src = '../src/checkTask.png';
    checkBtn.classList.add('checkBtn');

    table.appendChild(tbody);
    tbody.appendChild(row);
    row.appendChild(taskName);
    row.appendChild(taskProject);
    row.appendChild(timeLeft);
    row.appendChild(checkBtn);
    checkBtn.appendChild(checkIcon);
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
    const projectOption = document.createElement('option');
    projectOption.value = newProject.name;
    projectOption.textContent = newProject.name;
    options.appendChild(projectOption);
}

export { addNew, showTask, addProject, showProjects, loadProjectsForm }