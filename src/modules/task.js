let personal = [];

const submitListener = () => {
    const submitBtn = document.querySelector('.submitBtn')
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault;
        alert('blet')
        addTask();
        alert('blet2')
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
    const taskName = document.querySelector('#taskName');
    const taskLocation = document.querySelector('#location');

    let task1 = new task(taskName, taskLocation);
    personal.push(task);

    console.log('works');
}

export { submitListener }