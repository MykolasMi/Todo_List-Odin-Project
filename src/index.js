import { addNew } from './modules/dom';
import { addTask } from './modules/task';
listener();
submitListener();

function listener () {
    const addProject = document.querySelector('.addProject')

    addProject.addEventListener('click', function(e) {
        e.preventDefault();

        addNew();
})}

function submitListener () {
    const submitBtn = document.querySelector('.submitBtn')
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault;
        addTask();
    })
}

