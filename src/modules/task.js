class task {
    constructor(name, project) {
        this.name = name;
        this.project = project;
    }

    getName() {
        return this.name;
    }

    getProject(){
        return this.project;
    }
}

function addTask () {
    const taskName = document.querySelector('#taskName');
    const taskLocation = document.querySelector('#location');
    let task = new task(taskName, taskLocation);

    console.log('works')
}

export { addTask }