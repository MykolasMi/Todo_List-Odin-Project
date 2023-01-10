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

export { addNew, showTask }
